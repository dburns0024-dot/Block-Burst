⚡ BRICK BURST
==============

A neon block-placing puzzle game with 100 challenging levels. Fill rows and columns to burst them for points and progress through increasingly difficult stages.

🎮 Play Now
-----------

**Web:** [dburns0024-dot.github.io/Block-Burst](https://dburns0024-dot.github.io/Block-Burst/)

**Mobile:** Install as a PWA directly on your phone!
- **Android:** Open in Chrome → Menu → "Install app"
- **iOS:** Open in Safari → Share → "Add to Home Screen"

✨ Features
-----------

- **100 Levels** — All beatable with increasing difficulty
- **Neon Aesthetic** — Vibrant cyan, magenta, and yellow color scheme
- **Smooth Gameplay** — Touch and mouse support for desktop & mobile
- **Procedural Music** — AI-generated chord progressions with bass, melody, and hi-hats
- **Sound Effects** — Satisfying audio feedback for placements and bursts
- **Leaderboard** — Local scores saved to device storage
- **Offline Play** — Play anytime with PWA service worker caching

🎯 How to Play
--------------

1. **Drag pieces** from the bottom onto the 9×9 grid
2. **Green glow** = valid placement spot
3. **Fill a row or column** completely to burst it for points
4. **Reach the score target** to level up
5. **Don't run out of moves** — game over if no valid placements remain

**Score Formula:**
- Basic placement: 10 points per block
- Burst bonus: Cleared lines × Cleared lines × 100 × (1 + level/10)

🎮 Controls
-----------

| Action | Desktop | Mobile |
|--------|---------|--------|
| **Drag piece** | Click & drag | Touch & drag |
| **Place piece** | Release mouse | Release touch |
| **View leaderboard** | 🏆 button | 🏆 button |
| **Toggle music** | 🔊 button | 🔊 button |

🏗️ Technical Stack
------------------

- **Frontend:** Vanilla JavaScript (no frameworks)
- **Graphics:** HTML5 Canvas
- **Audio:** Web Audio API with procedural synthesis
- **Offline:** Service Worker for PWA caching
- **Storage:** LocalStorage for leaderboard persistence
- **Mobile:** Fully responsive, touch-optimized

📁 Project Structure
--------------------

```
Block-Burst/
├── BrickBurst.html      # Main game (HTML + CSS + JS)
├── manifest.json        # PWA configuration
├── sw.js               # Service Worker (offline support)
├── icon-192.png        # App icon (192×192)
├── icon-512.png        # App icon (512×512)
└── README.md           # This file
```

🎵 Audio Design
---------------

**Background Music:** Chord-based sequencer at 112 BPM
- **Scales:** Minor pentatonic (low, mid, high registers)
- **Progression:** i → vi → IV → v chord loop
- **Layers:** Bass line, strummed chords, melody arpeggios, hi-hat pattern

**Sound Effects:**
- 🔘 **Place** — Descending sine wave
- 💥 **Burst** — Boom + crackle + arpeggio sweep
- ❌ **Bad** — Low sawtooth buzz
- ⬆️ **Level Up** — Ascending note sequence

🌐 Browser Support
------------------

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Chrome/Firefox/Safari

❌ Internet Explorer not supported

📱 PWA Installation
-------------------

After visiting the game once, you can install it as a standalone app:

**Android:**
1. Open in Chrome
2. Tap the menu (⋮)
3. Select "Install app"
4. App appears on home screen

**iOS:**
1. Open in Safari
2. Tap Share
3. Select "Add to Home Screen"
4. Choose a name and add

The app works offline after installation thanks to the service worker!

🎨 Game Levels
--------------

| Level Range | Available Pieces | Difficulty |
|-------------|------------------|-----------|
| 1–8 | 9 basic shapes | Tutorial |
| 9–20 | 16 shapes | Intermediate |
| 21–40 | 22 shapes | Advanced |
| 41–100 | All 28 shapes | Expert |

🏆 Leaderboard
--------------

Your top 10 scores are saved locally on your device. Share your high scores with friends!

**Best scores appear with medals:**
- 🥇 #1 High Score
- 🥈 2nd Place
- 🥉 3rd Place

🐛 Known Issues
---------------

None currently! Report bugs via GitHub Issues.

🚀 Future Ideas
---------------

- [ ] Global leaderboard (backend integration)
- [ ] Daily challenges
- [ ] Custom themes
- [ ] Multiplayer mode
- [ ] Sound effect volume slider
- [ ] Pause feature

👨‍💻 About
---------

**Created by:** Gavin  
**Repository:** [github.com/dburns0024-dot/Block-Burst](https://github.com/dburns0024-dot/Block-Burst)  
**License:** MIT

---

**All 100 levels are beatable — can you conquer them all?** ⚡
