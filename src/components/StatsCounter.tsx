'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';

function CountUp({ value, suffix = "" }: { value: string, suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // Extract number from string if needed (e.g. "1500" from "1500+")
    const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
    
    const springValue = useSpring(0, {
        stiffness: 70,
        damping: 30,
    });

    const displayValue = useTransform(springValue, (latest) => 
        Math.floor(latest).toLocaleString() + (latest >= numericValue ? suffix : "")
    );

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function StatsCounter() {
    const t = useTranslations('Stats');

    return (
        <section className="py-32 md:py-56 bg-background relative overflow-hidden">
            <div className="section-container relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative p-[1px] rounded-[4rem] bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 shadow-2xl overflow-hidden"
                >
                    <div className="bg-background/90 rounded-[4rem] p-16 md:p-32 flex flex-col md:flex-row items-center justify-around gap-20 md:gap-12 backdrop-blur-3xl border border-primary/10 relative">
                        
                        {/* Ambient Glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                        {[
                            { id: 'participants', value: t('participantsCount'), label: t('participants') },
                            { id: 'experience', value: t('experienceCount'), label: t('experience') },
                            { id: 'followers', value: t('followersCount'), label: t('followers') },
                        ].map((stat, i) => (
                            <div key={stat.id} className="flex flex-col items-center text-center relative z-10 group">
                                <h4 className="text-6xl md:text-8xl font-black text-primary mb-6 tabular-nums tracking-tighter group-hover:scale-105 transition-transform duration-700">
                                    <CountUp value={stat.value} suffix="+" />
                                </h4>
                                <p className="text-[10px] md:text-xs text-foreground/30 font-black uppercase tracking-[0.5em] max-w-[160px] leading-relaxed">
                                    {stat.label}
                                </p>
                                {i < 2 && (
                                    <div className="hidden lg:block absolute -right-24 xl:-right-32 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
