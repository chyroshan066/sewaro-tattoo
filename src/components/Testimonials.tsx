'use client';

import { TESTIMONIALS } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { memo, useEffect, useRef, useState } from "react";

interface SwiperInstance {
    slideNext: () => void;
    slidePrev: () => void;
    update: () => void;
    destroy: () => void;
    activeIndex: number;
    slides: any[];
    isEnd: boolean;
    isBeginning: boolean;
    realIndex: number;
}

export const Testimonials = memo(() => {
    const swiperRef = useRef<SwiperInstance | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        // Initialize Swiper
        const initSwiper = async () => {
            try {
                const Swiper = (await import('swiper')).default;
                const { Navigation } = await import('swiper/modules');

                await import('swiper/swiper-bundle.css');

                const swiper = new Swiper('.testimonial-slider.swiper', {
                    modules: [Navigation],
                    autoHeight: true,
                    spaceBetween: 20,
                    loop: false,
                    navigation: {
                        nextEl: ".slide-button-next",
                        prevEl: ".slide-button-prev",
                    },
                    on: {
                        slideChange: function (this: any) {
                            setIsBeginning(this.isBeginning);
                            setIsEnd(this.isEnd);
                        },
                        init: function (this: any) {
                            setIsBeginning(this.isBeginning);
                            setIsEnd(this.isEnd);
                        }
                    }
                });

                swiperRef.current = swiper;
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
        <section className="testimonials-wrap">
            <div className="container testimonial-slider swiper mySwiper">

                <div className="swiper-wrapper">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={index}
                            className="item-content swiper-slide"
                        >
                            <div className="quotation-img">
                                <Image
                                    src="/images/quotation.png"
                                    alt="quotation-icon"
                                    width={150}
                                    height={120}
                                    priority={index === 0}
                                />
                            </div>
                            <p className="item-paragraph">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <div className="author-name">
                                    {testimonial.author}
                                    <span>{testimonial.tag}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonial-slider-btn">
                    <div
                        className={`slide-button-prev ${isBeginning ? 'swiper-button-disabled' : ''}`}
                        onClick={handlePrevClick}
                    >
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Icon icon="la:arrow-left" />
                        </a>
                    </div>
                    <div
                        className={`slide-button-next ${isEnd ? 'swiper-button-disabled' : ''}`}
                        onClick={handleNextClick}
                    >
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <Icon icon="la:arrow-right" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
});

Testimonials.displayName = "Testimonials";