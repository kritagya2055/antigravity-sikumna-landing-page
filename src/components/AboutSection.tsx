"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-32 h-32 mx-auto bg-[#111827] border-2 border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-8 overflow-hidden">
            {/* Replace with actual headshot image later */}
            <span className="text-4xl font-bold text-[#D4AF37]">KB</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Meet Kritagya Bhandari
          </h2>

          <div className="text-lg md:text-xl text-[#B8BCC8] space-y-6 leading-relaxed max-w-3xl mx-auto">
            <p>
              I help businesses attract more qualified leads, improve their online presence, and create marketing systems that support long-term growth.
            </p>
            <p>
              Instead of relying on guesswork, I focus on practical strategies that help business owners make smarter marketing decisions and generate measurable results.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
