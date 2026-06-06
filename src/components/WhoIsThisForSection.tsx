"use client";

import { motion } from "framer-motion";

const items = [
  "Coaches & Consultants",
  "Local Businesses",
  "Service-Based Businesses",
  "Personal Brands",
  "Agencies",
  "Growing Companies"
];

export default function WhoIsThisForSection() {
  return (
    <section className="py-24 px-6 bg-[#111827] relative border-t border-[#1F2937]/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            This Session Is Perfect For
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-[#0B0D12] border border-[#1F2937] rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-colors duration-300"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">
                ✓
              </span>
              <p className="text-xl font-medium text-white">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
