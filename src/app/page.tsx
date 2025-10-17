import { About } from "@/components/About/About";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
// import { Articles } from "@/components/Articles";
import { Gallery } from "@/components/Gallery/Gallery";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Interview } from "@/components/Interview/Interview";
import { Preloader } from "@/components/Preloader/Preloader";
import { Services } from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <Interview />
      {/* <Articles /> */}
      <Contact />
      <Footer />
    </>
  );
}
