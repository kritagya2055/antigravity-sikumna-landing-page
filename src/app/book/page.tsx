"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function BookPage() {
  const router = useRouter();

  useEffect(() => {
    // Security check: Only allow access if the user has submitted the Flodesk form
    const hasSubmitted = sessionStorage.getItem('flodesk_submitted');
    if (!hasSubmitted) {
      router.push('/');
      return;
    }

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Listen for Calendly event
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        router.push("/thank-you");
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [router]);

  return (
    <main className="min-h-screen bg-[#0B0D12] flex flex-col pt-20">
      <Header />
      
      <section className="flex-1 flex flex-col items-center px-6 py-12 md:py-20 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#111827]/80 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Your Application Has Been Received
            </h1>
            <p className="text-xl text-[#B8BCC8] max-w-2xl mx-auto font-medium leading-relaxed">
              Choose a time below to schedule your Free Business Growth Strategy Session.
            </p>
          </motion.div>

          {/* Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[800px] mx-auto bg-[#111827] rounded-3xl p-6 md:p-10 border border-[#1F2937] shadow-xl"
          >
            <div 
              className="calendly-inline-widget w-full rounded-xl overflow-hidden bg-white" 
              data-url="https://calendly.com/your-calendly-url?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=d4af37" 
              style={{ minWidth: "320px", height: "700px" }} 
            />
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0B0D12] py-8 text-center border-t border-[#1F2937] text-[#B8BCC8] text-sm z-10 relative">
        <p>&copy; {new Date().getFullYear()} KRITAGYA. All rights reserved.</p>
      </footer>
    </main>
  );
}
