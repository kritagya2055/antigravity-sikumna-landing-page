"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";

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
              🎉 Your Application Has Been Received
            </h1>
            <div className="text-lg md:text-xl text-[#B8BCC8] max-w-2xl mx-auto leading-relaxed space-y-4">
              <p>Thank you for applying for a Free Business Growth Strategy Session.</p>
              <p>I've received your information successfully.</p>
              <p className="text-[#D4AF37] font-semibold mt-6">
                Please review the information below to prepare for our upcoming call.
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Watch This Before Our Call</h2>
            <div className="text-[#B8BCC8] mb-10 text-lg max-w-2xl mx-auto space-y-4">
              <p>I've prepared a short video to help you get the most value from our strategy session.</p>
              <p>Please take a few minutes to watch it before our meeting.</p>
            </div>
            
            <div className="w-full max-w-[800px] mx-auto aspect-video bg-[#0B0D12] border border-[#1F2937] rounded-xl flex items-center justify-center relative overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0D12] to-[#1F2937] opacity-50 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
              <div className="text-[#B8BCC8] font-medium flex flex-col items-center gap-4 z-10">
                <svg className="w-12 h-12 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                [ Embed Video ]
              </div>
            </div>
          </motion.div>

          <hr className="border-[#1F2937]" />

          {/* WHAT TO EXPECT & HOW TO PREPARE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* WHAT TO EXPECT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Here's What We'll Cover</h2>
              <div className="space-y-4 mb-6">
                {[
                  "Your current business situation",
                  "Your marketing challenges",
                  "Lead generation opportunities",
                  "Conversion improvements",
                  "Growth strategies specific to your business",
                  "Practical next steps you can take immediately"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#D4AF37] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#B8BCC8]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#B8BCC8]/80 italic">
                This session is designed to provide clarity, direction, and actionable recommendations.
              </p>
            </motion.div>

            {/* HOW TO PREPARE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get The Most Value From Our Call</h2>
              <p className="text-[#B8BCC8] mb-4">Before we meet, think about:</p>
              <div className="space-y-4 mb-6">
                {[
                  "Your biggest business challenge",
                  "Your revenue goals",
                  "Your current marketing efforts",
                  "Areas where you feel stuck",
                  "What success would look like over the next 6–12 months"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2.5 flex-shrink-0" />
                    <span className="text-[#B8BCC8]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#B8BCC8]/80 italic">
                The more prepared you are, the more valuable the session will be.
              </p>
            </motion.div>

          </div>

          <hr className="border-[#1F2937]" />

          {/* FINAL MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Looking Forward To Meeting You</h2>
            <div className="text-lg text-[#B8BCC8] max-w-2xl mx-auto space-y-4">
              <p>I personally review every application and prepare for each strategy session.</p>
              <p>Please attend from a quiet location with a stable internet connection so we can make the most of our time together.</p>
              <p className="font-semibold text-white mt-8">See you on the call.</p>
              <p className="text-[#D4AF37]">— Kritagya Bhandari</p>
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
