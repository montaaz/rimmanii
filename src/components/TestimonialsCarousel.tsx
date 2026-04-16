'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const testimonials = [
    '/assets/WhatsApp Image 2026-02-06 at 22.05.39.jpeg',
    '/assets/WhatsApp Image 2026-02-06 at 22.05.39 (1).jpeg',
    '/assets/WhatsApp Image 2026-02-06 at 22.05.39 (2).jpeg',
    '/assets/WhatsApp Image 2026-02-06 at 22.05.40.jpeg',
    '/assets/WhatsApp Image 2026-02-06 at 22.05.39 (5).jpeg',
    '/assets/WhatsApp Image 2026-02-06 at 22.05.39 (6).jpeg',
];

export default function TestimonialsCarousel() {
    const t = useTranslations('Testimonials');

    return (
        <section className="py-24 md:py-40 bg-background overflow-hidden relative">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="section-container text-center mb-24 px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-black tracking-[0.4em] mb-6 block text-[10px] md:text-xs uppercase">
                        {t('title').split(' ')[0]}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-black text-foreground mb-8 leading-tight tracking-tighter">
                        {t('title')}
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="flex relative items-center group">
                 <motion.div
                    animate={{ x: [0, -100 * testimonials.length] }}
                    transition={{ 
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 30, 
                        ease: "linear" 
                    }}
                    className="flex gap-10 md:gap-16 items-center flex-nowrap"
                 >
                    {[...testimonials, ...testimonials, ...testimonials].map((img, i) => (
                        <div key={i} className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/5] relative rounded-[2rem] overflow-hidden group/card shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-primary/5">
                             <Image
                                src={img}
                                alt="Testimonial"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover/card:scale-100"
                                unoptimized
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                 </motion.div>
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        </section>
    );
}
