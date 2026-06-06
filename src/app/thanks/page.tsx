"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-20">
      <Header />
      
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#111111]/80 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Wait... watch this <span className="text-gradient">before you go.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#A1A1AA] mb-12 max-w-2xl mx-auto font-medium">
              Before our conversation, take a few minutes to watch this short video.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[800px] mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#111111] border border-[#27272A] aspect-video flex items-center justify-center group mb-12"
          >
            {/* Subtle glow effect around video */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] to-[#27272A] opacity-50 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
            
            <iframe 
              src="https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0" 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="Welcome Video"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="https://web.whatsapp.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Chat With Me On WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>

      <footer className="bg-background py-8 text-center border-t border-[#27272A] text-[#A1A1AA] text-sm z-10">
        <p>&copy; {new Date().getFullYear()} Sikumna. All rights reserved.</p>
      </footer>
    </main>
  );
}
