'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Sparkles from './Sparkles';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('About');

    return (
        <section className="py-32 md:py-56 bg-background overflow-hidden relative">
            {/* Ambient Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-40 items-center">
                
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden group border border-primary/10">
                        <Image
                            src="/assets/WhatsApp Image 2026-02-06 at 22.16.16.jpeg"
                            alt="Rym Manai"
                            fill
                            className="object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-all duration-1000" />
                    </div>
                    {/* Floating Decorative Element */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 backdrop-blur-3xl rounded-3xl border border-primary/20 hidden md:flex items-center justify-center p-6 text-center">
                         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{t('posts')} & {t('followers')}</span>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="text-center lg:text-right order-1 lg:order-2 relative"
                >
                    <div className="absolute -top-32 -right-32 opacity-10 hidden lg:block">
                         <Sparkles className="scale-[3] rotate-45" />
                    </div>
                    
                    <span className="text-primary font-black tracking-[0.6em] mb-10 block text-[10px] md:text-xs uppercase">
                        {t('posts')} & {t('followers')}
                    </span>

                    <h2 className="text-4xl md:text-8xl font-black text-foreground mb-12 leading-[1] tracking-tighter">
                        {t('title')}
                    </h2>
                    
                    <div className="space-y-12 text-foreground/40 text-lg md:text-2xl leading-relaxed font-medium italic serif">
                        <p className="hover:text-foreground/60 transition-colors duration-500">{t('p1')}</p>
                        <p className="text-foreground font-bold not-italic tracking-tight">{t('p2')}</p>
                        <p className="hover:text-foreground/60 transition-colors duration-500">{t('p3')}</p>
                    </div>

                    <div className="mt-24 flex flex-wrap justify-center lg:justify-end gap-16 md:gap-24">
                         <div className="flex flex-col items-center lg:items-end group">
                              <span className="text-primary font-black text-6xl md:text-8xl tabular-nums tracking-tighter group-hover:scale-110 transition-transform duration-700">{t('postsCount')}</span>
                              <span className="text-foreground/20 uppercase tracking-[0.5em] text-[10px] font-black mt-4">
                                  {t('posts')}
                              </span>
                         </div>
                         <div className="flex flex-col items-center lg:items-end group">
                              <span className="text-primary font-black text-6xl md:text-8xl tabular-nums tracking-tighter group-hover:scale-110 transition-transform duration-700">{t('followersCount')}</span>
                              <span className="text-foreground/20 uppercase tracking-[0.5em] text-[10px] font-black mt-4">
                                  {t('followers')}
                              </span>
                         </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

