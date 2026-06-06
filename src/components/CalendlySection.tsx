"use client";

import { motion } from "framer-motion";

export default function CalendlySection() {
  return (
    <section id="calendly-section" className="py-32 px-6 bg-background relative border-t border-[#27272A]/50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Book Your Strategy Session
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto">
            Choose a time that works for you.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[1000px] mx-auto bg-[#111111] rounded-3xl p-4 border border-[#27272A] shadow-2xl relative overflow-hidden h-[700px]"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Calendly Inline Widget */}
          <iframe 
            src="https://calendly.com/placeholder-url?hide_gdpr_banner=1&background_color=111111&text_color=ffffff&primary_color=d4af37" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            className="rounded-2xl relative z-10"
            title="Calendly Scheduling"
          />
        </motion.div>
      </div>
    </section>
  );
}
