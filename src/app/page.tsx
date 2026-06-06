import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import CalendlySection from "@/components/CalendlySection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <CalendlySection />
      <FAQSection />
      <NewsletterSection />
      
      <footer className="bg-background py-8 text-center border-t border-[#27272A] text-[#A1A1AA] text-sm">
        <p>&copy; {new Date().getFullYear()} Sikumna. All rights reserved.</p>
      </footer>
    </main>
  );
}
