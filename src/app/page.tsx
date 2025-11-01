import { About } from "@/components/About/About";
import { Artist } from "@/components/Artist/Artist";
import { Blogs } from "@/components/Blogs/Blogs";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
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
      <Artist />
      <Testimonials />
      <Interview />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}
