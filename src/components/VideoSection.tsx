"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section id="video-section" className="py-32 px-6 bg-background relative border-t border-[#27272A]/50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Before we talk, here's what you should know.
          </h2>
          <p className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl mx-auto">
            A quick overview of how I help business owners attract more customers and build predictable growth.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-[1000px] mx-auto rounded-2xl overflow-hidden shadow-2xl bg-[#111111] border border-[#27272A] aspect-video flex items-center justify-center group"
        >
          {/* Subtle glow effect around video */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111111] to-[#27272A] opacity-50 pointer-events-none group-hover:opacity-30 transition-opacity duration-700" />
          
          <iframe 
            src="https://player.vimeo.com/video/76979871?h=8272103f6e&title=0&byline=0&portrait=0" 
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Overview Video"
          />
        </motion.div>
      </div>
    </section>
  );
}
