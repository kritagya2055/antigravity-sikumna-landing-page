"use client";

import { motion } from "framer-motion";

const solutions = [
  "We look at your business.",
  "We identify what's slowing growth.",
  "We build a practical roadmap.",
  "We focus on what actually moves revenue.",
];

export default function SolutionSection() {
  return (
    <section className="py-32 px-6 bg-[#0A0A0A] relative border-t border-[#27272A]/50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Not a sales pitch. <br />
            <span className="text-[#A1A1AA]">A strategic growth session.</span>
          </h2>
          <p className="text-lg text-[#A1A1AA] max-w-md">
            This is not a generic discovery call or a basic marketing audit. It's a deep dive into your current ecosystem to find the hidden leverage points for rapid growth.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full bg-[#111111] border border-[#27272A] rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]" />
          
          <ul className="space-y-8 relative z-10">
            {solutions.map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 w-6 h-6 rounded-full bg-[#27272A] flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </div>
                <span className="text-xl md:text-2xl font-medium text-white tracking-wide">
                  {text}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
