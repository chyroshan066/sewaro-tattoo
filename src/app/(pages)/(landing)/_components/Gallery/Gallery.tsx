"use client";

import { GALLERYCOLUMNS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useRef, useState, useCallback } from "react";
import { TitleHeader } from "@/components/utility/TitleHeader/TitleHeader";
import styles from "./Gallery.module.css";
import btnStyles from "@/components/utility/Button/Button.module.css";
import { Icon } from "@iconify/react";

interface ChocolatInstance {
    destroy: () => void;
}

interface ChocolatOptions {
    imageSize?: 'contain' | 'cover' | 'native';
    loop?: boolean;
}

interface ChocolatConstructor {
    (elements: NodeListOf<Element> | Element[], options?: ChocolatOptions): ChocolatInstance;
}

declare global {
    interface Window {
        Chocolat?: ChocolatConstructor;
    }
}

export const Gallery = memo(() => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const chocolatInstanceRef = useRef<ChocolatInstance>(null);
    const isInitializedRef = useRef<boolean>(false);

    const [visibleColumns, setVisibleColumns] = useState(4);

    const totalColumns = GALLERYCOLUMNS.length;
    const currentColumns = GALLERYCOLUMNS.slice(0, visibleColumns);
    const hasMoreColumns = visibleColumns < totalColumns;

    const loadMoreImages = useCallback(() => {
        setVisibleColumns(prev => Math.min(prev + 4, totalColumns));
    }, [totalColumns]);

    // Reinitialize Chocolat when columns change
    useEffect(() => {
        if (currentColumns.length > 0 && window.Chocolat && galleryRef.current) {
            const imageLinks = galleryRef.current.querySelectorAll('.image-link');
            if (imageLinks.length > 0) {
                // Destroy previous instance
                if (chocolatInstanceRef.current) {
                    chocolatInstanceRef.current.destroy();
                }

                // Initialize new instance
                chocolatInstanceRef.current = window.Chocolat(imageLinks, {
                    imageSize: 'contain',
                    loop: true,
                });
                isInitializedRef.current = true;
            }
        }
    }, [currentColumns]);

    useEffect(() => {
        // Prevent multiple initializations
        if (isInitializedRef.current) return;

        // Dynamically load Chocolat CSS
        const loadChocolatCSS = () => {
            if (!document.querySelector('link[href*="chocolat"]')) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = 'https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.1.2/css/chocolat.min.css';
                document.head.appendChild(link);
            }
        };

        // Add custom Chocolat styles for better overlay
        const addCustomStyles = () => {
            if (!document.querySelector('#chocolat-custom-styles')) {
                const style = document.createElement('style');
                style.id = 'chocolat-custom-styles';
                style.textContent = `
            .chocolat-overlay {
                background-color: rgba(0, 0, 0, 0.85) !important;
            }
            .chocolat-wrapper {
                z-index: 99999 !important;
            }
            .chocolat-content {
                z-index: 100000 !important;
            }
            .chocolat-close, 
            .chocolat-nav {
                z-index: 100001 !important;
            }
        `;
                document.head.appendChild(style);
            }
        };

        // Dynamically load Chocolat JS
        const loadChocolatJS = () => {
            return new Promise<void>((resolve, reject) => {
                if (typeof window !== 'undefined' && window.Chocolat) {
                    resolve();
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/chocolat/1.1.2/js/chocolat.min.js';
                script.async = true;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error('Failed to load Chocolat'));
                document.body.appendChild(script);
            });
        };

        // Initialize Chocolat lightbox
        const initChocolat = async () => {
            try {
                // Check if already initialized
                if (isInitializedRef.current) return;

                loadChocolatCSS();
                addCustomStyles();
                await loadChocolatJS();

                if (galleryRef.current && window.Chocolat && !isInitializedRef.current) {
                    const imageLinks = galleryRef.current.querySelectorAll('.image-link');

                    // Check if elements already have Chocolat initialized
                    const hasChocolatInitialized = Array.from(imageLinks).some(link =>
                        link.getAttribute('data-chocolat') !== null
                    );

                    if (imageLinks.length > 0 && !hasChocolatInitialized) {
                        chocolatInstanceRef.current = window.Chocolat(imageLinks, {
                            imageSize: 'contain',
                            loop: true,
                        });

                        isInitializedRef.current = true;
                    }
                }
            } catch (error) {
                console.error('Error initializing Chocolat:', error);
            }
        };

        // Use a small timeout to ensure DOM is ready
        const initTimeout = setTimeout(() => {
            initChocolat();
        }, 100);

        // Cleanup function
        return () => {
            clearTimeout(initTimeout);
            if (chocolatInstanceRef.current && typeof chocolatInstanceRef.current.destroy === 'function') {
                chocolatInstanceRef.current.destroy();
                isInitializedRef.current = false;
            }

            // Clean up dynamically added styles and scripts
            const chocolatCSS = document.querySelector('link[href*="chocolat"]');
            const chocolatJS = document.querySelector('script[src*="chocolat"]');
            const customStyles = document.querySelector('#chocolat-custom-styles');

            if (chocolatCSS) chocolatCSS.remove();
            if (chocolatJS) chocolatJS.remove();
            if (customStyles) customStyles.remove();
        };
    }, []);

    return (
        <section
            id="gallery"
            className={styles.galleryWrap}
            style={{ background: "#F9F9F9" }}
            ref={galleryRef}
        >
            <div className="custom-container">
                <TitleHeader
                    text1="Check Our"
                    text2="Gallery"
                />
            </div>

            <div className={styles.containerFluid}>
                <div className={`row ${styles.popupGallery} ${styles.row}`}>

                    {currentColumns.map((column, columnIndex) => (
                        <div
                            key={columnIndex}
                            className={`col-12 col-md-3 ${styles.col12} ${styles.colMd3}`}
                        >
                            {column.map((image, index) => (
                                <Link
                                    key={index}
                                    href={image}
                                    className="image-link"
                                >
                                    <Image
                                        src={image}
                                        alt="gallery-img"
                                        width={500}
                                        height={500}
                                        className="w-full h-auto cursor-pointer transition-all duration-300 ease-in-out hover:brightness-60"
                                        style={{
                                            width: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </Link>
                            ))}
                        </div>
                    ))}

                </div>

                <div className={styles.textCenter}>
                    <button
                        className={`${btnStyles.btn} ${btnStyles.btnBlack} ${!hasMoreColumns ? styles.disabled : ''}`}
                        onClick={loadMoreImages}
                        disabled={!hasMoreColumns}
                    >
                        {hasMoreColumns ? 'View More' : 'No More Images'}
                        <Icon icon="la:arrow-right" />
                    </button>
                </div>

            </div>
        </section>
    );
});

Gallery.displayName = "Gallery";