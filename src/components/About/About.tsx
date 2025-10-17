"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { memo, useState } from "react";
import { TitleHeader } from "../utility/TitleHeader/TitleHeader";
import styles from "./About.module.css";
import btnStyles from "../utility/Button/Button.module.css"

export const About = memo(() => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return <section
        id="about"
        className={styles.aboutWrap}
    >
        <div className="custom-container">
            <div className={`row ${styles.row}`}>
                <div className={`col-md-6 ${styles.sectionImage}`}>
                    <Image
                        src="/images/about.webp"
                        alt="about"
                        width={600}
                        height={800}
                        className="w-full h-auto"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'inline-block'
                        }}
                    />
                </div>

                <div className={`col-md-6 ${styles.aboutMeContent}`}>

                    <TitleHeader
                        text1="Our"
                        text2="Story"
                    />

                    <div className={styles.shortDescription}>
                        <p>Founded by renowned tattoo artist Sagar Limbu, Sewaro Tattoo has been Nepal&apos;s trusted tattoo destination since 2001, bringing exceptional body art to four strategic locations across the country.</p>
                        <p>With studios in <b>Mukti Chowk, Birtamode; Near Taxi Stand, Damak; Biratnagar Road (opposite Radha Krishna Mandir), Itahari;</b> and <b>Jawalakhel under SBI Bank, Lalitpur,</b> we make professional tattoo artistry accessible throughout Nepal..</p>
                        {showAll && (
                            <>
                                <p>Our experienced team specializes in custom designs, cover-ups, traditional artwork, and modern tattoo styles, maintaining the highest standards of hygiene and precision. Whether you&apos;re in Jhapa, Sunsari, or Lalitpur, each Sewaro Tattoo studio delivers the same commitment to quality, safety, and bringing your unique vision to life.</p>
                                <p><b>Why choose Sewaro Tattoo?</b></p>
                                <p>
                                    ● 20+ years of tattooing excellence <br />
                                    ● Four convenient locations across Nepal <br />
                                    ● Custom designs tailored to your personality <br />
                                    ● Strict hygiene protocols and safety standards <br />
                                    ● Professional aftercare guidance <br />
                                    ● Led by founder and master artist Sagar Limbu <br />
                                </p>
                                <p>Visit any of our studios in Birtamode, Damak, Itahari, or Lalitpur to experience the artistry that has made Sewaro Tattoo Eastern Nepal&apos;s most trusted tattoo destination.</p>
                            </>
                        )}
                        <button
                            className={`${btnStyles.btnBlank}`}
                            onClick={toggleShowAll}
                            type="button"
                        >
                            {showAll ? 'Show Less' : 'Know More'}
                            <Icon
                                icon={showAll ? "la:arrow-up" : "la:arrow-right"}
                                style={{
                                    marginLeft: "0",
                                    fontSize: "18px"
                                }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>;
});

About.displayName = "About";