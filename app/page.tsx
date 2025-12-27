import UniversityCarosule from "@/src/commons/university-carosule";
import AboutUs from "@/src/components/about";
import Hero from "@/src/components/hero";
import Partners from "@/src/components/partnes";
import Services from "@/src/components/services";
import Testimonials from "@/src/components/testimonial";

export default function Home(){
  return(
    <>
      <Hero />
      <UniversityCarosule />
      <AboutUs />
      <Services />
      <Partners />
      <Testimonials />
    </>
  )
}