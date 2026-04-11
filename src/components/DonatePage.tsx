import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Heart, CheckCircle2, AlertCircle } from 'lucide-react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";


export default function HeroDonation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [paypalTimedOut, setPaypalTimedOut] = useState(false);
  const [{ isPending, isRejected }] = usePayPalScriptReducer();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const amounts = [10, 25, 50, 100];

  const handleAmountSelect = (val: number) => {
    setSelectedAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const finalAmount = selectedAmount || parseFloat(customAmount) || 0;

  // Start a timeout so the page never permanently shows a spinner
  useEffect(() => {
    if (isPending) {
      timeoutRef.current = setTimeout(() => setPaypalTimedOut(true), 8000);
    } else {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setPaypalTimedOut(false);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [isPending]);

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <section className="max-w-7xl mx-auto px-6 md:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto bg-surface-container-lowest p-10 rounded-2xl ambient-shadow text-center border border-primary/10"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-black mb-4">Purr-fect!</h2>
          <p className="text-lg text-on-surface-variant mb-8">
            Your generous gift of <span className="text-primary font-bold">${finalAmount}</span> is now helping cats in need.
            Thank you for being a hero!
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="bg-primary text-on-primary px-10 py-3 rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            Donate Again
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 mb-16 mt-16 relative">
      <div className="flex flex-col lg:flex-row items-start gap-16 py-12">
        {/* Left: Content & Simple Donation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-sm tracking-wide">
              SUPPORT OUR SANCTUARY
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tight">
              Fuel a <span className="text-primary">Loud Purr</span> with Your Kindness.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              Every dollar helps us provide medical care, warm beds, and gourmet kibble to cats waiting for their forever homes.
            </p>
          </div>

          {/* Simple Donation UI */}
          <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl ambient-shadow border border-on-surface/5 max-w-lg">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-bold text-on-surface">We are glad seeing you donate with love</span>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {amounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => handleAmountSelect(amt)}
                  className={`py-3 rounded-xl font-bold transition-all border-2 ${selectedAmount === amt
                    ? 'bg-primary text-on-primary border-primary'
                    : 'bg-surface-container-lowest text-on-surface border-transparent hover:border-primary/30'
                    }`}
                >
                  ${amt}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Other amount"
                className="w-full pl-8 pr-4 py-3 bg-surface-container-lowest border-2 border-transparent focus:border-primary rounded-xl outline-none font-bold transition-all"
              />
            </div>

            <div className="space-y-4">
              {finalAmount > 0 ? (
                <div className="min-h-[150px]">
                  {(isRejected || paypalTimedOut) ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-center">
                      <AlertCircle className="w-8 h-8 text-error" />
                      <p className="text-sm text-on-surface-variant">
                        PayPal couldn't load. Please add a valid
                        <code className="mx-1 px-1.5 py-0.5 bg-surface-container rounded text-xs">VITE_PAYPAL_CLIENT_ID</code>
                        to your <code className="px-1.5 py-0.5 bg-surface-container rounded text-xs">.env</code> file.
                      </p>
                    </div>
                  ) : isPending ? (
                    <div className="flex items-center justify-center gap-3 py-8">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                      <span className="text-sm text-on-surface-variant">Loading payment...</span>
                    </div>
                  ) : (
                    <PayPalButtons
                      style={{ layout: "vertical", shape: "pill", label: "donate", height: 45 }}
                      createOrder={(data, actions) => {
                        return actions.order.create({
                          intent: "CAPTURE",
                          purchase_units: [{
                            amount: {
                              value: finalAmount.toString(),
                              currency_code: "USD"
                            }
                          }]
                        });
                      }}
                      onApprove={async (data, actions) => {
                        if (actions.order) {
                          const details = await actions.order.capture();
                          handlePaymentSuccess(details);
                        }
                      }}
                      onError={(err) => {
                        console.error('PayPal Checkout error:', err);
                        // Optional: You can set a state here to show a friendly error message to the user
                      }}
                      onCancel={() => {
                        console.log('PayPal Checkout cancelled by user');
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className="text-center py-4 text-on-surface-variant text-sm font-medium">
                  Select an amount to continue
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full"
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <img
              alt="Happy ginger cat"
              className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover transform rotate-2 hover:rotate-0 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxkygkRe7_eXgQnRhXzT66e1197dfWSRe-t6Ro1Pdip8tAw4juNgNDumCLZMo53sXqRYE-Mc15w1jNdBEYReDELDHDLV8AK2EWJjeJOfbaHWQt7YleI44-EnHzJr_0Q7lfoQUzgNL99D0DmdinZ39JyPkare-80NKTTUyNJ_Ly5pUNGAGFKFK5-PubfOWoLylBJ3BvRCkM2rw2c6sBFVUk2f3tRENnKJkU5wTA0UT5xbNJj6-ZLyjd-MQNsCTDa2UkWqojtvRpJvI"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
