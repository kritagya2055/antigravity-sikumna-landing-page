"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0B0D12] flex flex-col pt-20">
      <Header />
      
      <section className="flex-1 flex flex-col items-center px-6 py-12 md:py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#111827]/80 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Header Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              You're All Set 🎉
            </h1>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">
              Your strategy session has been confirmed.
            </h2>
            <p className="text-lg text-[#B8BCC8] max-w-2xl mx-auto leading-relaxed">
              Thank you for booking your session.<br /><br />
              I've sent the meeting details to your email. Please check your inbox and add the event to your calendar.
            </p>
          </motion.div>

          {/* Video Placeholder Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[800px] mx-auto bg-[#111827] rounded-3xl p-6 md:p-10 border border-[#1F2937] shadow-xl mb-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Watch Before Our Call</h3>
            <p className="text-[#B8BCC8] mb-8 max-w-xl mx-auto">
              This short video will help you get the most value from our session together.
            </p>
            
            {/* Replace this with actual iframe once video is ready */}
            <div className="w-full aspect-video bg-[#0B0D12] border border-[#1F2937] rounded-xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0D12] to-[#1F2937] opacity-50 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
              <div className="text-[#B8BCC8] font-medium flex flex-col items-center gap-4 z-10">
                <svg className="w-12 h-12 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                [ Video Placeholder ]
              </div>
            </div>
          </motion.div>

          {/* Next Steps Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[800px] mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Next Steps</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Check your email",
                "Add the meeting to your calendar",
                "Prepare any questions you'd like to discuss",
                "Have your website and business information ready"
              ].map((step, index) => (
                <div key={index} className="bg-[#111827] border border-[#1F2937] p-5 rounded-2xl flex items-start gap-4">
                  <div className="mt-1 bg-[#D4AF37]/10 p-1 rounded-full">
                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#B8BCC8] font-medium">{step}</span>
                </div>
              ))}
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
