import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import React from "react";

const Hero = ({ onAdoptClick }: { onAdoptClick: () => void }) => (
  <main className="relative pt-24 min-h-screen flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 hero-glow -z-10 opacity-40" />
    <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Content Side */}
      <div className="flex flex-col gap-8 text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-headline font-bold w-fit"
        >
          <Sparkles className="w-4 h-4 mr-2" /> New Arrivals Ready for Homes
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-6xl md:text-7xl lg:text-8xl font-extrabold text-on-surface tracking-tighter leading-[1.05]"
        >
          Give a <span className="text-primary"> lovely Kitty </span> a Forever Home
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed"
        >
          Every cat deserves love – adopt, donate, save lives today. Join our sanctuary in creating sunlit stories for every rescued soul.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-4"
        >
          <button 
            onClick={onAdoptClick}
            className="bg-primary-container hover:bg-primary-fixed-dim text-on-primary-fixed font-headline font-extrabold text-lg px-10 py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary/10"
          >
            Adopt Today
          </button>
          <button className="bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-headline font-extrabold text-lg px-10 py-5 rounded-full transition-all duration-300 border-2 border-primary-container transform hover:scale-105">
            Donate Now
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4 mt-8"
        >
          <div className="flex -space-x-3">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuAPOrwtIfnfib8zfXQ5Pgn5ezWkpgHjaC9rTlcJ8QzsEYIDpwJqtB9a1P6YQO5jvq9ztL5HdWb0HtUzbfW5-RcWbii3MuSxGW_fZUOcq_gaWI6u6XynL0ron6QmFkvpy0Kyb-Xam9mSBqFOYiuFQqN-BqR43eBquBEs1RvQ2u9wPqBke9ZU51GGnpO6i0HX_oLLU2-gokeSiB-ZgH-rLmbNKz5HLe7LbJXvAxykzivfrW9Naa476QH3c1XCnn8YDB0zH3wtTzCGNQQ",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCijc0jmMlYNerbL1rwuxqFZ0cOrX_YNoh2NWxsFtwAtXIyHO-niCpGMRy1pMhVwOp6Fu50rornIX-8gj8j4nfdHVXSeTH3vW0hwEKR59NvkMcI6KHhKGfPDl2nGAngw9s9IJv5x2nKGTlCaUtCRUU3pHJQAoAKnWbgcTb05a7rsV8Jtlmwm-NVq8qiHG1BJTkBM-Iht865e_XEqSKclcsH50oL4eMQQicTcpKVBIaCsgiiRf38mRXqghcXMmoXUJcsLBnPLC-SEKk",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuACH7W5rQ2BA_CNMgnUxqWnC9-i_wFBiAzw6ZAKyXiDBJbplBqc6FWGs9ZwV0DsTXGdj7lSb8e2y2NAcGnbYrm88p-VDq-aa7i0GIb39EpoRaQpGTtmyHOKfJdXsIqdESWTJ5VxA1mdq9AG3pbMdf2ZY_-hVNbt5d0Rz4Os4fgSJ9PalZnHQIR4UMkLkGcQLk8prv9psrdJCc7fcwPATkxXmtyQndfgIT5gNzoq7ZNQoiC6R5sUU2c5TBMKJswjDEVslb6y0Wnioa0"
            ].map((src, i) => (
              <img
                key={i}
                className="w-12 h-12 rounded-full border-4 border-surface shadow-sm object-cover"
                src={src}
                alt="Happy family member"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
          <p className="text-on-surface-variant font-medium">Join <span className="text-primary font-bold">1,200+</span> happy families</p>
        </motion.div>
      </div>

      {/* Visual Side */}
      <div className="relative w-full h-full min-h-[600px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
        >
          <img
            className="rounded-lg shadow-2xl w-full max-w-md h-[550px] object-cover border-[12px] border-white"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqaFcI7lbP4auRMzc5bu7GEPOxm8XAmT4AQ6vTAjsI8a6_CGur5AZ1J66wKFLB0q1m0iRa4lOtNQWcmPsQjoLDAruGageMSEXgBbNBR84zLrkObn_p6IdgyiCDCkDpQ5ShFQaXiBNkhrXCk_V9FzvpJaMaUiGpds8wbvDIt7RVDfYeMLAfMUjzcxIhhRpMNqsP10o0QV_DkmVMAkts-9beUvRpO7OEpskwwqu4ECaYqG72Ap2kOuU4NltweCly_ymDaTWQ-d24XoA"
            alt="Main ginger cat portrait"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="absolute -top-10 -right-4 z-30 hidden md:block"
        >
          <img
            className="w-48 h-48 rounded-lg shadow-xl object-cover border-8 border-white -rotate-6 hover:rotate-0 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu1bMWj0b0YglHjyntLzgH0-mT59tjwVo2_KbKOR-PgXapk4Y8mG-wtnZGfCMLF8N9msolDVx_5CNq0ZxsX3WC7qgkI9uVzEjG5kIg5_pinQl8ztT15_gEv-bImNt_DAJQ9DefwUzqHSBhU_SFDiIarrhwiHkdachZJfAXIesVzATNnEWducpI4zbX4CpdquVJPPt3Rgp9YlG3FSOQ40LYTaT_5V0MidJ0c8QgezKVz0fN4rPUNhL8l0wISDq-iiFk8cBXN2bvT4I"
            alt="Kitten peeking"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute -bottom-12 -left-8 z-30 hidden md:block"
        >
          <img
            className="w-56 h-40 rounded-lg shadow-xl object-cover border-8 border-white rotate-12 hover:rotate-0 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvEoRZqTMwz1hJ_QKOLhXu76VZJkKqoZVFh5pDgTBqPTJez_CTvs20h1UEygvWaLDHRYkjfeK_xKG3OOAISmMdhFrKEyb17m6IEtfpBL9f0rr88IHlpB8Sfb7f4FCUoHalm8QvzMgu1Edi52yIZUhHgIXRkwLcOAnMNSMehp9wM8gRGWCi7MhBzLKmFojnp7mX05JCr7hwntvpEWMI6ZRuYFPRDA0Svsfn_ttVjMfK91XtdTN4SHXsOL88Y5dHzx8MmzRLcsbVTa0"
            alt="Sleeping ginger cat"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="absolute -z-10 bg-primary-container/20 w-[120%] h-[120%] rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>
    </div>
  </main>
);

export default Hero;
