"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the session really free?",
    answer: "Yes, this strategy session is 100% free with no obligations. The goal is to provide you with a clear roadmap for growth. If you'd like my help implementing the plan afterwards, we can discuss that, but there is absolutely no pressure."
  },
  {
    question: "How long is the session?",
    answer: "The session is scheduled for 30 minutes. This gives us enough time to analyze your current situation, identify bottlenecks, and outline a clear action plan."
  },
  {
    question: "Will I receive actionable advice?",
    answer: "Absolutely. You'll walk away with a personalized growth plan and clear, practical steps you can start implementing immediately to generate more leads and sales."
  },
  {
    question: "Do I need an established business?",
    answer: "While having an established business helps, this session is valuable for anyone looking to build a predictable marketing system, whether you're just starting to scale or already established."
  },
  {
    question: "What happens after the call?",
    answer: "After the call, you'll have a clear action plan. You can choose to implement the strategies yourself, or if you feel we're a good fit, we can discuss how we might work together to accelerate your results."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-[#111827] relative border-t border-[#1F2937]/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0B0D12] border border-[#1F2937] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                <span className={`text-[#D4AF37] transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : ""}`}>
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 pt-2 text-[#B8BCC8] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
