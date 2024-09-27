import Contact from "@/components/layout/Contact";
import Hero from "@/components/layout/Hero";
import Price from "@/components/layout/Price";
import Serves from "@/components/layout/Serves";
import WayUs from "@/components/layout/WhyUs";

 
export default function Home() {
  return (
    <div>
      <Hero />
      <Serves />
      <WayUs />
      <Price />
      <Contact />
    </div>
  );
}
