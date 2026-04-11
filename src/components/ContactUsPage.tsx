import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";

const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const accessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      alert('Web3Forms access key is not configured. Please check your .env file.');
      setIsSubmitting(false);
      return;
    }

    formData.append('access_key', accessKey);
    formData.append('subject', 'New Contact Message');
    formData.append('from_name', 'Favored Felines Contact');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        console.error('Web3Forms error:', data);
        alert(`Error: ${data.message || 'There was an error submitting your message. Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto px-8 py-32"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 font-headline tracking-tight mb-4">
          Contact Us
        </h1>
        <p className="text-zinc-600 text-lg max-w-xl mx-auto">
          Have a question about adoption or want to know more about how you can help? Reach out to us!
        </p>
      </div>
      
      <div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl ambient-shadow border border-on-surface/5">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h3 className="font-headline text-3xl font-black text-zinc-900 mb-4">Message Sent!</h3>
              <p className="text-zinc-600 text-lg leading-relaxed max-w-md mx-auto">
                Thank you for reaching out. We have successfully received your message and will get back to you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-primary font-bold hover:underline underline-offset-4 cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6 text-left"
            >
              <div>
                <label className="block text-sm font-bold font-headline text-zinc-700 mb-2 ml-4">Full Name</label>
                <input 
                  required
                  type="text" 
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 rounded-full bg-surface border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold font-headline text-zinc-700 mb-2 ml-4">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-full bg-surface border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold font-headline text-zinc-700 mb-2 ml-4">Message</label>
                <textarea 
                  required
                  name="message"
                  rows={5} 
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 rounded-2xl bg-surface border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none transition-all"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary-container hover:bg-primary-fixed-dim text-on-primary-fixed font-headline font-black text-lg py-4 rounded-full shadow-lg shadow-primary/10 transition-all flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ContactUsPage;
