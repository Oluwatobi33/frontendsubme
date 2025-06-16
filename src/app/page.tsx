"use client";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Service";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
