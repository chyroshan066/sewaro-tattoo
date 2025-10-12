"use client";

import { Icon } from "@iconify/react";
import { memo, useState } from "react";

export const Interview = memo(() => {
    const [showModal, setShowModal] = useState(false);
    const videoSrc = "https://www.youtube.com/embed/W_tIumKa8VY";

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
                className="interview-wrap"
            >
                <div
                    className="interview-bg-img"
                    style={{
                        background: "url('images/banner-2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <div className="container interview-content">
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
                                    "Consider what you desire. Your tattoo artist will never tell you what tattoo to have."
                                </h2>
                                <div className="video-btn">
                                    <a
                                        onClick={handlePlayClick}
                                        className="play-btn"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <Icon icon="bi:play-fill" className="iconify" />
                                    </a>
                                    <a
                                        className="btn"
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
                                        watch it now
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Modal */}
            {showModal && (
                <div
                    className="modal fade show"
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
                        className="modal-dialog"
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
                                className="modal-body"
                                style={{
                                    position: 'relative',
                                    padding: 0
                                }}
                            >
                                <button
                                    type="button"
                                    className="btn-close"
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
                                        }}></span>
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
                                    ></iframe>
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