import { useEffect, useRef } from 'react';
import { useCelebrationSpawner } from '../hooks/useCelebrationSpawner';

/**
 * Layer for rendering floating celebration decorations (hearts, butterflies, etc.).
 * Spawns decorations gradually and cleans them up after animation to prevent memory leaks.
 */
export function CelebrationDecorationsLayer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { decorations } = useCelebrationSpawner();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const elements: HTMLDivElement[] = [];

        decorations.forEach((decoration) => {
            const el = document.createElement('div');
            el.className = 'decoration-float fixed pointer-events-none';
            el.style.left = `${decoration.x}%`;
            el.style.bottom = '0';
            el.style.fontSize = `${decoration.size}px`;
            el.style.zIndex = '25';
            el.textContent = decoration.emoji;
            el.style.setProperty('--duration', `${decoration.duration}s`);
            el.style.setProperty('--drift-x', `${decoration.driftX}px`);
            el.style.setProperty('--rotate', `${decoration.rotate}deg`);

            container.appendChild(el);
            elements.push(el);

            // Clean up after animation completes
            setTimeout(() => {
                el.remove();
            }, decoration.duration * 1000);
        });

        return () => {
            elements.forEach(el => el.remove());
        };
    }, [decorations]);

    return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />;
}
