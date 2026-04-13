import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";


interface AdoptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  catName: string;
}

export default function AdoptionModal({ isOpen, onClose, catName }: AdoptionModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Lock scroll and RESET state when modal opens/changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false); // Reset form state for new cat
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, catName]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      alert('Web3Forms access key is not configured. Please check your .env file.');
      setIsSubmitting(false);
      return;
    }

    formData.append('access_key', accessKey);
    formData.append('subject', `Adoption Application for ${catName}`);
    formData.append('cat_interested', catName);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        alert(data.message || 'Error submitting application.');
      }
    } catch (error) {
      alert('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          key="modal-container"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-surface rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl z-[101] my-auto"
          >
            {/* Header */}
            <div className="bg-secondary-container/20 p-6 sm:p-8 pb-4 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full hover:bg-zinc-200 transition-colors cursor-pointer text-on-surface-variant"
              >
                <X size={20} />
              </button>
              <h2 className="text-2xl sm:text-3xl font-black text-on-surface tracking-tight">
                Adopt <span className="text-secondary-fixed-variant">{catName}</span>
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2 font-medium">
                Complete this form to start your adoption journey.
              </p>
            </div>

            <div className="p-6 sm:p-8 pt-4">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-on-secondary-container" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">Application Sent!</h3>
                    <p className="text-on-surface-variant leading-relaxed mb-8">
                      We've received your interest in {catName}. Our team will review your application and reach out within 48 hours.
                    </p>
                    <button
                      onClick={onClose}
                      className="bg-secondary text-on-secondary px-10 py-3 rounded-full font-bold shadow-lg shadow-secondary/20 hover:scale-105 transition-all cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="adoption-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-on-surface-variant ml-4 uppercase tracking-wider">Your Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Ex. Jane Doe"
                          className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-on-surface-variant ml-4 uppercase tracking-wider">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="jane@example.com"
                          className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-on-surface-variant ml-4 uppercase tracking-wider">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-secondary transition-all outline-none font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-on-surface-variant ml-4 uppercase tracking-wider">Your Message</label>
                      <textarea
                        required
                        rows={3}
                        name="message"
                        placeholder={`Tell us why you want to adopt ${catName}...`}
                        className="w-full bg-surface-container-low border-none rounded-2xl px-5 py-3.5 focus:bg-white focus:ring-2 focus:ring-secondary transition-all outline-none resize-none font-medium"
                      />
                    </div>



                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary text-on-secondary font-bold text-lg py-4 rounded-2xl shadow-xl shadow-secondary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110 transition-all cursor-pointer"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Application'}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
