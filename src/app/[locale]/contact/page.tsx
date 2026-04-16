'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Clock, ChevronRight } from 'lucide-react';

export default function ContactPage() {
    const t = useTranslations('ContactPage');
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
                        className="text-foreground/50 max-w-3xl mx-auto text-base md:text-xl px-4 leading-relaxed italic"
                    >
                        {t('description')}
                    </motion.p>
                </div>
            </section>

            <section className="pb-24 md:pb-40">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-12"
                        >
                            <div className="space-y-10">
                                <div className="group flex items-start gap-8">
                                    <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 mb-2">{t('emailUs')}</p>
                                        <p className="text-xl md:text-2xl font-black uppercase tracking-tighter">contact@rymmanai.com</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-8">
                                    <div className="w-16 h-16 rounded-3xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <Phone size={32} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 mb-2">{t('callUs')}</p>
                                        <p className="text-xl md:text-2xl font-black uppercase tracking-tighter">+216 12 345 678</p>
                                    </div>
                                </div>

                                <div className="group flex items-start gap-8">
                                    <div className="w-16 h-16 rounded-3xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-foreground/30 mb-2">{t('visitUs')}</p>
                                        <p className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">Tunis, Tunisia</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-12 border-t border-primary/10 flex items-center gap-6">
                                {[Instagram, Facebook].map((Icon, i) => (
                                    <a key={i} href="#" className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 text-foreground/40 hover:text-primary transition-all duration-500">
                                        <Icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="p-10 md:p-16 rounded-[4rem] bg-primary/5 border border-primary/10 relative"
                        >
                            <h3 className="text-3xl md:text-4xl font-black mb-10 uppercase tracking-tighter">{t('sendMessage')}</h3>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 ml-4">{t('fullName')}</label>
                                        <input
                                            type="text"
                                            placeholder={t('placeholderName')}
                                            className="w-full bg-background/50 border border-primary/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 ml-4">{t('emailAddress')}</label>
                                        <input
                                            type="email"
                                            placeholder={t('placeholderEmail')}
                                            className="w-full bg-background/50 border border-primary/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-colors text-foreground font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 ml-4">{t('serviceInterest')}</label>
                                    <select className="w-full bg-background/50 border border-primary/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-colors text-foreground font-medium appearance-none cursor-pointer">
                                        <option className="bg-background" value="energy">{t('services.energy')}</option>
                                        <option className="bg-background" value="emotional">{t('services.emotional')}</option>
                                        <option className="bg-background" value="feminine">{t('services.feminine')}</option>
                                    </select>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 ml-4">{t('yourMessage')}</label>
                                    <textarea
                                        rows={5}
                                        placeholder={t('placeholderMessage')}
                                        className="w-full bg-background/50 border border-primary/10 rounded-2xl px-8 py-5 focus:outline-none focus:border-primary transition-colors text-foreground font-medium resize-none"
                                    />
                                </div>

                                <button className="btn-primary w-full flex items-center justify-center gap-4 group/btn py-6">
                                    <span>{t('submitInquiry')}</span>
                                    <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[500px] w-full relative grayscale contrast-125 opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 border-t border-primary/10">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102231.06013396652!2d10.103007624176465!3d36.80649480170428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sTunis!5e0!3m2!1sen!2stn!4v1712950000000!5m2!1sen!2stn"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background h-32 top-0" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-background h-32 bottom-0" />
            </section>

            <Footer />
        </main>
    );
}
