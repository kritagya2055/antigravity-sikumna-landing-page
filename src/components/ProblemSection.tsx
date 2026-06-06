"use client";

import { motion } from "framer-motion";

const problems = [
  "You're getting traffic but not enough leads",
  "You're spending money on marketing without seeing consistent results",
  "Your website isn't converting visitors into customers",
  "You know marketing is important but aren't sure where to focus",
  "You're relying too heavily on referrals and word of mouth",
  "Growth feels inconsistent and unpredictable"
];

export default function ProblemSection() {
  return (
    <section id="problem-section" className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Does Any Of This Sound Familiar?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-colors duration-300 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-white">{problem}</p>
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
          If any of these challenges sound familiar, this strategy session was created for you.
        </motion.p>
      </div>
    </section>
  );
}
