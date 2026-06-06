"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Working with Kritagya was a game changer for our business. The strategy session alone gave us more clarity than months of trying to figure it out ourselves.",
    name: "Sarah Johnson",
    role: "Founder, Marketing Agency"
  },
  {
    quote: "The personalized growth plan helped us double our lead generation within just 60 days. Highly recommend booking a session if you want real results.",
    name: "Michael Chen",
    role: "CEO, Tech Startup"
  },
  {
    quote: "Finally, someone who cuts through the noise and provides actionable steps. Kritagya's expertise in marketing systems is unmatched.",
    name: "Emily Rodriguez",
    role: "Business Coach"
  }
];

export default function TestimonialsSection() {
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
            What Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111827] border border-[#1F2937] rounded-3xl p-8 flex flex-col justify-between"
            >
              <div className="mb-8 relative">
                <span className="text-6xl text-[#D4AF37]/20 absolute -top-4 -left-2">"</span>
                <p className="text-lg text-[#B8BCC8] relative z-10 pt-4 leading-relaxed font-medium">
                  {testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#0B0D12] border border-[#1F2937] rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-[#B8BCC8] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
