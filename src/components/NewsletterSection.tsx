"use client";

import { motion } from "framer-motion";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section id="flodesk-section" className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* SECTION 9: FINAL CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready To Discover Your Biggest Growth Opportunities?
          </h2>
          <p className="text-xl md:text-2xl text-[#B8BCC8] max-w-2xl mx-auto font-medium leading-relaxed">
            Complete the short application below and reserve your free Business Growth Strategy Session.
          </p>
        </motion.div>

        {/* SECTION 10: FLODESK FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-xl mx-auto bg-[#111827] border border-[#1F2937] rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Apply For Your Free Business Growth Strategy Session
          </h3>
          <p className="text-lg text-[#B8BCC8] mb-8">
            Tell me a little about your business and goals.
          </p>
          
          <div className="text-sm text-[#D4AF37] font-semibold mb-6 bg-[#D4AF37]/10 py-3 px-4 rounded-xl border border-[#D4AF37]/20">
            Note: After submitting your application, you'll be taken to the scheduling page where you can reserve your strategy session.
          </div>

          <NewsletterForm />
        </motion.div>
      </div>
    </section>
  );
}
