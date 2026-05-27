// "use client";

// import { memo } from "react";
// import styles from "./Hero.module.css";
// import { Button } from "@/components/utility/Button/Button";

// export const Hero = memo(() => (
//     <section
//         id="home"
//         className={styles.billboardWrap}
//         style={{
//             marginTop: 0,
//             padding: 0
//         }}
//     >
//         <div
//             className={styles.billboardBgImg}
//             style={{
//                 background: "url('/images/articles/article1.webp')",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className={`custom-container ${styles.billboardContent}`}>
//                 <div className={`row ${styles.row} ${styles.justifyContentCenter}`}>
//                     <div className={`${styles.colMd8} ${styles.colLg6}`}>
//                         <h1 style={{
//                             fontFamily: "var(--font-rozhaOne), serif",
//                             fontSize: 'clamp(60px, 8vw, 100px)',
//                             lineHeight: '95%',
//                             letterSpacing: '-0.02em',
//                             textTransform: 'capitalize',
//                             color: '#fff',
//                             marginBottom: '20px',
//                             textAlign: 'center'
//                         }}>
//                             Sewaro Tattoo - Art That Lives With You
//                         </h1>
//                         <p style={{
//                             textAlign: 'center',
//                             marginBottom: '30px'
//                         }}>
//                             Tattoos are the stories we choose to wear on our skin forever.
//                         </p>
//                         <div style={{
//                             textAlign: 'center'
//                         }}>
//                             <Button
//                                 variant="btnOutline"
//                                 btnText="Read More"
//                                 marginTop="mt-10"
//                                 href="/#about"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
// ));

// Hero.displayName = "Hero";




















"use client";

import { memo } from "react";
import styles from "./Hero.module.css";
import { Button } from "@/components/utility/Button/Button";

export const Hero = memo(() => (
    <section
        id="home"
        className={styles.billboardWrap}
        style={{
            marginTop: 0,
            padding: 0
        }}
    >
        {/* Modified: Removed background styles from here — moved to inner pseudo-layer below */}
        <div className={styles.billboardBgImg} style={{ position: 'relative' }}>

            {/* Added: Greyscale background layer using absolute positioning + filter */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: "url('/images/articles/article1.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)',
                    zIndex: 0,
                }}
            />

            {/* Modified: Added position + zIndex so content renders above the greyscale layer */}
            <div className={`custom-container ${styles.billboardContent}`} style={{ position: 'relative', zIndex: 1 }}>
                <div className={`row ${styles.row} ${styles.justifyContentCenter}`}>
                    <div className={`${styles.colMd8} ${styles.colLg6}`}>
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
                            Sewaro Tattoo - Art That Lives With You
                        </h1>
                        <p style={{
                            textAlign: 'center',
                            marginBottom: '30px'
                        }}>
                            Tattoos are the stories we choose to wear on our skin forever.
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <Button
                                variant="btnOutline"
                                btnText="Read More"
                                marginTop="mt-10"
                                href="/#about"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
));

Hero.displayName = "Hero";