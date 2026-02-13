import { useState, useCallback, useEffect, useRef } from 'react';

const POPUP_MESSAGES = [
    "Are you sure? 🥺",
    "Really sure? 💔",
    "Please don't say no 😢",
    "I'll bring chocolates 🍫",
    "I'll send teddy hugs 🧸",
    "Cats and butterflies for you 🐱🦋",
    "Okay fine… last chance 💖"
];

/**
 * Hook managing the sequence of 7 popup messages triggered by No button clicks.
 * Ensures only one popup is visible at a time with 1500ms auto-dismiss.
 */
export function useNoClickPopups() {
    const [currentPopup, setCurrentPopup] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const showPopup = useCallback((index: number) => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Show the popup for this index
        if (index >= 0 && index < POPUP_MESSAGES.length) {
            setCurrentPopup(POPUP_MESSAGES[index]);

            // Auto-dismiss after 1500ms
            timeoutRef.current = setTimeout(() => {
                setCurrentPopup(null);
                timeoutRef.current = null;
            }, 1500);
        }
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return {
        currentPopup,
        showPopup
    };
}
