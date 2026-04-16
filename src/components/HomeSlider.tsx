'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Sparkles from './Sparkles';
import { useTranslations } from 'next-intl';

export default function HomeSlider() {
    const t = useTranslations('HomePage');

    return (
        <section className="relative h-screen w-full overflow-hidden bg-background">
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="h-full w-full"
                >
                    <Image
                        src="/assets/WhatsApp Image 2026-02-06 at 22.16.16.jpeg"
                        alt="Hero"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center text-center px-6 pt-44">
                <div className="max-w-6xl w-full relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-8xl font-black text-foreground mb-12 leading-[1.1] tracking-tighter relative"
                    >
                        {t('subtitle')}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute -top-12 -left-12 hidden md:block"
                        >
                            <Sparkles className="scale-150 rotate-12" />
                        </motion.div>
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex items-center justify-center gap-6 md:gap-12 mb-12"
                    >
                        <div className="hidden lg:block w-32 h-px bg-primary/20" />
                        <p className="text-xl md:text-4xl text-foreground/80 font-medium italic serif tracking-tight">
                            {t('description')}
                        </p>
                        <div className="hidden lg:block w-32 h-px bg-primary/20" />
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-10 md:mt-16 flex flex-col items-center gap-8"
                    >
                         <div className="relative group">
                             <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                             <div className="relative bg-background/90 px-8 md:px-14 py-5 md:py-10 rounded-[3rem] flex flex-col md:flex-row items-center gap-6 md:gap-16 border border-primary/10 backdrop-blur-3xl">
                                  <div className="text-center md:text-right">
                                       <span className="text-foreground/30 line-through text-sm md:text-lg block font-bold mb-1 italic">{t('oldPrice')}</span>
                                       <div className="flex flex-col">
                                            <span className="text-4xl md:text-7xl font-black text-primary tracking-tighter">{t('newPrice')}</span>
                                            <span className="text-[10px] uppercase font-black tracking-widest text-primary/40 mt-1">{t('launchOffer')}</span>
                                       </div>
                                  </div>

                                  <div className="flex flex-col items-center gap-6">
                                      <Link href="/pricing" className="btn-primary flex items-center gap-4 group/btn px-10 py-5">
                                          <span>{t('discoverMore')}</span>
                                          <div className="w-8 h-px bg-background group-hover/btn:w-12 transition-all duration-500" />
                                      </Link>
                                      <div className="flex items-center gap-3">
                                          <div className="w-10 h-10 relative">
                                               <Image src="/assets/WhatsApp Image 2026-02-06 at 22.20.08.jpeg" alt="Badge" fill className="rounded-full border border-primary/20" />
                                          </div>
                                          <div className="flex -space-x-3">
                                              {[1, 2, 3].map((i) => (
                                                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center text-[8px] font-black">+</div>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                             </div>
                         </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                 <span className="text-[10px] uppercase font-black tracking-[0.5em] text-foreground/40">{t('discoverMore')}</span>
                 <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
}
