import React from "react";
import { motion } from "motion/react";

const ContactUsPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto px-8 py-32"
  >
    <h1 className="text-4xl md:text-5xl font-black text-zinc-900 font-headline tracking-tight mb-8">
      Contact Us
    </h1>
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <p className="text-zinc-600 mb-8 text-lg">
          Have a question about adoption or want to know more about how you can help? Reach out to us!
        </p>
        <div className="space-y-6 text-zinc-600">
          <div>
            <h3 className="font-bold text-zinc-900">Email</h3>
            <p>hello@favoredfelines.org</p>
          </div>
          <div>
            <h3 className="font-bold text-zinc-900">Phone</h3>
            <p>1-800-FELINES</p>
          </div>
          <div>
            <h3 className="font-bold text-zinc-900">Location</h3>
            <p>123 Purrfect Ave<br/>Meowtown, CA 90210</p>
          </div>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
          <input type="text" className="w-full px-4 py-2 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
          <input type="email" className="w-full px-4 py-2 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"></textarea>
        </div>
        <button type="button" className="w-full bg-primary-container text-on-primary-fixed font-bold py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          Send Message
        </button>
      </form>
    </div>
  </motion.div>
);

export default ContactUsPage;
