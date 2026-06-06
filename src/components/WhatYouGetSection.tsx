"use client";

import { motion } from "framer-motion";

const deliverables = [
  {
    title: "60-Minute 1-to-1 Strategy Session",
    description: "A private consultation to dissect your current marketing funnel and identify exactly where you are losing money."
  },
  {
    title: "Marketing Audit",
    description: "An objective, expert review of your existing campaigns, brand positioning, and overall digital footprint."
  },
  {
    title: "Conversion Analysis",
    description: "Identifying the friction points in your sales process that are preventing visitors from turning into paying customers."
  },
  {
    title: "Lead Generation Opportunities",
    description: "Discovering untapped channels and strategies tailored to your specific industry and target audience."
  },
  {
    title: "Actionable Growth Roadmap",
    description: "A clear, step-by-step plan you can implement immediately to start seeing measurable improvements in revenue."
  },
  {
    title: "Personalized Recommendations",
    description: "Custom advice on the exact tools, scripts, and frameworks you need to scale efficiently."
  }
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
              What You'll Get
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
                className="bg-[#111827] p-6 rounded-2xl border border-[#1F2937]"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-[#B8BCC8] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
