import { useState, useCallback } from 'react';
import { useEvasiveNoButton } from '../hooks/useEvasiveNoButton';
import { useNoClickPopups } from '../hooks/useNoClickPopups';
import { useYesClickAudio } from '../hooks/useYesClickAudio';
import { TopCenterPopup } from './TopCenterPopup';
import { RomanticPhotoModal } from './RomanticPhotoModal';
import { ApologyLetter } from './ApologyLetter';
import { CelebrationDecorationsLayer } from './CelebrationDecorationsLayer';

/**
 * Main Valentine apology experience component.
 * Orchestrates the interactive flow: landing screen, evasive No button, popups, Yes reveal, and celebration.
 */
export function ValentineApologyExperience() {
    const [noClickCount, setNoClickCount] = useState(0);
    const [yesClicked, setYesClicked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // Hooks for No button behavior and popups
    const { noButtonRef, noButtonStyle, repositionNoButton } = useEvasiveNoButton(noClickCount < 7);
    const { currentPopup, showPopup } = useNoClickPopups();
    const { playAudio } = useYesClickAudio();

    // Handle No button click
    const handleNoClick = useCallback(() => {
        if (noClickCount < 7) {
            const newCount = noClickCount + 1;
            setNoClickCount(newCount);
            showPopup(newCount - 1);
            
            if (newCount < 7) {
                repositionNoButton();
            }
        }
    }, [noClickCount, showPopup, repositionNoButton]);

    // Handle Yes button click
    const handleYesClick = useCallback(() => {
        setYesClicked(true);
        playAudio();
        setShowModal(true);
    }, [playAudio]);

    // Determine if Yes button should be visible
    const yesButtonVisible = noClickCount >= 7;

    return (
        <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
            {/* Top-center popup messages */}
            {currentPopup && <TopCenterPopup message={currentPopup} />}

            {/* Landing screen - heading and buttons */}
            {!yesClicked && (
                <div className="relative z-10 flex flex-col items-center justify-center gap-8 max-w-2xl mx-auto text-center">
                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground fade-in leading-tight px-4">
                        Fili, will you be my Valentine? 💖
                    </h1>

                    {/* Buttons container */}
                    <div className="relative w-full h-32 sm:h-40">
                        {/* Yes button - hidden until 7 No clicks */}
                        <button
                            onClick={handleYesClick}
                            disabled={!yesButtonVisible}
                            className={`
                                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                                px-8 sm:px-12 py-4 sm:py-5 
                                text-xl sm:text-2xl font-bold 
                                bg-primary text-primary-foreground 
                                rounded-3xl
                                button-scale romantic-glow-strong
                                transition-all duration-500
                                ${yesButtonVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}
                            `}
                            style={{
                                zIndex: yesButtonVisible ? 20 : 0
                            }}
                        >
                            Yes 💕
                        </button>

                        {/* No button - evasive until 7 clicks */}
                        <button
                            ref={noButtonRef}
                            onClick={handleNoClick}
                            className="
                                px-8 sm:px-12 py-4 sm:py-5 
                                text-xl sm:text-2xl font-bold 
                                bg-secondary text-secondary-foreground 
                                rounded-3xl
                                button-scale romantic-glow
                                transition-shadow duration-300
                            "
                            style={{
                                ...noButtonStyle,
                                zIndex: 10
                            }}
                        >
                            No 😢
                        </button>
                    </div>
                </div>
            )}

            {/* Post-Yes content */}
            {yesClicked && (
                <>
                    {/* Photo modal */}
                    {showModal && (
                        <RomanticPhotoModal 
                            isOpen={showModal} 
                            onClose={() => setShowModal(false)} 
                        />
                    )}

                    {/* Apology letter */}
                    <ApologyLetter />

                    {/* Celebration decorations */}
                    <CelebrationDecorationsLayer />
                </>
            )}
        </div>
    );
}
