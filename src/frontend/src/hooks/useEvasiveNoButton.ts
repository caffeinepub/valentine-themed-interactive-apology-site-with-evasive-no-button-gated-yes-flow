import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * Hook managing the evasive "No" button behavior.
 * Computes safe random positions within viewport bounds using the specified formula.
 * Ensures the button is always fully visible and clickable across all device sizes.
 */
export function useEvasiveNoButton(shouldMove: boolean) {
    const noButtonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

    const repositionNoButton = useCallback(() => {
        if (!noButtonRef.current || !shouldMove) return;

        const button = noButtonRef.current;
        const buttonRect = button.getBoundingClientRect();
        const margin = 20; // Safe margin from edges

        // Calculate safe bounds using the specified formula
        const maxX = window.innerWidth - buttonRect.width - margin;
        const maxY = window.innerHeight - buttonRect.height - margin;

        // Generate random position within safe bounds
        const newX = Math.max(margin, Math.random() * maxX);
        const newY = Math.max(margin, Math.random() * maxY);

        setPosition({ x: newX, y: newY });
    }, [shouldMove]);

    // Handle viewport resize/orientation changes
    useEffect(() => {
        if (!shouldMove) return;

        const handleResize = () => {
            // Revalidate position on resize
            if (position && noButtonRef.current) {
                const button = noButtonRef.current;
                const buttonRect = button.getBoundingClientRect();
                const margin = 20;

                const maxX = window.innerWidth - buttonRect.width - margin;
                const maxY = window.innerHeight - buttonRect.height - margin;

                // Clamp current position to new safe bounds
                const clampedX = Math.min(Math.max(margin, position.x), maxX);
                const clampedY = Math.min(Math.max(margin, position.y), maxY);

                if (clampedX !== position.x || clampedY !== position.y) {
                    setPosition({ x: clampedX, y: clampedY });
                }
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [position, shouldMove]);

    const noButtonStyle = position
        ? {
              position: 'fixed' as const,
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'none'
          }
        : {
              position: 'absolute' as const,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
          };

    return {
        noButtonRef,
        noButtonStyle,
        repositionNoButton
    };
}
