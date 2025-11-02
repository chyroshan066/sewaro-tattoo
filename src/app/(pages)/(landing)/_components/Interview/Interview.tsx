"use client";

import { Icon } from "@iconify/react";
import { memo, useState } from "react";
import styles from "./Interview.module.css";

export const Interview = memo(() => {
    const [showModal, setShowModal] = useState(false);
    const videoSrc = "/images/interview.webm";

    const handlePlayClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section
                id="interview"
                className={styles.interviewWrap}
            >
                <div
                    className={styles.interviewBgImg}
                    style={{
                        background: "url('images/banner-2.webp')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className={`custom-container ${styles.interviewContent}`}>
                        <div className="row">
                            <div className="col-md-8">
                                <h2 style={{
                                    fontFamily: "var(--font-rozhaOne),'Rozha One', serif",
                                    fontSize: "60px",
                                    lineHeight: "110%",
                                    letterSpacing: "-0.02em",
                                    textTransform: "capitalize",
                                    color: "#fff"
                                }}>
                                    &quot;Every mark tells a story. Every story deserves to be art.&quot;
                                </h2>
                                <div className={styles.videoBtn}>
                                    <a
                                        onClick={handlePlayClick}
                                        className={styles.playBtn}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Icon icon="bi:play-fill" className="iconify" />
                                    </a>
                                    <a
                                        onClick={handlePlayClick}
                                        style={{
                                            cursor: 'pointer',
                                            fontFamily: "var(--font-oswald),'Oswald', sans-serif",
                                            color: "white",
                                            marginLeft: "28px",
                                            letterSpacing: "0.1em",
                                            padding: 0,
                                            border: "none",
                                            fontSize: "18px",
                                        }}
                                    >
                                        WATCH IT NOW
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {showModal && (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 9999
                    }}
                    onClick={handleCloseModal}
                >
                    <div
                        className={styles.modalDialog}
                        style={{
                            maxWidth: '800px',
                            width: '90%',
                            margin: 0
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="modal-content"
                            style={{
                                backgroundColor: '#fff',
                                borderRadius: '8px',
                                position: 'relative',
                                padding: '50px 20px 20px 20px'
                            }}
                        >
                            <div
                                className={styles.modalBody}
                                style={{
                                    position: 'relative',
                                    padding: 0
                                }}
                            >
                                <button
                                    type="button"
                                    className={styles.btnClose}
                                    onClick={handleCloseModal}
                                    aria-label="Close"
                                    style={{
                                        position: 'absolute',
                                        left: '0px',
                                        top: '-40px',
                                        zIndex: 10000,
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        width: '30px',
                                        height: '30px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        padding: 0,
                                        filter: 'invert(0) brightness(0)',
                                    }}
                                >
                                    <span style={{
                                        display: 'block',
                                        width: '20px',
                                        height: '2px',
                                        backgroundColor: '#000',
                                        transform: 'rotate(45deg)',
                                        position: 'relative',
                                    }}>
                                        <span style={{
                                            display: 'block',
                                            width: '20px',
                                            height: '2px',
                                            backgroundColor: '#000',
                                            transform: 'rotate(-90deg)',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                        }} />
                                    </span>
                                </button>
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    overflow: 'hidden'
                                }}>
                                    <iframe
                                        src={`${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`}
                                        allowFullScreen
                                        allow="autoplay"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

Interview.displayName = "Interview";