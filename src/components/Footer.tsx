'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
    const t = useTranslations('Navigation');
    const f = useTranslations('Footer');
    const b = useTranslations('Brand');

    return (
        <footer className="bg-background border-t border-primary/5 pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
            {/* Ambient Base Glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-32 mb-32">
                    
                    {/* Brand Meta */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block mb-10 group">
                             <motion.span 
                                whileHover={{ scale: 1.1 }}
                                className="text-6xl md:text-8xl font-normal text-primary font-signature"
                             >
                                 Rym
                             </motion.span>
                        </Link>
                        <p className="text-foreground/40 text-base md:text-lg leading-relaxed italic mb-12 max-w-sm">
                            {b('description') || "Transforming lives through self-development and emotional intelligence."}
                        </p>
                        <div className="flex gap-6">
                             {[Instagram, Facebook, Youtube].map((Icon, i) => (
                                 <a key={i} href="#" className="w-14 h-14 rounded-full border border-primary/10 flex items-center justify-center text-foreground/20 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-700">
                                     <Icon size={20} />
                                 </a>
                             ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="flex flex-col gap-12">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">{f('quickLinks')}</h4>
                        <ul className="flex flex-col gap-6">
                            {[
                                { name: t('home'), href: '/' },
                                { name: t('services'), href: '/services' },
                                { name: t('pricing'), href: '/pricing' }
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-xl md:text-3xl font-black uppercase tracking-tighter text-foreground/30 hover:text-primary transition-all duration-500 flex items-center gap-4 group">
                                        {link.name}
                                        <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-12">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">{f('legal')}</h4>
                        <ul className="flex flex-col gap-6">
                            {[
                                { name: t('faq'), href: '/faq' },
                                { name: f('privacy'), href: '/privacy' },
                                { name: f('terms'), href: '/terms' }
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-xl md:text-3xl font-black uppercase tracking-tighter text-foreground/30 hover:text-primary transition-all duration-500">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & CTA */}
                    <div className="flex flex-col gap-12">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/20">{f('contactUs')}</h4>
                        <div className="space-y-8">
                            <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-foreground/60">
                                contact@rymmanai.com
                            </p>
                            <Link href="/contact" className="group h-16 px-12 border border-primary/20 rounded-full inline-flex items-center justify-center text-[10px] font-black uppercase tracking-[0.4em] hover:bg-primary hover:text-background transition-all duration-700">
                                <span>{t('contact')}</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase font-black tracking-[0.5em] text-foreground/15 gap-8">
                    <p>© {new Date().getFullYear()} {b('name')}. {f('allRightsReserved')}</p>
                    <div className="flex items-center gap-12">
                         <span className="hover:text-primary/50 transition-colors cursor-default tracking-[1.5em] text-[7px]">DESIGNED TO EMPOWER</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

