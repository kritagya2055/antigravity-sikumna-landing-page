"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 bg-[#111827] relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Most Businesses Don't Have A Lead Problem.<br/>
            <span className="text-[#D4AF37]">They Have A System Problem.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 space-y-8 text-xl md:text-2xl text-[#B8BCC8] leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            Many businesses struggle because they rely on referrals, inconsistent marketing, or outdated systems.
          </p>
          <p>
            Without a clear strategy, growth becomes unpredictable.
          </p>
          <div className="pt-6">
            <p className="text-white font-semibold mb-2">The good news?</p>
            <p className="text-[#D4AF37] font-bold">
              Most businesses don't need more effort.<br/>
              They need a better plan.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
