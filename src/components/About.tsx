"use client";

import { Icon } from "@iconify/react";
import { memo } from "react";

export const About = memo(() => (
    <section
        id="about"
        className="about-wrap"
    >
        <div className="container">
            <div className="row">
                <div className="section-image col-md-6">
                    <img
                        src="/images/about.png"
                        alt="about"
                        width="100%"
                        height="auto"
                    />
                </div>

                <div className="col-md-6 about-me-content">
                    {/* Sec Title */}
                    <div className="sec-title">
                        <h1 style={{ fontSize: "85px" }}>
                            My <br />Story:
                        </h1>
                    </div>

                    <div className="short-description">
                        <p>In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.</p>
                        <p>Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.</p>
                        <a
                            className="btn btn-blank"
                            href="#"
                            role="button"
                            style={{
                                fontFamily: "var(--font-raleway), sans-serif",
                                fontWeight: "500",
                                letterSpacing: "0.02em",
                                textTransform: "uppercase",
                                marginTop: "22px",
                                paddingBottom: "2px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "8px",
                                fontSize: "18px",
                                lineHeight: "21px",
                                transition: "all 0.3s ease",
                                paddingLeft: "0"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = '#444';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '#111';
                            }}
                        >
                            Know More
                            <Icon
                                icon="la:arrow-right"
                                style={{
                                    marginLeft: "0",
                                    fontSize: "18px"
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
));

About.displayName = "About";