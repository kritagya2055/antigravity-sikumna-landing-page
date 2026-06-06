"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer: "Yes, 100%. We provide this free session to demonstrate value first. If you like the roadmap, we can discuss working together. If not, you keep the strategy with no obligations."
  },
  {
    question: "How long is the session?",
    answer: "The strategy session typically takes 60 minutes. This gives us enough time to deeply understand your business and provide actionable insights."
  },
  {
    question: "Who is this for?",
    answer: "This is strictly for business owners, coaches, and consultants who are serious about growth and ready to scale their revenue."
  },
  {
    question: "What will we cover?",
    answer: "We will perform a marketing audit, identify conversion bottlenecks, uncover lead generation opportunities, and outline an actionable growth roadmap."
  },
  {
    question: "Do I need to hire you afterward?",
    answer: "No. There is zero pressure to hire me. If you want my help implementing the plan, we can discuss it, but the session itself is pure value and no strings attached."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-[#1F2937] rounded-2xl bg-[#111827] overflow-hidden hover:border-[#D4AF37]/30 transition-colors"
            >
              <button 
                onClick={() => toggleOpen(index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between transition-colors"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={`text-[#B8BCC8] transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-[#B8BCC8] leading-relaxed">
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
