/**
 * Apology letter component displaying the personalized romantic message from Akash to Fili.
 * Features centered layout, responsive typography, and smooth fade-in animation.
 */
export function ApologyLetter() {
    return (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-6 sm:p-8 pointer-events-none overflow-y-auto">
            <div className="
                max-w-2xl w-full 
                bg-card/95 backdrop-blur-sm
                rounded-3xl shadow-romantic-strong
                p-6 sm:p-10 md:p-12
                fade-in
                pointer-events-auto
                my-auto
            ">
                <div className="space-y-4 text-foreground leading-relaxed">
                    <p className="text-2xl sm:text-3xl font-bold text-center mb-6">
                        Fili…
                    </p>

                    <p className="text-base sm:text-lg">
                        I'm truly sorry.<br />
                        Sorry for being rude, for raising my voice, for the harsh words I used.<br />
                        I'm sorry for every single thing that hurt you.<br />
                        I'm honestly ashamed of my behavior, and you didn't deserve any of it.
                    </p>

                    <p className="text-base sm:text-lg">
                        But please believe me when I say this —<br />
                        the time I spent with you has been one of the most beautiful chapters of my life.<br />
                        Every moment with you meant more to me than I could ever express.
                    </p>

                    <p className="text-base sm:text-lg">
                        You are, without a doubt, one of the most beautiful girls in this world —<br />
                        not just by looks, but by heart, by soul,<br />
                        by the way you make everything brighter. ✨
                    </p>

                    <p className="text-base sm:text-lg">
                        Please don't ever blame yourself.<br />
                        None of this was your fault.<br />
                        If there was a mistake, it was mine.
                    </p>

                    <p className="text-xl sm:text-2xl font-semibold text-center mt-8">
                        With love,<br />
                        Akash 🤍
                    </p>
                </div>
            </div>
        </div>
    );
}
