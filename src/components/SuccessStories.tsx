import { motion } from "motion/react";
import React from "react";

const SuccessStories = () => (
  <section className="py-24 bg-surface-container-low overflow-hidden">
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-bold text-on-surface mb-4">Success Stories</h2>
        <div className="w-24 h-1.5 bg-primary-container mx-auto rounded-full" />
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 relative">
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-surface-container-lowest p-8 rounded-lg shadow-sm max-w-sm transform -rotate-1 hover:rotate-0 transition-transform"
        >
          <p className="text-on-surface italic mb-6">"Our home was missing a certain spark until we found Marmalade. The adoption process was so seamless and full of love."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center font-bold text-on-primary-fixed">SJ</div>
            <div>
              <p className="font-headline font-bold text-on-surface">Sarah Jenkins</p>
              <p className="text-sm text-on-surface-variant">Adopted Marmalade in 2023</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-surface-container-lowest p-8 rounded-lg shadow-sm max-w-sm mt-12 transform rotate-2 hover:rotate-0 transition-transform"
        >
          <p className="text-on-surface italic mb-6">"The Favored Felines team truly cares. We volunteered for a month and ended up adopting our third cozy kitten!"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center font-bold text-on-secondary-fixed">MB</div>
            <div>
              <p className="font-headline font-bold text-on-surface">Mark Benson</p>
              <p className="text-sm text-on-surface-variant">Volunteer & Adopter</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-surface-container-lowest p-8 rounded-lg shadow-sm max-w-sm transform -rotate-2 hover:rotate-0 transition-transform"
        >
          <p className="text-on-surface italic mb-6">"Every donation I make feels impactful. I love getting the updates on the sanctuary's new arrivals."</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center font-bold text-on-tertiary-fixed">LW</div>
            <div>
              <p className="font-headline font-bold text-on-surface">Linda Wu</p>
              <p className="text-sm text-on-surface-variant">Monthly Donor</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SuccessStories;
