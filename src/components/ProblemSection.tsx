"use client";

import { motion } from "framer-motion";

const problems = [
  {
    action: "You post consistently.",
    result: "The inquiries don't come.",
  },
  {
    action: "You boost posts.",
    result: "The sales don't follow.",
  },
  {
    action: "You know marketing matters.",
    result: "You don't know what to focus on.",
  },
  {
    action: "You want growth.",
    result: "You need a system.",
  }
];

export default function ProblemSection() {
  return (
    <section className="py-32 px-6 bg-background relative border-t border-[#27272A]/50">
      <div className="max-w-4xl mx-auto flex flex-col gap-24">
        {problems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 text-center"
          >
            <h3 className="text-3xl md:text-5xl font-medium text-[#A1A1AA]">
              {item.action}
            </h3>
            <p className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              {item.result}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
