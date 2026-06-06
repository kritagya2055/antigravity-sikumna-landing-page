"use client";

import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section id="flodesk-section" className="py-32 px-6 bg-[#F5EFE6] relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B0D12] mb-6 tracking-tight">
            Book Your Free 60-Minute Strategy Session
          </h2>
          <p className="text-lg md:text-xl text-[#111827] max-w-2xl mx-auto font-medium">
            Fill out the form below and I'll personally review your business before our call.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl mx-auto max-w-2xl relative overflow-hidden min-h-[300px] flex flex-col items-center justify-center border border-[#E5E7EB]"
        >
          <div className="w-full relative z-10">
            <NewsletterForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
