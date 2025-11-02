'use client';

import { TESTIMONIALS } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from 'swiper';
import styles from "./Testimonials.module.css";
import Link from "next/link";
import { IconType } from "@/types";

interface SwiperInstance {
    slideNext: () => void;
    slidePrev: () => void;
    update: () => void;
    destroy: () => void;
    activeIndex: number;
    slides: HTMLElement[];
    isEnd: boolean;
    isBeginning: boolean;
    realIndex: number;
}

const NavigationBtn = memo(({
    icon
}: IconType) => (
    <Link
        href="#"
        onClick={(e) => e.preventDefault()}
    >
        <Icon icon={icon} />
    </Link>
));

NavigationBtn.displayName = "NavigationBtn";

export const Testimonials = memo(() => {
    const swiperRef = useRef<SwiperInstance | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const prevButtonRef = useRef<HTMLDivElement>(null);
    const nextButtonRef = useRef<HTMLDivElement>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        // Initialize Swiper
        const initSwiper = async () => {
            try {
                const Swiper = (await import('swiper')).default;
                const { Navigation } = await import('swiper/modules');

                await import('swiper/swiper-bundle.css');

                if (containerRef.current) {
                    const swiper = new Swiper(containerRef.current, {
                        modules: [Navigation],
                        autoHeight: true,
                        spaceBetween: 20,
                        loop: false,
                        navigation: {
                            nextEl: nextButtonRef.current,
                            prevEl: prevButtonRef.current,
                        },
                        on: {
                            slideChange: function (this: SwiperType) {
                                setIsBeginning(this.isBeginning);
                                setIsEnd(this.isEnd);
                            },
                            init: function (this: SwiperType) {
                                setIsBeginning(this.isBeginning);
                                setIsEnd(this.isEnd);
                            }
                        }
                    });

                    swiperRef.current = swiper;
                }
            } catch (error) {
                console.error('Error initializing Swiper:', error);
            }
        };

        initSwiper();

        // Cleanup
        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
            }
        };
    }, []);

    const handlePrevClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (swiperRef.current && !isBeginning) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNextClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (swiperRef.current && !isEnd) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className={styles.testimonialsWrap}>
            <div
                ref={containerRef}
                className={`custom-container swiper mySwiper ${styles.testimonialSlider}`}
            >

                <div className="swiper-wrapper">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${styles.itemContent} swiper-slide`}
                        >
                            <div className={styles.quotationImg}>
                                <Image
                                    src="/images/quotation.webp"
                                    alt="quotation-icon"
                                    width={150}
                                    height={120}
                                    priority={index === 0}
                                />
                            </div>
                            <p className={styles.itemParagraph}>{testimonial.text}</p>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorName}>
                                    {testimonial.author}
                                    <span>Customer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.testimonialSliderBtn}>

                    <div
                        ref={prevButtonRef}
                        className={`${styles.slideButtonPrev} ${isBeginning ? styles.swiperButtonDisabled : ''}`}
                        onClick={handlePrevClick}
                    >
                        <NavigationBtn icon="la:arrow-left" />
                    </div>

                    <div
                        ref={nextButtonRef}
                        className={`${styles.slideButtonNext} ${isEnd ? styles.swiperButtonDisabled : ''}`}
                        onClick={handleNextClick}
                    >
                        <NavigationBtn icon="la:arrow-right" />
                    </div>

                </div>
            </div>
        </section>
    );
});

Testimonials.displayName = "Testimonials";