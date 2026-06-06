"use client";

import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section id="flodesk-section" className="py-24 px-6 bg-[#111827] relative border-t border-[#1F2937]/50">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Apply For Your Free Business Growth Strategy Session
          </h2>
          <p className="text-xl md:text-2xl text-[#B8BCC8] max-w-2xl mx-auto font-medium">
            Complete the short form below and tell me a little about your business. Once submitted, you'll be redirected to reserve a time for your strategy session.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-xl mx-auto"
        >
          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  );
}
