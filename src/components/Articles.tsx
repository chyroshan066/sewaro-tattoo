import { ARTICLES } from "@/constants";
import { memo } from "react";

export const Articles = memo(() => (
    <section
        id="articles"
        className="articles-wrap"
    >
        <div className="container">
            <div className="row">

                {ARTICLES.map((article, index) => (
                    <div
                        key={index}
                        className="col-md-4 article-post-item"
                    >
                        <h4>Articles:</h4>
                        <div className="article-img">
                            <a href={article.href}>
                                <img
                                    src={article.imgSrc}
                                    alt="article-img"
                                    width="100%"
                                    height="auto"
                                />
                            </a>
                        </div>
                        <div className="lower-content">
                            <h3>
                                <a href={article.href}>{article.title}</a>
                            </h3>
                            <span>{article.date}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div >
    </section >
));

Articles.displayName = "Articles";