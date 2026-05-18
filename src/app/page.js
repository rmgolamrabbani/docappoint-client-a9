import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div >
      <Hero/>
      <TopRatedDoctors/>
      <WhyChooseUs/>
      <Testimonials/>
      
    </div>
  );
}
