"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("flodesk-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVideo = () => {
    document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-background">
      {/* Background elegant gradient glow - Using new palette */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#111827]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] font-medium text-sm tracking-wide mb-8"
        >
          FREE 60-MINUTE STRATEGY SESSION
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
        >
          Get More Leads With A <br className="hidden md:block" />
          <span className="text-gradient">Clear Marketing Plan</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[#B8BCC8] mb-12 max-w-3xl mx-auto font-medium"
        >
          Book a free 60-minute strategy session and discover practical ways to grow your business through Meta Ads, websites, landing pages, and email marketing.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToForm}
            className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-[#F4D03F] transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book My Free Session
          </button>
          
          <p className="text-sm text-[#B8BCC8]/80 mt-4">
            No pressure. No obligation. Just practical advice for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
