'use client';

export default function Sparkles({ className }: { className?: string }) {
    return (
        <div className={`flex gap-2 ${className}`}>
            {[1, 2, 3, 4].map((i) => (
                <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground opacity-80">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" fill="currentColor"/>
                </svg>
            ))}
        </div>
    );
}

export function RadiatingStar({ className }: { className?: string }) {
    return (
        <div className={className}>
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground opacity-40">
                {Array.from({ length: 16 }).map((_, i) => (
                    <line 
                        key={i}
                        x1="60" y1="60" 
                        x2={60 + 50 * Math.cos((i * 2 * Math.PI) / 16)} 
                        y2={60 + 50 * Math.sin((i * 2 * Math.PI) / 16)} 
                        stroke="currentColor" 
                        strokeWidth="2"
                    />
                ))}
            </svg>
        </div>
    );
}
