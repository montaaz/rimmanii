'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { useState } from 'react';

export default function CartPage() {
    const t = useTranslations('CartPage');
    const nt = useTranslations('Navigation');
    
    // Mock cart data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Feminine Energy Mastery",
            category: "Full Course",
            price: 169,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 2,
            name: "Private Energy Session",
            category: "1-on-1 Consultation",
            price: 150,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?auto=format&fit=crop&q=80&w=200"
        }
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(items => items.map(item => 
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ));
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const fee = cartItems.length > 0 ? 5 : 0;
    const total = subtotal + fee;

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-44 md:pt-64 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tighter uppercase">
                            {t('title')} <span className="text-primary italic font-signature capitalize">{t('titleHighlight')}</span>
                        </h1>
                        <p className="text-foreground/50 max-w-2xl mx-auto text-lg md:text-xl italic">
                            {t('subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-32">
                <div className="section-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        
                        {/* Cart Items List */}
                        <div className="lg:col-span-8 space-y-8">
                            <AnimatePresence mode="popLayout">
                                {cartItems.length > 0 ? (
                                    cartItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="group relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500"
                                        >
                                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 bg-background border border-primary/10">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                            </div>

                                            <div className="flex-1 space-y-2 text-center md:text-left">
                                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">{item.category}</p>
                                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{item.name}</h3>
                                                <p className="text-xl font-medium text-foreground/40 italic">{item.price}$</p>
                                            </div>

                                            <div className="flex flex-col items-center md:items-end gap-6">
                                                <div className="flex items-center gap-6 bg-background/50 rounded-full px-4 py-2 border border-primary/10">
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 text-foreground/40 hover:text-primary transition-all"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-black w-4 text-center">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-primary/10 text-foreground/40 hover:text-primary transition-all"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => removeItem(item.id)}
                                                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/20 hover:text-red-400 transition-colors"
                                                >
                                                    <Trash2 size={12} />
                                                    {t('remove')}
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center py-32 space-y-8"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center mx-auto text-primary/20">
                                            <ShoppingBag size={48} />
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-black uppercase tracking-tighter">{t('empty')}</h2>
                                            <p className="text-foreground/40 italic">Wait! Your journey hasn't started yet.</p>
                                        </div>
                                        <Link href="/services" className="btn-primary inline-flex">
                                            {t('shopNow')}
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Summary Sidebar */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="sticky top-40 p-10 md:p-12 rounded-[3.5rem] bg-primary/5 border border-primary/10 space-y-10"
                            >
                                <h3 className="text-3xl font-black uppercase tracking-tighter border-b border-primary/10 pb-8">{t('summary')}</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex justify-between text-sm font-black uppercase tracking-[0.2em]">
                                        <span className="text-foreground/40">{t('subtotal')}</span>
                                        <span>{subtotal}$</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-black uppercase tracking-[0.2em]">
                                        <span className="text-foreground/40">{t('shipping')}</span>
                                        <span>{fee}$</span>
                                    </div>
                                    <div className="pt-6 border-t border-primary/10 flex justify-between items-end">
                                        <span className="text-base font-black uppercase tracking-[0.2em]">{t('total')}</span>
                                        <span className="text-4xl font-black text-primary">{total}$</span>
                                    </div>
                                </div>

                                <button className="btn-primary w-full flex items-center justify-center gap-4 group/btn py-6">
                                    <span>{t('checkout')}</span>
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 text-foreground/30">
                                        <ShieldCheck size={16} />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Secure Checkout SSL</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-foreground/30">
                                        <Truck size={16} />
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Instant Digital Access</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
