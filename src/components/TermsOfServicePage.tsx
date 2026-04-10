import React from "react";
import { motion } from "motion/react";

const TermsOfServicePage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="max-w-4xl mx-auto px-8 py-32"
  >
    <h1 className="text-4xl md:text-5xl font-black text-zinc-900 font-headline tracking-tight mb-8">
      Terms of Service
    </h1>
    <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600">
      <p>Last updated: 2026</p>
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using the Favored Felines website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">2. Adoption Process</h2>
        <p>All adoptions are subject to an application process, reference checks, and approval by our team. We reserve the right to deny any application in the interest of the feline's welfare.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">3. Donations</h2>
        <p>All donations are considered final and non-refundable, as they go directly towards the care and keeping of our animals.</p>
      </section>
    </div>
  </motion.div>
);

export default TermsOfServicePage;
