"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import TemplateSlider from "@/components/slider/TemplateSlider";
import PricingSection from "@/components/home/PricingSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <HeroSection />

      

      {/* Main Content */}
      <section className="relative z-10 pb-24">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto px-6"
        >
        {/* Slider */}
        <TemplateSlider />

        </motion.div>

        {/* How It Works */}
        <HowItWorksSection />

        {/* Pricing */}
        <PricingSection />

      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}