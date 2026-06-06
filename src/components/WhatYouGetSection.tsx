"use client";

import { motion } from "framer-motion";

const items = [
  "A review of your current marketing efforts",
  "Identification of growth opportunities",
  "Clear recommendations based on your business goals",
  "Actionable next steps you can implement immediately",
  "A personalized roadmap for generating more leads and customers"
];

export default function WhatYouGetSection() {
  return (
    <section className="py-24 px-6 bg-[#111827] relative border-t border-[#1F2937]/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            During Your Free Strategy Session
          </h2>
        </motion.div>

        <div className="bg-[#0B0D12] border border-[#1F2937] rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937] flex items-center gap-4"
              >
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white">{item}</h3>
              </motion.li>
            ))}
          </ul>
          
        </div>
      </div>
    </section>
  );
}
