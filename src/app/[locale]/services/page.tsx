'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Sparkles, UserCheck, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function ServicesPage() {
    const t = useTranslations('ServicesPage');
    const tData = useTranslations('ServicesData');

    const services = [
        { id: 'aestheticDermotherapy', image: "/assets/WhatsApp Image 2026-02-06 at 22.05.39 (1).jpeg" },
        { id: 'paramedicalDermopigmentation', image: "/assets/WhatsApp Image 2026-02-06 at 22.05.39 (2).jpeg" },
        { id: 'detailedSkinAnalysis', image: "/assets/WhatsApp Image 2026-02-06 at 22.05.39 (3).jpeg" },
        { id: 'postSurgicalCare', image: "/assets/WhatsApp Image 2026-02-06 at 22.05.39 (4).jpeg" },
        { id: 'pigmentationCorrection', image: "/assets/WhatsApp Image 2026-02-06 at 22.05.39 (5).jpeg" },
        { id: 'medicalMicroNeedling', image: "/assets/WhatsApp Image 2026-02-06 at 22.05.39 (6).jpeg" }
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
                        {t('title')} <span className="text-primary italic font-signature lowercase">{t('titleHighlight')}</span>
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

            {/* Services Grid */}
            <section className="pb-24 md:pb-40">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border border-primary/10">
                                    <Image
                                        src={service.image}
                                        alt={tData(`${service.id}.title`)}
                                        fill
                                        className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-foreground">
                                        <span className="text-xl font-black uppercase tracking-widest">{tData(`${service.id}.price`)}</span>
                                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-background">
                                            <Sparkles size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="px-4">
                                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">{tData(`${service.id}.title`)}</h3>
                                    <p className="text-foreground/40 text-sm md:text-base mb-8 leading-relaxed line-clamp-3 italic">
                                        {tData(`${service.id}.description`)}
                                    </p>

                                    <div className="space-y-4 mb-10">
                                        {[0, 1, 2].map((i) => (
                                            <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-foreground/60">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                <span>{tData(`${service.id}.benefits.${i}`)}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="group/btn flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-foreground transition-all duration-500">
                                        <span>{t('bookButton')}</span>
                                        <ChevronRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Elements */}
            <section className="py-24 md:py-40 bg-primary/5">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        {[
                            { icon: Shield, title: t('trust.medicalGrade.title'), desc: t('trust.medicalGrade.desc') },
                            { icon: Sparkles, title: t('trust.modernTech.title'), desc: t('trust.modernTech.desc') },
                            { icon: UserCheck, title: t('trust.expertCare.title'), desc: t('trust.expertCare.desc') },
                            { icon: Clock, title: t('trust.zeroWait.title'), desc: t('trust.zeroWait.desc') }
                        ].map((item, i) => (
                            <div key={i} className="text-center group">
                                <item.icon size={48} className="mx-auto mb-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-3">{item.title}</h4>
                                <p className="text-sm text-foreground/40 max-w-[200px] mx-auto leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
