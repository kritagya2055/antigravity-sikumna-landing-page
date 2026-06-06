"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is the consultation really free?",
    answer: "Yes, 100%. We provide this free session to demonstrate value first. If you like the roadmap, we can discuss working together. If not, you keep the strategy with no obligations."
  },
  {
    question: "Who is this for?",
    answer: "This is for Nepal-based business owners who already have a product or service but are struggling to get consistent leads, customers, or sales from their marketing efforts."
  },
  {
    question: "What will I get during the call?",
    answer: "You'll get clarity. We will identify the exact bottlenecks in your current marketing and outline a practical step-by-step roadmap to start attracting more customers."
  },
  {
    question: "How long is the session?",
    answer: "The strategy session typically takes 45 minutes. This gives us enough time to deeply understand your business and provide actionable insights."
  },
  {
    question: "Do I need a website?",
    answer: "Not necessarily. While a website helps, we can build lead generation systems using social media, landing pages, and email marketing based on where you are right now."
  },
  {
    question: "What happens after booking?",
    answer: "You will receive an email confirmation with a calendar invite and a link to our video call. We also ask you to fill out a short questionnaire so we can prepare before the call."
  },
  {
    question: "Will you create a growth plan for my business?",
    answer: "Yes. By the end of the session, you will have a clear, customized roadmap detailing the specific steps you need to take to increase your revenue."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-6 bg-[#0A0A0A] relative border-t border-[#27272A]/50">
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
              className="border border-[#27272A] rounded-2xl bg-[#111111] overflow-hidden"
            >
              <button 
                onClick={() => toggleOpen(index)}
                className="w-full text-left px-6 py-6 flex items-center justify-between hover:bg-[#1A1A1A] transition-colors"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
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
                  className={`text-[#A1A1AA] transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
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
                    <div className="px-6 pb-6 text-[#A1A1AA] leading-relaxed">
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
