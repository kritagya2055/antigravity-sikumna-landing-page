"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Fill up the form" },
  { num: "02", title: "Receive an email confirmation" },
  { num: "03", title: "Complete appointment details" },
  { num: "04", title: "Join the 1:1 consultation" },
  { num: "05", title: "Receive a customized business growth roadmap FOR FREE" }
];

export default function ProcessSection() {
  return (
    <section className="py-32 px-6 bg-[#111111] relative border-t border-[#27272A]/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            How The Strategy Session Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0A0A0A] border border-[#27272A] p-8 rounded-2xl relative group hover:border-[#D4AF37]/50 transition-colors duration-500 flex flex-col items-start"
            >
              <div className="text-4xl font-light text-[#27272A] group-hover:text-[#D4AF37]/30 transition-colors duration-500 mb-6">
                {step.num}
              </div>
              <h3 className="text-lg font-medium text-white group-hover:text-[#F4D03F] transition-colors duration-300">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
