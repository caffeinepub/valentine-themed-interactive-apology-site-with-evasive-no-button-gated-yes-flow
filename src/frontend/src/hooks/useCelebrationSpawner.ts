import { useState, useEffect, useRef } from 'react';

interface Decoration {
    id: number;
    emoji: string;
    x: number;
    size: number;
    duration: number;
    driftX: number;
    rotate: number;
}

const DECORATION_EMOJIS = ['💖', '🦋', '🐱', '🍫', '🧸', '✨', '🌹'];

/**
 * Hook spawning celebration decorations gradually over time.
 * Manages decoration lifecycle and ensures proper cleanup to prevent memory leaks.
 */
export function useCelebrationSpawner() {
    const [decorations, setDecorations] = useState<Decoration[]>([]);
    const nextIdRef = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Spawn decorations gradually
        intervalRef.current = setInterval(() => {
            const newDecoration: Decoration = {
                id: nextIdRef.current++,
                emoji: DECORATION_EMOJIS[Math.floor(Math.random() * DECORATION_EMOJIS.length)],
                x: Math.random() * 100,
                size: 30 + Math.random() * 30,
                duration: 4 + Math.random() * 3,
                driftX: -100 + Math.random() * 200,
                rotate: -180 + Math.random() * 360
            };

            setDecorations(prev => [...prev, newDecoration]);
        }, 400); // Spawn every 400ms

        // Cleanup interval on unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return { decorations };
}
