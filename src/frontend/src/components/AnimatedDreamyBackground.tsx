import { useEffect, useRef } from 'react';

/**
 * Animated dreamy background with soft gradient and optional floating light particles.
 * Provides a romantic, Disney-fairytale inspired backdrop without being distracting.
 */
export function AnimatedDreamyBackground() {
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!particlesRef.current) return;

        // Create subtle floating light particles
        const particleCount = 15;
        const particles: HTMLDivElement[] = [];

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${4 + Math.random() * 8}px`;
            particle.style.height = particle.style.width;
            particle.style.borderRadius = '50%';
            particle.style.background = `oklch(${0.95 + Math.random() * 0.05} ${0.05 + Math.random() * 0.05} ${10 + Math.random() * 30} / ${0.3 + Math.random() * 0.3})`;
            particle.style.setProperty('--duration', `${15 + Math.random() * 20}s`);
            particle.style.setProperty('--delay', `${Math.random() * 10}s`);
            particle.style.setProperty('--drift', `${-50 + Math.random() * 100}px`);
            
            particlesRef.current.appendChild(particle);
            particles.push(particle);
        }

        return () => {
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <>
            <div className="dreamy-bg fixed inset-0 w-full h-full" />
            <div ref={particlesRef} className="fixed inset-0 w-full h-full pointer-events-none" />
        </>
    );
}
