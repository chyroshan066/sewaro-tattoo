"use client";

import { Icon } from "@iconify/react";
import { memo } from "react";

export const Hero = memo(() => (
    <section
        id="home"
        className="billboard-wrap"
        style={{ marginTop: 0, padding: 0 }}
    >
        <div
            className="billboard-bg-img"
            style={{
                background: "url('/images/hero-banner.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container billboard-content">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <h1 style={{
                            fontFamily: "var(--font-rozhaOne), serif",
                            fontSize: 'clamp(60px, 8vw, 100px)',
                            lineHeight: '95%',
                            letterSpacing: '-0.02em',
                            textTransform: 'capitalize',
                            color: '#fff',
                            marginBottom: '20px',
                            textAlign: 'center'
                        }}>
                            I&apos;m Void Sir.
                        </h1>
                        <p style={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.
                        </p>
                        <div style={{
                            textAlign: 'center'
                        }}>
                            <a
                                className="btn btn-outline"
                                href="#"
                                role="button"
                                style={{
                                    border: '1px solid rgba(255, 255, 255, 0.7)',
                                    color: '#fff',
                                    background: 'transparent',
                                    padding: '20px 40px',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    fontFamily: "var(--font-oswald), sans-serif",
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    borderRadius: '0',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#fff';
                                    e.currentTarget.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#fff';
                                }}
                            >
                                Read More
                                <Icon icon="la:arrow-right" style={{ marginLeft: '8px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

Hero.displayName = "Hero";