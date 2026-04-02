import { motion } from "motion/react";
import React from "react";

const Navbar = ({ onNavigate, currentPage, onAdoptClick }: { onNavigate: (page: string) => void, currentPage: string, onAdoptClick: () => void }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <button 
        onClick={() => onNavigate("home")}
        className="text-2xl font-black text-zinc-900 tracking-tight font-headline cursor-pointer"
      >
        Kittify
      </button>
      <div className="hidden md:flex items-center gap-8">
        <button 
          onClick={() => {
            if (currentPage === "home") {
              onAdoptClick();
            } else {
              onNavigate("home");
            }
          }}
          className={`font-headline font-bold text-base transition-colors duration-200 rounded-lg px-3 py-1 ${currentPage === "home" ? "text-zinc-900 bg-zinc-100" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
        >
          Home
        </button>
     
        <button 
          onClick={() => onNavigate("donate")}
          className={`font-headline font-bold text-base transition-colors duration-200 rounded-lg px-3 py-1 ${currentPage === "donate" ? "text-zinc-900 bg-zinc-100" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
        >
          Donate
        </button>

        
        <button 
          onClick={() => onNavigate("volunteer")}
          className={`font-headline font-bold text-base transition-colors duration-200 rounded-lg px-3 py-1 ${currentPage === "volunteer" ? "text-zinc-900 bg-zinc-100" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
        >
          Volunteer
        </button>

           <button 
          onClick={() => onNavigate("about")}
          className={`font-headline font-bold text-base transition-colors duration-200 rounded-lg px-3 py-1 ${currentPage === "about" ? "text-zinc-900 bg-zinc-100" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"}`}
        >
          About Us
        </button>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onAdoptClick}
        className="bg-primary-container text-on-primary-fixed font-headline font-bold px-6 py-2.5 rounded-full shadow-lg shadow-primary/10"
      >
        Get Involved
      </motion.button>
    </div>
  </nav>
);

export default Navbar;
