import React from "react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.34 2.88 2.88 0 0 1 2.31-4.53 2.66 2.66 0 0 1 1.61.53V9.46a6.33 6.33 0 0 0-1.61-.22 6.32 6.32 0 1 0 6.32 6.32v-6.61a8.31 8.31 0 0 0 3.79 1.49z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer = ({ onNavigate }: FooterProps) => (
  <footer className="w-full py-12 px-8 bg-zinc-50">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-zinc-800 font-headline">Favored Felines</div>
        <p className="text-sm text-zinc-500">© 2026 Favored Felines. All rights reserved.</p>
      </div>
      <div className="flex gap-8">
        <button className="text-sm text-zinc-500 hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate?.("privacy")}>Privacy Policy</button>
        <button className="text-sm text-zinc-500 hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate?.("terms")}>Terms of Service</button>
        <button className="text-sm text-zinc-500 hover:text-primary transition-colors cursor-pointer" onClick={() => onNavigate?.("contact")}>Contact Us</button>
      </div>
      <div className="flex gap-4 items-center">
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-[#1877F2] transition-colors cursor-pointer hover:scale-110 transform duration-200 block p-1"
          aria-label="Facebook"
        >
          <FacebookIcon className="w-6 h-6" />
        </a>
        <a 
          href="https://tiktok.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-zinc-900 transition-colors cursor-pointer hover:scale-110 transform duration-200 block p-1"
          aria-label="TikTok"
        >
          <TikTokIcon className="w-6 h-6" />
        </a>
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-[#FF0000] transition-colors cursor-pointer hover:scale-110 transform duration-200 block p-1"
          aria-label="YouTube"
        >
          <YoutubeIcon className="w-6 h-6" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
