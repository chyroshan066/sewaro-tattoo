// import { SERVICES } from "@/constants/services";
// import { memo } from "react";

// export const Services = memo(() => {
//     return <section className="services-wrap">
//         <div className="container">
//             <div className="row">

//                 {/* <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
//                     <span className="chart" data-percent="90">
//                         <span className="percent"></span>
//                         <p>Full Body Tattoo</p>
//                     </span>
//                 </div>

//                 <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
//                     <span className="chart" data-percent="80">
//                         <span className="percent" />
//                         <p>Safely Piercing</p>
//                     </span>
//                 </div>

//                 <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
//                     <span className="chart" data-percent="75">
//                         <span className="percent"></span>
//                         <p>Full colour tattoo</p>
//                     </span>
//                 </div>

//                 <div className="col-xl-3 col-lg-6 col-md-6 mb-5">
//                     <span className="chart" data-percent="95">
//                         <span className="percent"></span>
//                         <p>Temporary tattoo</p>
//                     </span>
//                 </div> */}

//                 {SERVICES.map((service, index) => (
//                     <div
//                         key={index}
//                         className="col-xl-3 col-lg-6 col-md-6 mb-5"
//                     >
//                         <span
//                             className="chart"
//                             data-percent={service.percent}
//                         >
//                             <span className="percent" />
//                             <p>{service.name}</p>
//                         </span>
//                     </div>
//                 ))}

//             </div>
//         </div>
//     </section>
// });

// Services.displayName = "Services";