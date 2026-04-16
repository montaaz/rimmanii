'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FAQPage() {
    const t = useTranslations('FAQPage');
    const tData = useTranslations('FAQData');
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const faqs = ['q1', 'q2', 'q3', 'q4', 'q5'];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-44 md:pt-64 pb-24 md:pb-40 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="section-container relative z-10 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter uppercase"
                    >
                        {t('title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/40 max-w-2xl mx-auto text-base md:text-xl px-4 leading-relaxed font-medium italic"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>
            </section>

            <section className="pb-24 md:pb-40">
                <div className="section-container max-w-4xl">
                    <div className="space-y-6">
                        {faqs.map((qKey, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`rounded-[2rem] md:rounded-[3rem] overflow-hidden border transition-all duration-500 ${
                                    activeIndex === i 
                                    ? 'bg-primary/5 border-primary/30 shadow-2xl' 
                                    : 'bg-background border-primary/10 hover:border-primary/30'
                                }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-8 md:p-12 text-left group"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                                            activeIndex === i ? 'bg-primary text-background' : 'bg-primary/10 text-primary group-hover:scale-110'
                                        }`}>
                                            <HelpCircle size={24} />
                                        </div>
                                        <span className="text-lg md:text-2xl font-black uppercase tracking-tighter leading-tight">{tData(`${qKey}.q`)}</span>
                                    </div>
                                    <div className={`p-3 rounded-full border transition-all duration-500 ${activeIndex === i ? 'bg-primary/20 border-primary/50 text-primary rotate-180' : 'border-primary/10 text-foreground/20'}`}>
                                        {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-10 md:px-14 pb-12 md:pb-16 text-foreground/40 text-base md:text-xl leading-relaxed italic border-t border-primary/5 pt-8">
                                                {tData(`${qKey}.a`)}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-24 md:mt-32 p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 text-center relative overflow-hidden group"
                    >
                         <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-1000" />
                        
                        <div className="relative z-10">
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-background rounded-full flex items-center justify-center mx-auto mb-10 text-primary shadow-xl border border-primary/10 group-hover:scale-110 transition-transform duration-700">
                                <MessageSquare size={48} strokeWidth={1} />
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">{t('stillQuestions')}</h3>
                            <p className="text-foreground/40 text-base md:text-xl mb-12 max-w-xl mx-auto italic">{t('contactDesc')}</p>
                            <button className="group/btn flex items-center gap-4 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] px-12 py-6 bg-primary text-background rounded-full mx-auto hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
                                 <span>{t('contactBtn')}</span>
                                 <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
