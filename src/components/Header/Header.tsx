'use client';

import { NAVLINKS } from "@/constants";
import { SOCIALLINKS } from "@/constants";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { memo, useEffect, useState, useCallback } from "react";
import styles from "./Header.module.css";

export const Header = memo(() => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    // Check if viewport is mobile
    useEffect(() => {
        const checkMobile = () => {
            // Use window width instead of checking element display
            const isMobileView = window.innerWidth < 1000;
            setIsMobile(isMobileView);

            // Close menu if switching to desktop view
            if (!isMobileView && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
            document.body.style.overflow = ''; // Cleanup
        };
    }, [isMobileMenuOpen]);

    // Toggle mobile menu
    const toggleMobileMenu = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (!isMobile) return; // Only toggle on mobile

        setIsMobileMenuOpen(prev => {
            const newState = !prev;
            document.body.style.overflow = newState ? 'hidden' : '';
            return newState;
        });
    }, [isMobile]);

    const handleNavLinkClick = useCallback(() => {
        if (isMobile && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
        }
    }, [isMobile, isMobileMenuOpen]);

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = NAVLINKS.map(link => link.href).filter(href => href.startsWith('#'));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.querySelector(sections[i]);
                if (section) {
                    const sectionTop = (section as HTMLElement).offsetTop;
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isMobileMenuOpen]);

    return (
        <header className={styles.headerWrap}>
            <div className={styles.headerLogo}>
                <Link
                    href="/"
                    onClick={() => {
                        if (isMobile && isMobileMenuOpen) {
                            setIsMobileMenuOpen(false);
                            document.body.style.overflow = '';
                        }
                    }}
                >
                    <Image
                        src="/images/logo.webp"
                        alt="logo"
                        width={188}
                        height={90}
                    />
                </Link>
            </div>

            <nav
                className={`${styles.headerNavWrap}${isMobile ? ' mobile' : ''}`}
                style={{
                    // Only control display via CSS classes, not inline styles
                    display: (isMobile && !isMobileMenuOpen) ? 'none' : 'block'
                }}
            >
                <ul
                    id="navbar"
                    className={styles.headerMainNav}
                >
                    {NAVLINKS.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.href}
                                className={`nav-link${activeSection === link.href ? ' active' : ''}`}
                                onClick={handleNavLinkClick}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className={styles.headerSocial}>
                    {SOCIALLINKS.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleNavLinkClick}
                            >
                                <Icon icon={link.icon} style={{ color: '#111' }} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <Link
                className={`${styles.headerMenuToggle}${isMobileMenuOpen ? ' is-clicked' : ''}`}
                href="#"
                onClick={toggleMobileMenu}
                style={{ display: isMobile ? 'block' : 'none' }}
            >
                <span>Menu</span>
            </Link>
        </header>
    );
});

Header.displayName = "Header";