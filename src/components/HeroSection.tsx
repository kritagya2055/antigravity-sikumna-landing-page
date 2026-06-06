"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToCalendly = () => {
    document.getElementById("calendly-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVideo = () => {
    document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden bg-background">
      {/* Background elegant gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#111111]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Stop guessing. <br />
          <span className="text-gradient">Start growing.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-[#A1A1AA] mb-8 max-w-2xl mx-auto font-medium"
        >
          Get a FREE 1:1 strategy session and discover the fastest path to more leads, customers, and sales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-[#A1A1AA]/80 mb-12 max-w-xl mx-auto"
        >
          I'll review your business, identify what's holding growth back, and give you a practical marketing roadmap you can start using immediately.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={scrollToCalendly}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-[#F4D03F] transition-all duration-300 transform hover:scale-[1.02]"
          >
            Book My Strategy Session
          </button>
          
          <button 
            onClick={scrollToVideo}
            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-[#27272A] rounded-full font-medium text-lg hover:bg-[#111111] transition-all duration-300"
          >
            Watch The Video
          </button>
        </motion.div>
      </div>
    </section>
  );
}
