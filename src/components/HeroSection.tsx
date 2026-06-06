"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("flodesk-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden bg-[#0B0D12]">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Get a Free Business Growth Strategy Session
          </h1>
          
          <p className="text-xl md:text-2xl text-[#B8BCC8] mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover what's holding your business back and get a personalized growth plan to generate more leads, attract better customers, and increase revenue.
          </p>

          <button 
            onClick={scrollToForm}
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#0B0D12] bg-[#D4AF37] rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative">Book My Free Strategy Session</span>
          </button>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-[#B8BCC8] font-medium text-lg">
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span> Free 30-Minute Session
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span> Personalized Growth Recommendations
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">✓</span> No Obligation
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
