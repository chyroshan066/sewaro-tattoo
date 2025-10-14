"use client";

import { memo } from "react";
import { Button } from "./utility/Button/Button";

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
                            <Button
                                variant="btnOutline"
                                btnText="Read More"
                                marginTop="mt-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

Hero.displayName = "Hero";