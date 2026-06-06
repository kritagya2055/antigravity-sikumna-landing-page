import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import WhoIsThisForSection from "@/components/WhoIsThisForSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import ProcessSection from "@/components/ProcessSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Header />
      <HeroSection />
      <VideoSection />
      <WhoIsThisForSection />
      <WhatYouGetSection />
      <ProcessSection />
      <NewsletterSection />
      <FAQSection />
      
      <footer className="bg-background py-8 text-center border-t border-[#1F2937] text-[#B8BCC8] text-sm">
        <p>&copy; {new Date().getFullYear()} KRITAGYA. All rights reserved.</p>
      </footer>
    </main>
  );
}
