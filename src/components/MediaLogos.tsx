'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const logos = [
    { name: 'Sky News', src: '/assets/WhatsApp Image 2026-02-06 at 22.01.46 (1).jpeg' },
    { name: 'Shahed', src: '/assets/WhatsApp Image 2026-02-06 at 22.01.46 (2).jpeg' },
    { name: 'Al Aan', src: '/assets/WhatsApp Image 2026-02-06 at 22.00.59 (1).jpeg' },
    { name: 'MBC', src: '/assets/WhatsApp Image 2026-02-06 at 22.16.16.jpeg' },
    { name: 'Fujairah TV', src: '/assets/WhatsApp Image 2026-02-06 at 22.03.12 (1).jpeg' },
];

export default function MediaLogos() {
    return (
        <section className="py-20 bg-background border-y border-primary/5">
            <div className="section-container flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="relative h-12 md:h-16 w-32 md:w-48 grayscale hover:grayscale-0 transition-all duration-300"
                    >
                         {/* Centered text placeholder if images aren't perfect logos */}
                         <div className="w-full h-full flex items-center justify-center font-black text-foreground/50 text-xl tracking-tighter uppercase whitespace-nowrap">
                             {logo.name}
                         </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
