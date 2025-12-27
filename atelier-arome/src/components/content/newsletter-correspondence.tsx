'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { WaxSealToast } from '../cart/wax-seal-toast';

export function NewsletterCorrespondence() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setToastMessage('Thank you for joining our correspondence. A confirmation has been dispatched to your address.');
      setEmail('');
    } catch (error) {
      setToastMessage('We encountered an issue. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-parchment-dark">
      <div className="container-manuscript">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <div className="mb-12">
            <div className="text-6xl mb-6">📜</div>
            <h2 className="font-manuscript-display text-4xl md:text-5xl font-bold text-ink mb-6">
              Join Our <span className="text-gold">Correspondence</span>
            </h2>
            <p className="text-lg text-ink-muted leading-relaxed">
              Receive insights into our alchemical processes, seasonal collections, 
              and the ancient wisdom that guides our craft.
            </p>
          </div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="manuscript-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-6">
                <Mail className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-manuscript-display text-xl text-ink mb-2">
                  Dispatch Your Seal
                </h3>
                <p className="text-ink-muted text-sm">
                  Enter your address to receive our quarterly folios
                </p>
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.correspondence@address.com"
                  className="w-full px-4 py-3 manuscript-input text-center"
                  required
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="h-5 w-5 text-ink-muted" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full manuscript-button manuscript-button--primary',
                  isSubmitting && 'opacity-50 cursor-not-allowed'
                )}
              >
                {isSubmitting ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <span>Join Correspondence</span>
                    <span>✉️</span>
                  </>
                )}
              </button>

              <p className="text-xs text-ink-muted text-center">
                We respect your privacy. Unsubscribe at any time. Your address 
                will only be used for our quarterly correspondence.
              </p>
            </form>
          </motion.div>

          {/* Decorative Elements */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-gold opacity-50">
            <div className="w-16 h-px bg-gold" />
            <span className="text-2xl">⚗️</span>
            <div className="w-16 h-px bg-gold" />
          </div>
        </motion.div>
      </div>

      {/* Toast for feedback */}
      {toastMessage && (
        <WaxSealToast
          message={toastMessage}
          type={toastMessage.includes('Thank you') ? 'success' : 'error'}
          onDismiss={() => setToastMessage('')}
        />
      )}
    </section>
  );
}
