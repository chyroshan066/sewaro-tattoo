// 'use client';

// import { NAVLINKS } from "@/constants";
// import { SOCIALLINKS } from "@/constants/socialLinks";
// import { Icon } from "@iconify/react";
// import Link from "next/link";
// import { memo, useEffect, useState, useCallback } from "react";
// import { usePathname } from "next/navigation";

// export const Header = memo(() => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isMobile, setIsMobile] = useState(false);
//     const [activeSection, setActiveSection] = useState('/#home');
//     const pathname = usePathname();

//     const toggleMobileMenu = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
//         e.preventDefault();
//         setIsMobileMenuOpen(prev => !prev);
//     }, []);

//     const handleNavLinkClick = useCallback(() => {
//         if (isMobile) {
//             setIsMobileMenuOpen(false);
//         }
//     }, [isMobile]);

//     useEffect(() => {
//         const checkMobile = () => {
//             const toggleButton = document.querySelector('.header-menu-toggle');
//             if (toggleButton) {
//                 const isVisible = window.getComputedStyle(toggleButton).display !== 'none';
//                 setIsMobile(isVisible);
//             }
//         };

//         // Initial check
//         checkMobile();

//         window.addEventListener('resize', checkMobile);

//         return () => {
//             window.removeEventListener('resize', checkMobile);
//         };
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = NAVLINKS.map(link => link.href).filter(href => href.startsWith('#'));
//             const scrollPosition = window.scrollY + 200; // Offset for better detection

//             for (let i = sections.length - 1; i >= 0; i--) {
//                 const section = document.querySelector(sections[i]);
//                 if (section) {
//                     const sectionTop = (section as HTMLElement).offsetTop;
//                     if (scrollPosition >= sectionTop) {
//                         setActiveSection(sections[i]);
//                         break;
//                     }
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         handleScroll(); // Initial check

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     return (
//         <header className="header-wrap">
//             <div className="header-logo">
//                 <Link
//                     className="site-logo"
//                     href="/"
//                 >
//                     <img
//                         src="/images/logo.webp"
//                         alt="logo"
//                     />
//                 </Link>
//             </div>

//             <nav
//                 className={`header-nav-wrap${isMobile ? ' mobile' : ''}`}
//                 style={{
//                     display: isMobile && !isMobileMenuOpen ? 'none' : 'block'
//                 }}
//             >
//                 <ul
//                     id="navbar"
//                     className="header-main-nav"
//                 >
//                     {NAVLINKS.map((link, index) => (
//                         <li key={index}>
//                             <Link
//                                 href={link.href}
//                                 className={`nav-link${activeSection === link.href ? ' active' : ''}`}
//                                 onClick={handleNavLinkClick}
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 <ul className="header-social">
//                     {SOCIALLINKS.map((link, index) => (
//                         <li key={index}>
//                             <a
//                                 className="social-icon"
//                                 href={link.href}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 <Icon
//                                     icon={link.icon}
//                                     style={{ color: '#111' }}
//                                 />
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//             <Link
//                 className={`header-menu-toggle${isMobileMenuOpen ? ' is-clicked' : ''}`}
//                 href="/#"
//                 onClick={toggleMobileMenu}
//             >
//                 <span>Menu</span>
//             </Link>
//         </header>
//     );
// });

// Header.displayName = "Header";








'use client';

import { NAVLINKS } from "@/constants";
import { SOCIALLINKS } from "@/constants/socialLinks";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { memo, useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

export const Header = memo(() => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');
    const pathname = usePathname();

    // Toggle mobile menu
    const toggleMobileMenu = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    // Close mobile menu when nav link is clicked
    const handleNavLinkClick = useCallback(() => {
        if (isMobile) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobile]);

    // Check if viewport is mobile and update state
    useEffect(() => {
        const checkMobile = () => {
            const toggleButton = document.querySelector('.header-menu-toggle');
            if (toggleButton) {
                const isVisible = window.getComputedStyle(toggleButton).display !== 'none';
                setIsMobile(isVisible);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Scroll spy functionality
    useEffect(() => {
        const handleScroll = () => {
            const sections = NAVLINKS.map(link => link.href).filter(href => href.startsWith('#'));
            const scrollPosition = window.scrollY + 200; // Offset for better detection

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
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header-wrap">
            <div className="header-logo">
                <Link
                    className="site-logo"
                    href="/"
                >
                    <img
                        src="/images/logo.webp"
                        alt="logo"
                    />
                </Link>
            </div>

            <nav
                className={`header-nav-wrap${isMobile ? ' mobile' : ''}`}
                style={{
                    display: isMobile && !isMobileMenuOpen ? 'none' : 'block'
                }}
            >
                <ul
                    id="navbar"
                    className="header-main-nav"
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

                <ul className="header-social">
                    {SOCIALLINKS.map((link, index) => (
                        <li key={index}>
                            <a
                                className="social-icon"
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon={link.icon} style={{ color: '#111' }} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <Link
                className={`header-menu-toggle${isMobileMenuOpen ? ' is-clicked' : ''}`}
                href="#"
                onClick={toggleMobileMenu}
            >
                <span>Menu</span>
            </Link>
        </header>
    );
});

Header.displayName = "Header";