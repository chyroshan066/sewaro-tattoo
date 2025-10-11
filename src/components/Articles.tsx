// import { ARTICLES } from "@/constants";
// import { memo } from "react";

// export const Articles = memo(() => (
//     <section
//         id="articles"
//         className="articles-wrap"
//     >
//         <div className="container">
//             <div className="row">

//                 {/* <div className="col-md-4 article-post-item">
//                     <h4>Articles:</h4>
//                     <div className="article-img">
//                         <a href="#"><img src="images/resource/article1.jpg" alt="article-img" width="100%" height="auto" /></a>
//                     </div>
//                     <div className="lower-content">
//                         <h3><a href="#">What is the story behind tattooing</a></h3>
//                         <span>Feb 16, 2023</span>
//                     </div>
//                 </div>

//                 <div className="col-md-4 article-post-item">
//                     <h4>Articles:</h4>
//                     <div className="article-img">
//                         <a href="#"><img src="images/resource/article2.jpg" alt="article-img" width="100%" height="auto" /></a>
//                     </div>
//                     <div className="lower-content">
//                         <h3><a href="#">Top 10 tattoo myths & misconceptions</a></h3>
//                         <span>Feb 16, 2023</span>
//                     </div>
//                 </div>

//                 <div className="col-md-4 article-post-item">
//                     <h4>Articles:</h4>
//                     <div className="article-img">
//                         <a href="#"><img src="images/resource/article3.jpg" alt="article-img" width="100%" height="auto" /></a>
//                     </div>
//                     <div className="lower-content">
//                         <h3><a href="#">Unbelievable benefits of doing tattoo</a></h3>
//                         <span>Feb 16, 2023</span>
//                     </div>
//                 </div> */}

//                 {ARTICLES.map((article, index) => (
//                     <div
//                         key={index}
//                         className="col-md-4 article-post-item"
//                     >
//                         <h4>Articles:</h4>
//                         <div className="article-img">
//                             <a href={article.href}>
//                                 <img
//                                     src={article.imgSrc}
//                                     alt="article-img"
//                                     width="100%"
//                                     height="auto"
//                                 />
//                             </a>
//                         </div>
//                         <div className="lower-content">
//                             <h3>
//                                 <a href={article.href}>{article.title}</a>
//                             </h3>
//                             <span>{article.date}</span>
//                         </div>
//                     </div>
//                 ))}

//             </div>
//         </div >
//     </section >
// ));

// Articles.displayName = "Articles";