# Specification

## Summary
**Goal:** Create a single-page Valentine-themed interactive apology experience with an evasive “No 😢” flow, a gated “Yes 💕” reveal, music on consent, a romantic photo modal, an apology letter, and celebratory floating decorations.

**Planned changes:**
- Build a responsive, soft dreamy Valentine UI (blush/peach gradients, warm glow, subtle white accents, rounded elegant typography) with a gentle animated background (gradient and/or floating light particles).
- Implement the landing screen with the exact heading “Fili, will you be my Valentine? 💖” and two romantic buttons labeled exactly “Yes 💕” and “No 😢”, including glow + smooth hover/tap scale animations.
- Add strict “No 😢” behavior: on each click (until the 7th) move to a random in-viewport position using actual button dimensions and the provided maxX/maxY formula, and recompute safely on resize/orientation changes.
- Show exactly 7 sequential top-center popups (rounded, soft pink, soft shadow) with the provided messages; auto-dismiss after ~1.5s and ensure only one is visible at a time.
- After the 7th No click: stop moving the No button and reveal the “Yes 💕” button (initially hidden or minimized) via a smooth fade-in with slight glow.
- On “Yes 💕” click: start playing local `forever.mp3` (no autoplay), set moderate volume, keep playing in the background, and handle play failures silently.
- On “Yes 💕” click: open a centered modal showing `IMG_20221213_093702.jpg` with rounded corners, soft shadow, blurred backdrop, and scale-in animation; ensure proportional scaling with no viewport overflow on mobile.
- On “Yes 💕” click: fade in the provided apology letter text exactly (line breaks, punctuation, emojis), centered and readable on all screen sizes.
- Trigger celebratory floating decorations (💖 🦋 🐱 🍫 🧸 ✨ 🌹) that spawn gradually, float upward, fade out, and are removed from the DOM after animation.
- Ensure production-ready layering/z-index, no unwanted scrollbars, no console errors, no duplicate listeners, and clean organization with commented sections for major UI states/animations.

**User-visible outcome:** Visitors see a romantic Valentine prompt where “No 😢” playfully dodges with timed popups; after 7 tries, “Yes 💕” appears—clicking it starts music, shows the romantic photo in a modal, reveals the apology letter, and launches gentle celebratory floating effects.
