"use client";

import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-32 px-6 bg-[#111111] relative border-t border-[#27272A]/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Not ready to book yet?
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mx-auto">
            Leave your details and I'll send you useful insights and next steps.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0A0A0A] rounded-3xl p-8 border border-[#27272A] shadow-2xl mx-auto max-w-2xl relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center"
        >
          <div className="w-full relative z-10">
            <NewsletterForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
