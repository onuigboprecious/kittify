import { motion, AnimatePresence } from "motion/react";
import { Users, Sparkles, Send } from "lucide-react";
import React, { useState } from "react";


const VolunteerPage = () => {
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
    formData.append('subject', 'New Volunteer Application');
    formData.append('from_name', 'Favored Felines Volunteers');

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
        alert(`Error: ${data.message || 'There was an error submitting your application. Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 min-h-screen"
    >
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-sm font-headline font-bold w-fit">
              <Users className="w-4 h-4 mr-2" /> Join Our Team
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-[1.1]">
              Lend a Hand, <br />Get a <span className="text-primary">Purr</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              From socialization to sanctuary maintenance, our volunteers are the heartbeat of Radiant Feline. Spend your time making a real difference.
            </p>
            <div className="space-y-4">
              {[
                "Cat Socialization & Playtime",
                "Sanctuary Maintenance & Gardening",
                "Event Support & Outreach",
                "Administrative Assistance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-container rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-on-primary-fixed" />
                  </div>
                  <span className="font-medium text-on-surface">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/rescued-stray-cat/1200/1000" 
              alt="A rescued stray cat in the sanctuary" 
              className="rounded-3xl shadow-2xl object-cover w-full h-[600px] border-[12px] border-white -rotate-2"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Volunteer Application</h2>
            <p className="text-on-surface-variant text-lg">Ready to start? Fill out the form below and we'll be in touch.</p>
          </div>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-tertiary-container p-12 rounded-lg text-center shadow-xl"
              >
                <Sparkles className="w-16 h-16 text-on-tertiary-container mx-auto mb-6" />
                <h3 className="font-headline text-3xl font-black text-on-tertiary-container mb-4">Application Received!</h3>
                <p className="text-on-tertiary-container text-lg leading-relaxed">
                  Thank you for your interest in volunteering. Our team will review your application and get back to you within 48 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-on-tertiary-container font-bold underline underline-offset-4"
                >
                  Send another application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-headline font-bold text-on-surface-variant ml-4">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-headline font-bold text-on-surface-variant ml-4">Email Address</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-headline font-bold text-on-surface-variant ml-4">Phone Number</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="availability" className="text-sm font-headline font-bold text-on-surface-variant ml-4">Availability</label>
                <select
                  id="availability"
                  name="availability"
                  className="w-full bg-surface-container-high border-none rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-primary appearance-none"
                >
                  <option value="weekdays-morning">Weekdays (Morning)</option>
                  <option value="weekdays-afternoon">Weekdays (Afternoon)</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-headline font-bold text-on-surface-variant ml-4">Why do you want to volunteer?</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  placeholder="Tell us why you want to volunteer with us"
                  className="w-full bg-surface-container-high border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-container text-on-primary-fixed font-headline font-black text-xl py-5 rounded-full shadow-xl shadow-primary/10 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'} <Send className="w-5 h-5" />
              </button>
            </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
};

export default VolunteerPage;





