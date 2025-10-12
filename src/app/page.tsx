import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Interview } from "@/components/Interview";
import { Preloader } from "@/components/Preloader";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

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
    </>
  );
}
