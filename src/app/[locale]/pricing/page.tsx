'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Star, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PricingPage() {
    const t = useTranslations('PricingPage');
    const tData = useTranslations('PricingData');

    const plans = [
        { id: "discovery", icon: Star, color: "blue" },
        { id: "professional", icon: Zap, color: "primary", featured: true },
        { id: "platinum", icon: Crown, color: "secondary" }
    ];

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-44 md:pt-64 pb-24 md:pb-40 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="section-container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter"
                    >
                        {t('title')} <span className="text-secondary italic font-signature lowercase">{t('titleHighlight')}</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/50 max-w-3xl mx-auto text-base md:text-xl px-4 leading-relaxed"
                    >
                        {t('subtitle')}
                    </motion.p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pb-24 md:pb-40">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`relative group p-10 md:p-14 rounded-[3rem] border flex flex-col transition-all duration-700 ${
                                    plan.featured 
                                    ? 'bg-secondary/10 border-secondary/30 lg:scale-110 z-10 shadow-2xl' 
                                    : 'bg-primary/5 border-primary/10 hover:border-primary/30'
                                }`}
                            >
                                {plan.featured && (
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-foreground text-[10px] font-black uppercase tracking-[0.3em] px-8 py-3 rounded-full shadow-lg">
                                        {t('recommended')}
                                    </div>
                                )}

                                <div className="flex items-center justify-between mb-12">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plan.featured ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                                        <plan.icon size={32} />
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-start justify-end">
                                            <span className="text-sm font-bold opacity-40 mt-2">$</span>
                                            <span className="text-5xl md:text-6xl font-black tracking-tighter">{tData(`${plan.id}.price`)}</span>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest opacity-30">{t('perSession')}</span>
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{tData(`${plan.id}.name`)}</h3>
                                <p className="text-foreground/40 text-sm md:text-base mb-12 italic leading-relaxed">{tData(`${plan.id}.description`)}</p>

                                <div className="space-y-5 mb-14 flex-grow">
                                    {(tData.raw(`${plan.id}.features`) as string[]).map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-foreground/60">
                                            <Check size={16} className={plan.featured ? 'text-secondary' : 'text-primary'} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all duration-500 hover:scale-105 ${
                                    plan.featured 
                                    ? 'bg-secondary text-foreground shadow-xl shadow-secondary/20' 
                                    : 'border border-primary/20 hover:bg-primary/10'
                                }`}>
                                    {t('selectPlan', { plan: tData(`${plan.id}.name`) })}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 md:mt-32 p-10 md:p-16 rounded-[3rem] bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-12 group"
                    >
                        <div className="flex items-center gap-8">
                            <div className="w-20 h-20 rounded-full bg-background/50 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                <Star size={40} />
                            </div>
                            <div>
                                <h4 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">{t('customTitle')}</h4>
                                <p className="text-foreground/40 text-base md:text-lg italic">{t('customDesc')}</p>
                            </div>
                        </div>
                        <button className="group/btn flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] px-10 py-6 border border-primary/20 rounded-full hover:bg-primary hover:text-background transition-all duration-700">
                             <span>{t('customBtn')}</span>
                             <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
