"use client";

import { SERVICES } from "@/constants/services";
import { memo, useCallback, useEffect, useRef } from "react";
import styles from "./Services.module.css";

export const Services = memo(() => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
    const percentRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const animationRefs = useRef<number[]>([]);

    const startAnimation = useCallback((index: number, targetPercent: number) => {
        const canvas = canvasRefs.current[index];
        const percentElement = percentRefs.current[index];

        if (!canvas || !percentElement) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = 290;
        const lineWidth = 1;
        const radius = 135;
        const center = size / 2;

        let startTime: number | null = null;
        const duration = 2000;

        const easeOutQuart = (x: number): number => {
            return 1 - Math.pow(1 - x, 4);
        };

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Use easeOutQuart for smooth deceleration
            const easedProgress = easeOutQuart(progress);
            const currentPercent = easedProgress * targetPercent;

            // Clear canvas
            ctx.clearRect(0, 0, size, size);

            // Draw progress arc - match the original light gray color
            if (currentPercent > 0) {
                const startAngle = -Math.PI / 2; // Start from top
                const endAngle = startAngle + (Math.PI * 2 * currentPercent) / 100;

                ctx.beginPath();
                ctx.arc(center, center, radius, startAngle, endAngle, false);
                ctx.strokeStyle = '#E8E8E8';
                ctx.lineWidth = lineWidth;
                ctx.lineCap = 'round';
                ctx.stroke();
            }

            // Update percentage text
            percentElement.textContent = Math.round(currentPercent).toString();

            if (progress < 1) {
                const animationId = requestAnimationFrame(animate);
                animationRefs.current[index] = animationId;
            }
        };

        const animationId = requestAnimationFrame(animate);
        animationRefs.current[index] = animationId;
    }, []);

    const startAllAnimations = useCallback(() => {
        SERVICES.forEach((service, index) => {
            startAnimation(index, service.percent);
        });
    }, [startAnimation]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startAllAnimations();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3, rootMargin: '50px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            observer.disconnect();
            animationRefs.current.forEach(id => cancelAnimationFrame(id));
            animationRefs.current = [];
        };
    }, [startAllAnimations]);

    const setCanvasRef = (element: HTMLCanvasElement | null, index: number) => {
        canvasRefs.current[index] = element;
    };

    const setPercentRef = (element: HTMLSpanElement | null, index: number) => {
        percentRefs.current[index] = element;
    };

    return (
        <section
            className={styles.servicesWrap}
            ref={sectionRef}
        >
            <div className="custom-container">
                <div className={styles.servicesGrid}>
                    {SERVICES.map((service, index) => (
                        <div
                            key={index}
                            className={styles.serviceItem}
                        >
                            <span
                                className={styles.chart}
                                data-percent={service.percent}
                            >
                                <canvas
                                    ref={(el) => setCanvasRef(el, index)}
                                    width={290}
                                    height={290}
                                />
                                <span
                                    ref={(el) => setPercentRef(el, index)}
                                    className={styles.percent}
                                >
                                    0
                                </span>
                                <p>{service.name}</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Services.displayName = "Services";