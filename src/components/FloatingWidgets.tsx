'use client';

import { ArrowUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => setVisible(window.pageYOffset > 500);
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-8 z-[100] w-12 h-12 bg-primary/20 hover:bg-primary text-primary hover:text-black border border-primary/40 rounded-md flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                >
                    <ArrowUp size={24} strokeWidth={3} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export function WhatsAppButton() {
    const t = useTranslations('Floating');
    
    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/95 backdrop-blur-3xl rounded-3xl p-4 shadow-2xl border border-black/5 max-w-[280px] group pointer-events-auto"
            >
                <div className="flex items-center gap-3 mb-2">
                    <div className="relative">
                        <img src="/assets/WhatsApp Image 2026-02-06 at 22.16.16.jpeg" alt="Rym" className="w-10 h-10 rounded-full object-cover" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full" />
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-black text-black leading-tight">{t('question')}</p>
                        <p className="text-[10px] text-black/40 font-bold">{t('teamReady')}</p>
                    </div>
                </div>
                <a 
                    href="https://wa.me/yournumber" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#25D366] text-foreground rounded-full flex items-center justify-center gap-2 text-sm font-black hover:opacity-90 transition-opacity"
                >
                    <MessageCircle size={18} fill="white" />
                    <span>{t('talkToUs')}</span>
                </a>
            </motion.div>
        </div>
    );
}
