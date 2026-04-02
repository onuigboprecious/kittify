import { PawPrint, Heart, Share2 } from "lucide-react";
import React from "react";

const Footer = () => (
  <footer className="w-full py-12 px-8 bg-zinc-50">
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-zinc-800 font-headline">Kittify</div>
        <p className="text-sm text-zinc-500">© 2026 Kittify. All rights reserved.</p>
      </div>
      <div className="flex gap-8">
        {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
          <a key={link} className="text-sm text-zinc-500 hover:text-primary transition-colors" href="#">{link}</a>
        ))}
      </div>
      <div className="flex gap-4">
        <PawPrint className="w-6 h-6 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
        <Heart className="w-6 h-6 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
        <Share2 className="w-6 h-6 text-zinc-400 hover:text-primary cursor-pointer transition-colors" />
      </div>
    </div>
  </footer>
);

export default Footer;
