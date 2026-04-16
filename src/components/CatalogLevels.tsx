'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import Sparkles from './Sparkles';
import { useTranslations } from 'next-intl';

const levels = [
    { title: 'Level 4', image: '/assets/WhatsApp Image 2026-02-06 at 22.01.46.jpeg' },
    { title: 'Level 3', image: '/assets/WhatsApp Image 2026-02-06 at 22.01.45.jpeg' },
    { title: 'Level 2', image: '/assets/WhatsApp Image 2026-02-06 at 22.00.59.jpeg' },
    { title: 'Level 1', image: '/assets/WhatsApp Image 2026-02-06 at 21.58.14.jpeg' },
];

export default function CatalogLevels() {
    const t = useTranslations('Catalog');

    return (
        <section className="py-32 md:py-56 bg-background relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

            {/* CTA & Intro */}
            <div className="section-container relative z-10 text-center mb-40">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="/reservation" className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden font-black text-primary transition duration-1000 border border-primary/20 rounded-full hover:text-background mb-20 uppercase tracking-[0.4em] text-[10px] md:text-xs">
                        <span className="absolute inset-x-0 bottom-0 h-0 transition-all duration-700 ease-out bg-primary group-hover:h-full"></span>
                        <span className="relative z-10">{t('cta')}</span>
                        <div className="absolute -top-8 -left-16 opacity-30">
                             <Sparkles className="scale-100 rotate-45" />
                        </div>
                    </Link>
                    
                    <h3 className="text-4xl md:text-8xl font-black text-foreground mb-12 leading-[1] tracking-tighter">
                        {t('question')}
                    </h3>
                    <p className="text-foreground/40 text-lg md:text-3xl leading-relaxed max-w-4xl mx-auto font-medium italic serif">
                        {t('description')}
                    </p>
                </motion.div>
            </div>

            {/* Catalog Grid */}
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 px-8 relative z-10">
                {levels.map((level, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative"
                    >
                        <div className="relative aspect-[3/4] w-full transition-all duration-1000 group-hover:-translate-y-12 cursor-pointer">
                            <div className="absolute -inset-10 bg-gradient-to-b from-primary/10 to-transparent rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <Image
                                src={level.image}
                                alt={level.title}
                                fill
                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_80px_120px_rgba(201,165,137,0.3)] transition-all duration-1000"
                                unoptimized
                            />
                            
                            <div className="absolute inset-0 flex items-end justify-center pb-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                                <div className="bg-background/80 backdrop-blur-xl px-10 py-3 rounded-full border border-primary/20 scale-50 group-hover:scale-100 transition-transform duration-700">
                                    <span className="text-primary font-black text-[12px] uppercase tracking-[0.3em]">{level.title}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

