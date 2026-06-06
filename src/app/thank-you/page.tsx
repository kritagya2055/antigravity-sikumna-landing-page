"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";

const prepItems = [
  "Be in a quiet place",
  "Have your business goals ready",
  "Be prepared to discuss your current marketing efforts",
  "Bring any questions you'd like answered"
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0B0D12] flex flex-col pt-20">
      <Header />
      
      <section className="flex-1 px-6 py-12 md:py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#111827]/80 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto w-full space-y-16">
          
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              🎉 You're Officially Booked!
            </h1>
            <div className="text-lg md:text-xl text-[#B8BCC8] max-w-2xl mx-auto leading-relaxed space-y-4">
              <p>Your strategy session has been successfully scheduled.</p>
              <p className="text-[#D4AF37] font-semibold mt-6">
                Before our meeting, please watch the short video below so you can get the most value from our time together.
              </p>
            </div>
          </motion.div>

          <hr className="border-[#1F2937]" />

          {/* VIDEO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-full max-w-[800px] aspect-video mx-auto bg-[#111827] rounded-3xl border border-[#1F2937] shadow-xl flex flex-col items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors duration-300" />
              <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(212,175,55,0.4)] transform group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#0B0D12] ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
              </div>
              <p className="text-[#B8BCC8] font-medium relative z-10">Video coming soon</p>
            </div>
          </motion.div>

          <hr className="border-[#1F2937]" />

          {/* PREPARATION SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">How To Prepare For Our Call</h2>
            <ul className="space-y-4">
              {prepItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-lg text-[#B8BCC8] bg-[#111827] p-4 rounded-xl border border-[#1F2937]">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mt-1">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <hr className="border-[#1F2937]" />

          {/* FINAL MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-[#111827] border border-[#1F2937] p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
              <p className="text-xl text-white font-medium leading-relaxed mb-8">
                I look forward to speaking with you and helping you identify the biggest opportunities for growth in your business.
              </p>
              <div className="space-y-2">
                <p className="text-[#B8BCC8]">See you soon.</p>
                <p className="text-[#D4AF37] font-bold text-lg">— Kritagya Bhandari</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <footer className="bg-[#0B0D12] py-8 text-center border-t border-[#1F2937] text-[#B8BCC8] text-sm z-10 relative">
        <p>&copy; {new Date().getFullYear()} KRITAGYA. All rights reserved.</p>
      </footer>
    </main>
  );
}
