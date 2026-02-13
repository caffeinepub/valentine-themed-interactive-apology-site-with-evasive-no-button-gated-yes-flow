import { useEffect, useState } from 'react';

interface RomanticPhotoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Romantic photo modal displaying the uploaded couple photo.
 * Features blurred backdrop, rounded corners, soft shadow, and mobile-safe scaling.
 */
export function RomanticPhotoModal({ isOpen, onClose }: RomanticPhotoModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Delay to trigger animation
            setTimeout(() => setIsVisible(true), 10);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className={`
                fixed inset-0 z-40 
                flex items-center justify-center 
                p-4 sm:p-8
                modal-backdrop
                transition-opacity duration-300
                ${isVisible ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={onClose}
        >
            <div
                className={`
                    relative max-w-4xl max-h-[85vh] w-full
                    bg-card rounded-3xl shadow-romantic-strong
                    overflow-hidden
                    transition-all duration-500
                    ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src="/assets/IMG_20221213_093702.jpg"
                    alt="Akash and Fili"
                    className="w-full h-full object-contain"
                />
                
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="
                        absolute top-4 right-4 
                        w-10 h-10 
                        bg-primary/80 hover:bg-primary 
                        text-primary-foreground 
                        rounded-full 
                        flex items-center justify-center
                        transition-all duration-200
                        button-scale
                    "
                    aria-label="Close"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
