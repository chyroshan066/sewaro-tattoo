import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Preloader } from "@/components/Preloader";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
    </>
  );
}
