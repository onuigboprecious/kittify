import React from "react";
import { motion } from "motion/react";

const PrivacyPolicyPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto px-8 py-32"
  >
    <h1 className="text-4xl md:text-5xl font-black text-zinc-900 font-headline tracking-tight mb-8">
      Privacy Policy
    </h1>
    <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600">
      <p>Last updated: 2026</p>
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Information We Collect</h2>
        <p>We collect information that you provide directly to us when you use our website, adopt a feline, volunteer, or contact us. This may include your name, email address, phone number, and physical address.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use the information we collect to facilitate adoptions, process donations, communicate with you about our events and services, and improve our website and outreach.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Information Sharing</h2>
        <p>We do not sell your personal information. We may share your information with service providers who assist us in operating our website, processing payments, or coordinating adoptions, subject to strict confidentiality agreements.</p>
      </section>
    </div>
  </motion.div>
);

export default PrivacyPolicyPage;
