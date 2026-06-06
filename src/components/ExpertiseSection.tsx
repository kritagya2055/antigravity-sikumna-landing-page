"use client";

import { motion } from "framer-motion";

const areas = [
  "Website Design & Optimization",
  "Email Marketing Systems",
  "Search Engine Optimization (SEO)",
  "Lead Magnet Development",
  "Meta Advertising Campaigns",
  "Marketing Funnel Strategy"
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 px-6 bg-[#111827] relative border-t border-[#1F2937]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Areas Of Expertise
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0B0D12] border border-[#1F2937] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-colors duration-300 flex items-center"
            >
              <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-white">{area}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xl text-[#D4AF37] font-semibold max-w-3xl mx-auto"
        >
          My goal is simple: help businesses build predictable systems that generate leads and sales consistently.
        </motion.p>
      </div>
    </section>
  );
}
