import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0D12] selection:bg-[#D4AF37]/30 selection:text-white">
      <Header />
      <HeroSection />
      <ProblemSection />
      <WhatYouGetSection />
      <WhoIsThisForSection />
      <ExpertiseSection />
      <AboutSection />
      <NewsletterSection />
      
      <footer className="bg-[#0B0D12] py-8 text-center border-t border-[#1F2937] text-[#B8BCC8] text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} KRITAGYA. All rights reserved.</p>
      </footer>
    </main>
  );
}
