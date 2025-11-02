"use client";

// import { Icon } from "@iconify/react";
import Image from "next/image";
import { memo } from "react";
import styles from './Artist.module.css';
import { TitleHeader } from "@/components/utility/TitleHeader/TitleHeader";
import { ImgSrc, Name, SocialLinks, Title } from "@/types";

interface FeaturedArtist extends Name, Title, ImgSrc, SocialLinks {
    bio: string[];
    specialties: string[];
}

// interface TeamArtist extends Name, ImgSrc, SocialLinks {
//     specialty: string;
// }

const featuredArtist: FeaturedArtist = {
    name: "Sagar Limbu",
    title: "Founder & Master Artist",
    imgSrc: "/images/banner-2.webp",
    bio: [
        "With over 20 years of experience in the tattoo industry, Sagar Limbu is the visionary founder of Sewaro Tattoo. His journey began in 2001 with a passion for transforming skin into living canvases of art.",
        "Sagar specializes in custom designs, intricate traditional artwork, and contemporary styles. His attention to detail and commitment to hygiene standards have set the benchmark for tattoo artistry in Nepal.",
        "Under his guidance, Sewaro Tattoo has grown from a single studio to four thriving locations across Nepal, each maintaining the same dedication to quality and artistic excellence that defines his work."
    ],
    specialties: [
        "Custom Tattoo Designs",
        "Traditional Artwork",
        "Portrait Tattoos",
        "Cover-ups & Modifications",
        "Black & Grey Realism"
    ],
    social: {
        instagram: "https://instagram.com/sagarlimbu",
        facebook: "https://facebook.com/sagarlimbu",
    }
};

// const teamArtists: TeamArtist[] = [
//     {
//         name: "Artist Name 1",
//         imgSrc: "/images/banner-2.webp",
//         specialty: "Neo-Traditional",
//         social: {
//             instagram: "https://instagram.com/artist1",
//             facebook: "https://facebook.com/artist1",
//         }
//     },
//     {
//         name: "Artist Name 2",
//         imgSrc: "/images/banner-2.webp",
//         specialty: "Geometric & Dotwork",
//         social: {
//             instagram: "https://instagram.com/artist2",
//             facebook: "https://facebook.com/artist2",
//         }
//     },
//     {
//         name: "Artist Name 3",
//         imgSrc: "/images/banner-2.webp",
//         specialty: "Japanese Traditional",
//         social: {
//             instagram: "https://instagram.com/artist3",
//             facebook: "https://facebook.com/artist3",
//         }
//     },
//     {
//         name: "Artist Name 4",
//         imgSrc: "/images/banner-2.webp",
//         specialty: "Watercolor & Abstract",
//         social: {
//             instagram: "https://instagram.com/artist4",
//             facebook: "https://facebook.com/artist4",
//         }
//     }
// ];

export const Artist = memo(() => {
    return (
        <section
            id="artist"
            className={styles.artistWrap}
        >
            {/* Featured Artist Section */}
            <div className="custom-container">

                <TitleHeader text1="Meet The Artist" />

                <div className={`row ${styles.featuredArtistRow}`}>
                    {/* Artist Image */}
                    <div className={`col-md-6 ${styles.artistImage}`}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={featuredArtist.imgSrc}
                                alt={featuredArtist.name}
                                width={600}
                                height={800}
                                className={styles.artistPhoto}
                            />
                        </div>
                    </div>

                    {/* Artist Info */}
                    <div className={`col-md-6 ${styles.artistContent}`}>
                        <div className={styles.artistInfo}>
                            <h2 className={styles.artistName}>{featuredArtist.name}</h2>
                            <p className={styles.artistTitle}>{featuredArtist.title}</p>

                            <div className={styles.artistBio}>
                                {featuredArtist.bio.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Specialties */}
                            <div className={styles.specialties}>
                                <h3>Specialties:</h3>
                                <ul className={styles.specialtyList}>
                                    {featuredArtist.specialties.map((specialty, index) => (
                                        <li key={index}>{specialty}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Links */}
                            {/* <div className={styles.socialLinks}>
                                <a
                                    href={featuredArtist.social.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                >
                                    <Icon icon="ri:facebook-fill" />
                                </a>
                                <a
                                    href={featuredArtist.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <Icon icon="mdi:instagram" />
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Artists Section */}
            {/* <div className={styles.teamSection}>
                <div className="custom-container">
                    <div className={styles.teamHeader}>
                        <h2>Our Talented Team</h2>
                        <p>Meet the skilled artists bringing your vision to life</p>
                    </div>

                    <div className={styles.teamGrid}>
                        {teamArtists.map((artist, index) => (
                            <div
                                key={index}
                                className={styles.teamCard}
                            >
                                <div className={styles.teamImageContainer}>
                                    <Image
                                        src={artist.imgSrc}
                                        alt={artist.name}
                                        width={400}
                                        height={500}
                                        className={styles.teamImage}
                                    />
                                    <div className={styles.teamOverlay}>
                                        <div className={styles.teamSocial}>
                                            <a
                                                href={artist.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${artist.name} Facebook`}
                                            >
                                                <Icon icon="ri:facebook-fill" />
                                            </a>
                                            <a
                                                href={artist.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${artist.name} Instagram`}
                                            >
                                                <Icon icon="mdi:instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>{artist.name}</h3>
                                    <p>{artist.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
        </section>
    );
});

Artist.displayName = "Artist";