import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Placeholder for left side to balance center */}
        <div className="w-24 hidden md:block"></div>

        {/* Centered Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          <span className="text-white">SIK</span>
          <span className="text-[#D4AF37]">UMNA</span>
        </Link>

        {/* Social Icons Right */}
        <div className="flex items-center space-x-5 w-auto md:w-24 justify-end">
          <Link href="https://www.instagram.com/bhandari_kritagya?igsh=MTV3OHBicG5kOXBjbQ==" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </Link>
          <Link href="https://www.facebook.com/share/17RdTg4U4R/" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </Link>
          <Link href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#FFFFFF] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
