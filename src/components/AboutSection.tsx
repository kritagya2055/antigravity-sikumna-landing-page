"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about-section" className="py-24 px-6 bg-[#111827] relative border-t border-[#1F2937]/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Meet Kritagya
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-[#B8BCC8] leading-relaxed max-w-3xl mx-auto font-medium">
            <p>
              I help businesses grow through Meta Ads, high-converting websites, landing pages, and email marketing.
            </p>
            <p>
              My approach is simple: find what's holding your business back, focus on what matters most, and create a clear plan for growth.
            </p>
            <p className="text-[#D4AF37]">
              No guesswork. No unnecessary complexity. Just practical strategies that help you attract more customers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
