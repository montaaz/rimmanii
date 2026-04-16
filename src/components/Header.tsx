'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const t = useTranslations('Navigation');
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('home'), href: '/' },
        { name: t('services'), href: '/services' },
        { name: t('blog'), href: '/blog' },
        { name: t('pricing'), href: '/pricing' },
        { name: t('faq'), href: '/faq' },
        { name: t('contact'), href: '/contact' },
    ];

    const leftLinks = navLinks.slice(0, 3);
    const rightLinks = navLinks.slice(3);

    return (
        <>
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-1000 ${
                scrolled 
                ? 'py-3 bg-background/95 backdrop-blur-3xl border-b border-primary/10 shadow-lg' 
                : 'py-6 md:py-12 bg-gradient-to-b from-black/50 via-black/20 to-transparent'
            }`}
        >
            <nav className="max-w-[1700px] mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between">
                    
                    {/* Left: Logo (Desktop Only) */}
                    <Link href="/" className="hidden lg:flex flex-col items-start flex-shrink-0 group py-4 relative">
                        <motion.span 
                            animate={{ scale: scrolled ? 0.8 : 1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] font-signature leading-none select-none transition-all duration-1000 origin-left"
                        >
                             Rym
                        </motion.span>
                        <span className="absolute -bottom-1 w-4 h-px bg-primary/20 group-hover:w-8 transition-all duration-1000" />
                    </Link>

                    {/* Center: Nav Links */}
                    <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-[10px] xl:text-[11px] font-black uppercase tracking-[0.25em] transition-all hover:text-primary whitespace-nowrap ${
                                    pathname === link.href ? 'text-primary' : 'text-foreground/90'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Utilities */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                        <Link href="/login" className="group flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
                             <User size={18} strokeWidth={1.5} className="text-primary/60 group-hover:text-primary" />
                             <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden xl:block">{t('account')}</span>
                        </Link>
                        
                        <Link href="/cart" className="relative group flex items-center gap-3">
                             <div className="relative">
                                <ShoppingBag size={20} strokeWidth={1.5} className="text-foreground/80 group-hover:text-primary transition-colors" />
                                <span className="absolute -top-1.5 -right-2 bg-secondary text-foreground text-[8px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full">0</span>
                             </div>
                             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 group-hover:text-foreground/70 hidden xl:block">{t('cart')}</span>
                        </Link>

                        <div className="flex items-center gap-3 pl-8 border-l border-primary/20">
                            {['en', 'ar', 'fr'].map((l) => (
                                <Link
                                    key={l}
                                    href={pathname}
                                    locale={l as any}
                                    className={`text-[10px] font-black transition-colors uppercase tracking-[0.1em] ${locale === l ? 'text-primary' : 'text-foreground/40 hover:text-foreground/80'}`}
                                >
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Toggle */}
                    <div className="lg:hidden flex items-center justify-between w-full">
                        <Link href="/" className="text-3xl font-normal text-primary font-signature">Rym</Link>
                        <div className="flex items-center gap-2">
                             <Link href="/cart" className="relative p-2.5">
                                 <ShoppingBag size={20} className="text-foreground/40" />
                                 <span className="absolute top-1.5 right-1.5 bg-secondary text-foreground text-[7px] font-black w-3.5 h-3.5 flex items-center justify-center rounded-full">0</span>
                             </Link>
                             <button 
                                onClick={() => setIsOpen(true)}
                                className="text-foreground/60 p-2.5 transition-all active:scale-95"
                                aria-label="Menu"
                             >
                                <Menu size={24} strokeWidth={1.5} />
                             </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    style={{ backgroundColor: '#1f3e43', opacity: 1 }}
                    className="fixed inset-0 z-[1000] flex flex-col"
                >
                    <div className="flex justify-between items-center px-8 py-6">
                        <Link 
                            href="/" 
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-normal text-primary font-signature"
                        >
                            Rym
                        </Link>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="text-foreground/80 p-2 active:scale-90 transition-transform"
                        >
                            <X size={32} strokeWidth={1} />
                        </button>
                    </div>

                    <div className="flex-grow flex flex-col justify-center px-10 py-10 gap-8 overflow-y-auto">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 + 0.3 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-4xl md:text-6xl font-outfit font-black uppercase tracking-tighter ${
                                        pathname === link.href ? 'text-primary' : 'text-foreground/20'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-10 border-t border-primary/10 flex flex-col gap-8">
                        <Link href="/login" onClick={() => setIsOpen(false)} className="text-sm font-black text-foreground uppercase tracking-[0.4em] flex items-center gap-4">
                        <User size={20} className="text-primary" />
                        {t('account')}
                        </Link>
                        <div className="flex gap-6">
                            {['en', 'ar', 'fr'].map((l) => (
                                <Link key={l} href={pathname} locale={l as any} onClick={() => setIsOpen(false)} className={`text-xs font-black uppercase tracking-[0.2em] ${locale === l ? 'text-primary border-b border-primary' : 'text-foreground/20'}`}>
                                    {l}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    );
}

