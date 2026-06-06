"use client";

import { motion } from "framer-motion";

const targetAudiences = [
  {
    title: "Business Owners",
    description: "Looking to scale revenue without working 80-hour weeks."
  },
  {
    title: "Coaches",
    description: "Ready to build predictable pipelines for high-ticket clients."
  },
  {
    title: "Consultants",
    description: "Wanting to position themselves as premium industry authorities."
  },
  {
    title: "Service Businesses",
    description: "Struggling with inconsistent lead flow and low conversion rates."
  },
  {
    title: "Local Businesses",
    description: "Looking to dominate their local market and outrank competitors."
  }
];

export default function WhoIsThisForSection() {
  return (
    <section id="who-this-is-for" className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Who This Is For
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#B8BCC8] text-lg md:text-xl max-w-2xl mx-auto"
          >
            I strictly work with dedicated professionals who are ready to invest in growth and dominate their markets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-[#B8BCC8]">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
