'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Popup');

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown = sessionStorage.getItem('booking-popup-shown');
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('booking-popup-shown', 'true');
      }, 4000); // 4 seconds delay to let the page load

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-background/60 backdrop-blur-xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-secondary border border-primary/20 shadow-[0_0_100px_rgba(0,0,0,0.5)] glass"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 rtl:right-auto rtl:left-6 z-30 p-2 text-foreground/50 hover:text-foreground transition-all hover:bg-background/20 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Image Side */}
              <div className="relative w-full md:w-[45%] min-h-[250px] md:h-auto overflow-hidden">
                <Image
                  src="/assets/training-popup.png"
                  alt="Dermopigmentation Training"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent md:bg-gradient-to-r" />
                
                {/* Visual elements */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10">
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="glass p-4 rounded-2xl flex items-center gap-4 max-w-[280px]"
                    >
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                            <Clock className="text-primary" size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] uppercase font-black tracking-widest text-primary/60">Availability</p>
                            <p className="text-sm font-bold text-foreground">Limited slots this week</p>
                        </div>
                    </motion.div>
                </div>

                {/* Sparkle Decoration */}
                <div className="absolute top-10 left-10 text-primary/40">
                    <Sparkles size={40} className="animate-pulse" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-[55%] p-8 md:p-16 flex flex-col justify-center gap-8 relative">
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 flex items-center gap-2">
                      <span className="w-8 h-px bg-primary/30" />
                      {t('subtitle')}
                    </h4>
                    <h2 className="text-4xl md:text-6xl font-black text-foreground mb-6 leading-[1.1] tracking-tighter">
                      {t('title')}
                    </h2>
                    <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-md">
                      {t('description')}
                    </p>
                  </motion.div>
                </div>

                <div className="space-y-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link 
                            href="/reservation" 
                            onClick={closePopup}
                            className="bg-primary text-background font-black uppercase tracking-widest text-xs md:text-sm py-6 px-10 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,165,137,0.4)] flex items-center justify-between group"
                        >
                            <span>{t('cta')}</span>
                            <div className="flex items-center gap-2 overflow-hidden">
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-500" />
                            </div>
                        </Link>
                    </motion.div>
                    
                    <motion.button 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        onClick={closePopup}
                        className="w-full text-[10px] md:text-xs uppercase font-black tracking-[0.3em] text-foreground/30 hover:text-primary transition-colors py-2"
                    >
                        {t('close')}
                    </motion.button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 text-[12rem] font-black text-primary/20 leading-none select-none -mr-12 -mt-12">
                        RIM
                    </div>
                </div>

                <div className="flex gap-2 relative z-10">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
                    ))}
                </div>
              </div>
            </div>
            
            {/* Ambient glows */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
