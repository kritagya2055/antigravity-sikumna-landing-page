"use client";

import { motion } from "framer-motion";

const deliverables = [
  "Review your current marketing",
  "Find what's slowing your growth",
  "Identify opportunities to get more leads",
  "Review your website and customer journey",
  "Create a simple action plan",
  "Answer your questions"
];

export default function WhatYouGetSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What We'll Cover During The Call
            </h2>
            <p className="text-[#B8BCC8] text-lg mb-8">
              This isn't a sales pitch disguised as a consultation. It's a highly valuable strategy session designed to give you extreme clarity on your next steps.
            </p>
            <button 
              onClick={() => document.getElementById("flodesk-section")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-[#D4AF37] text-black rounded-full font-medium hover:bg-[#F4D03F] transition-all duration-300"
            >
              Claim Your Free Session
            </button>
          </motion.div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
