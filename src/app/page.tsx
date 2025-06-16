"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Service";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <WhyChooseUs />
    </div>
  );
}
