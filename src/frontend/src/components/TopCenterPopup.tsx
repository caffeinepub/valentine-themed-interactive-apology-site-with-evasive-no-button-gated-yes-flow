import { useEffect, useState } from 'react';

interface TopCenterPopupProps {
    message: string;
}

/**
 * Top-center popup toast component with soft pink styling and auto-dismiss.
 * Shows romantic messages during the No button clicking sequence.
 */
export function TopCenterPopup({ message }: TopCenterPopupProps) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Auto-dismiss after 1.5 seconds
        const timer = setTimeout(() => {
            setIsExiting(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, [message]);

    return (
        <div
            className={`
                fixed top-8 left-1/2 -translate-x-1/2 z-50
                px-6 py-4 
                bg-soft-pink/90 backdrop-blur-sm
                text-foreground text-lg sm:text-xl font-semibold
                rounded-2xl shadow-romantic
                max-w-[90vw] sm:max-w-md
                text-center
                ${isExiting ? 'popup-exit' : 'popup-enter'}
            `}
        >
            {message}
        </div>
    );
}
