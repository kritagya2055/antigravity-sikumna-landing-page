"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Website Design",
    desc: "High-converting websites built to generate leads."
  },
  {
    title: "Email Marketing",
    desc: "Automated systems that nurture and convert prospects."
  },
  {
    title: "SEO",
    desc: "Increase visibility and attract qualified traffic."
  },
  {
    title: "Lead Magnets",
    desc: "Turn visitors into leads consistently."
  },
  {
    title: "Meta Advertising",
    desc: "Generate targeted leads and scalable growth."
  },
  {
    title: "Marketing Strategy",
    desc: "Create a clear roadmap for business growth."
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-[#0B0D12] relative border-t border-[#1F2937]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            How I Help Businesses Grow
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] rounded-2xl p-8 hover:border-[#D4AF37]/50 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-lg text-[#B8BCC8]">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
