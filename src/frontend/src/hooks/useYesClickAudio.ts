import { useRef, useCallback } from 'react';

/**
 * Hook managing audio playback for the Yes button click.
 * Plays forever.mp3 only after user gesture with moderate volume.
 * Handles play() failures silently to comply with autoplay policies.
 */
export function useYesClickAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playAudio = useCallback(() => {
        // Lazy initialization
        if (!audioRef.current) {
            audioRef.current = new Audio('/assets/forever.mp3');
            audioRef.current.volume = 0.6; // Moderate volume
        }

        // Attempt to play (user gesture triggered)
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Silently handle autoplay policy errors
                // No console noise, no user-visible error
            });
        }
    }, []);

    return { playAudio };
}
