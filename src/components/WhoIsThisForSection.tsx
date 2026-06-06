"use client";

import { motion } from "framer-motion";

const items = [
  "Coaches and Consultants",
  "Service-Based Businesses",
  "Local Businesses",
  "Agencies",
  "Personal Brands",
  "Small and Growing Companies"
];

export default function WhoIsThisForSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Businesses I Typically Work With
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-colors duration-300 flex items-center justify-center text-center"
            >
              <p className="text-xl font-medium text-white">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl text-[#B8BCC8] max-w-3xl mx-auto"
        >
          Whether you're looking to generate more leads, improve conversions, or build a stronger marketing system, this session can help.
        </motion.p>
      </div>
    </section>
  );
}
