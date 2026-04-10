/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence, motion } from "motion/react";
import React, { useState, useRef } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SuccessStories from "./components/SuccessStories";
import AdoptionForm from "./components/AdoptionForm";
import AboutPage from "./components/AboutPage";
import DonatePage from "./components/DonatePage";
import VolunteerPage from "./components/VolunteerPage";
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import ContactUsPage from "./components/ContactUsPage";

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || "sb";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (currentPage !== "home") {
      setCurrentPage("home");
      // Small delay to allow page transition before scrolling
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar 
        onNavigate={navigate} 
        currentPage={currentPage} 
        onAdoptClick={scrollToForm} 
      />
      
      <AnimatePresence mode="wait">
        {currentPage === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero onAdoptClick={scrollToForm} />
            <SuccessStories />
            <AdoptionForm formRef={formRef} />
          </motion.div>
        ) : currentPage === "about" ? (
          <AboutPage key="about" />
        ) : currentPage === "donate" ? (
          <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: "USD", intent: "capture", components: "buttons" }}>
            <DonatePage key="donate" />
          </PayPalScriptProvider>
        ) : currentPage === "privacy" ? (
          <PrivacyPolicyPage key="privacy" />
        ) : currentPage === "terms" ? (
          <TermsOfServicePage key="terms" />
        ) : currentPage === "contact" ? (
          <ContactUsPage key="contact" />
        ) : (
          <VolunteerPage key="volunteer" />
        )}
      </AnimatePresence>

      <Footer onNavigate={navigate} />
    </div>
  );
}
