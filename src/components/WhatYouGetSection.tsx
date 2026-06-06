"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Marketing Audit",
    desc: "Review what's working and what's not."
  },
  {
    title: "Growth Opportunities",
    desc: "Identify hidden opportunities for more leads."
  },
  {
    title: "Action Plan",
    desc: "Walk away with clear next steps."
  },
  {
    title: "Expert Feedback",
    desc: "Get insights tailored specifically to your business."
  }
];

export default function WhatYouGetSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What You'll Get During Your Strategy Session
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] rounded-3xl p-8 hover:border-[#D4AF37]/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] font-bold">
                  ✓
                </span>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-[#B8BCC8] text-lg pl-12">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
