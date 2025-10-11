// import { TESTIMONIALS } from "@/constants";
// import { Icon } from "@iconify/react";
// import { memo } from "react";

// export const Testimonials = memo(() => {
//     return <section className="testimonials-wrap">
//         <div className="container testimonial-slider swiper mySwiper">
//             <div className="swiper-wrapper">

//                 {/* <div className="item-content swiper-slide">
//                     <div className="quotation-img">
//                         <img src="images/resource/quotation.png" alt="quotation-icon" />
//                     </div>
//                     <p className="item-paragraph">The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique. They will properly consult with you.</p>
//                     <div className="testimonial-author">
//                         <div className="author-name">Jack Geoffrey<span>tattoo artist</span></div>
//                     </div>
//                 </div>

//                 <div className="item-content swiper-slide">
//                     <div className="quotation-img">
//                         <img src="images/resource/quotation.png" alt="quotation-icon" />
//                     </div>
//                     <p className="item-paragraph">The entire team is extremely kind and friendly. They will properly consult with you. They're fantastic. They're great at what they do! And it's unique. They will properly consult with you.</p>
//                     <div className="testimonial-author">
//                         <div className="author-name">Jack Geoffrey<span>tattoo artist</span></div>
//                     </div>
//                 </div>

//                 <div className="item-content swiper-slide">
//                     <div className="quotation-img">
//                         <img src="images/resource/quotation.png" alt="quotation-icon" />
//                     </div>
//                     <p className="item-paragraph">They're great at what they do! And it's unique. They will properly consult with you. The entire team is extremely kind and friendly.They will properly consult with you.</p>
//                     <div className="testimonial-author">
//                         <div className="author-name">Jack Geoffrey<span>tattoo artist</span></div>
//                     </div>
//                 </div> */}

//                 {TESTIMONIALS.map((testimonial, index) => (
//                     <div
//                         key={index}
//                         className="item-content swiper-slide"
//                     >
//                         <div className="quotation-img">
//                             <img src="images/resource/quotation.png" alt="quotation-icon" />
//                         </div>
//                         <p className="item-paragraph">{testimonial.text}</p>
//                         <div className="testimonial-author">
//                             <div className="author-name">{testimonial.author}<span>{testimonial.tag}</span></div>
//                         </div>
//                     </div>
//                 ))}

//             </div>

//             <div className="testimonial-slider-btn">
//                 <div className="slide-button-prev"><a href=""><Icon icon="la:arrow-left" /></a></div>
//                 <div className="slide-button-next"><a href=""><Icon icon="la:arrow-right" /></a></div>
//             </div>

//         </div>

//     </section>
// });

// Testimonials.displayName = "Testimonials";