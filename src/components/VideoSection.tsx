'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import Sparkles from './Sparkles';
import { useTranslations } from 'next-intl';

export default function VideoSection() {
    const t = useTranslations('Video');

    return (
        <section className="py-32 bg-background text-foreground text-center relative overflow-hidden">
            <div className="section-container relative z-10 mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 relative inline-block"
                >
                    <div className="absolute -top-12 -left-12 opacity-50">
                         <Sparkles className="scale-110" />
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black text-foreground mb-4">{t('title')}</h2>
                    <div className="w-48 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="relative group max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(212,175,55,0.1)] border border-primary/5 ring-1 ring-primary/10">
                    <video
                        className="w-full aspect-video object-cover"
                        poster="https://nedraghariani.com/wp-content/uploads/2025/01/nedra-portrait.jpg"
                        controls={false}
                    >
                        <source src="/assets/WhatsApp Video 2026-02-06 at 22.10.27.mp4" type="video/mp4" />
                    </video>
                    
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-500 flex items-center justify-center cursor-pointer">
                        <motion.div
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-primary/40 flex items-center justify-center glass backdrop-blur-xl shadow-2xl relative"
                        >
                            <div className="absolute inset-0 border-4 border-primary/20 rounded-full animate-ping" />
                            <Play fill="white" size={48} className="text-foreground ml-2 drop-shadow-lg" />
                        </motion.div>
                    </div>

                    {/* Audio Visualizer Graphic Overlay */}
                    <div className="absolute bottom-10 left-10 right-10 flex items-end justify-center gap-1.5 opacity-40">
                        {Array.from({ length: 60 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 4 }}
                                animate={{ height: Math.random() * 60 + 10 }}
                                transition={{ repeat: Infinity, duration: 0.4 + Math.random(), repeatType: 'reverse' }}
                                className="w-[3px] bg-white rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

