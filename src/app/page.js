import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Home",

  description:
    "DocAppoint is a modern doctor appointment management platform where users can find top-rated doctors and book appointments online.",

  keywords: [
    "Doctor Appointment",
    "Healthcare",
    "Medical Services",
    "Doctors",
    "Hospital",
    "DocAppoint",
  ],

  openGraph: {
    title: "DocAppoint - Doctor Appointment Platform",

    description:
      "Book appointments with trusted doctors easily using DocAppoint.",

    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <TopRatedDoctors />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}