import { memo } from "react";
import styles from "./Articles.module.css";
import Link from "next/link";
import { BLOGS } from "@/constants/blogs";
import Image from "next/image";

export const Articles = memo(() => (
    <section
        id="articles"
        className={styles.articlesWrap}
    >
        <div className={`custom-container ${styles.container}`}>
            <div className="row">

                {BLOGS.map((blog, index) => (
                    <div
                        key={index}
                        className={`col-md-4 ${styles.articlePostItem}`}
                    >
                        <h4>Articles:</h4>
                        <div className={styles.articleImg}>
                            <Link href={blog.href}>
                                <Image
                                    src={blog.imgSrc}
                                    alt="article-img"
                                    width={400}
                                    height={300}
                                    style={{ width: '100%', height: 'auto' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                />
                            </Link>
                        </div>
                        <div className={styles.lowerContent}>
                            <h3>
                                <Link href={blog.href}>{blog.title}</Link>
                            </h3>
                            <span>{blog.date}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </section>
));

Articles.displayName = "Articles";