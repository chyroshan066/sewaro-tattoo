import { About } from "./_components/About/About";
import { Artist } from "./_components/Artist/Artist";
import { Contact } from "./_components/Contact/Contact";
import { Gallery } from "./_components/Gallery/Gallery";
import { Hero } from "./_components/Hero/Hero";
import { Interview } from "./_components/Interview/Interview";
import { Services } from "./_components/Services/Services";
import { Testimonials } from "./_components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Artist />
      <Testimonials />
      <Interview />
      <Contact />
    </>
  );
}
