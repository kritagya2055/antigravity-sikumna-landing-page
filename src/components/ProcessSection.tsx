"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Apply", desc: "Submit your details using the form below." },
  { num: "02", title: "Strategy Review", desc: "I'll personally review your current marketing funnel." },
  { num: "03", title: "Book Your Session", desc: "Choose a time that works for you." },
  { num: "04", title: "Get Your Growth Plan", desc: "Walk away with an actionable strategy." }
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Simple Process
          </h2>
          <p className="text-[#B8BCC8] text-lg max-w-2xl mx-auto">
            A straightforward path to getting extreme clarity on your marketing strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl relative group hover:border-[#D4AF37]/50 transition-colors duration-500 flex flex-col items-start"
            >
              <div className="text-4xl font-bold text-[#1F2937] group-hover:text-[#D4AF37]/30 transition-colors duration-500 mb-4">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F4D03F] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[#B8BCC8] text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
