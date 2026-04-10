import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onNavigate, currentPage, onAdoptClick }: { onNavigate: (page: string) => void, currentPage: string, onAdoptClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === "home") {
      if (currentPage === "home") {
        onAdoptClick();
      } else {
        onNavigate("home");
      }
    } else {
      onNavigate(page);
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "donate", label: "Donate" },
    { id: "volunteer", label: "Volunteer" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <button 
          onClick={() => handleNavigate("home")}
          className="text-2xl font-black text-zinc-900 tracking-tight font-headline cursor-pointer"
        >
          Favored Felines
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`font-headline font-bold text-base transition-colors duration-200 rounded-lg px-3 py-1 ${currentPage === link.id ? "text-zinc-900 bg-zinc-100" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 cursor-pointer"}`}
            >
              {link.label}
            </button>
          ))}
        </div>
        
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { onAdoptClick(); setIsOpen(false); }}
            className="bg-primary-container text-on-primary-fixed font-headline font-bold px-6 py-2.5 rounded-full shadow-lg shadow-primary/10 cursor-pointer text-zinc-900"
          >
            Get Involved
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-900 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-zinc-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  className={`text-left font-headline font-bold text-lg px-4 py-3 rounded-xl transition-colors cursor-pointer ${currentPage === link.id ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 active:bg-zinc-50"}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 mt-2 border-t border-zinc-100 pb-2">
                <button
                  onClick={() => { onAdoptClick(); setIsOpen(false); }}
                  className="w-full bg-primary-container text-on-primary-fixed font-headline font-bold px-6 py-3.5 rounded-xl shadow-md flex justify-center items-center cursor-pointer text-zinc-900"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
