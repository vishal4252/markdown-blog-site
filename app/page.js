import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="w-full mx-auto">
      <HeroSection />
      <PricingSection />
      <Testimonials />
    </div>
  );
};

export default page;
