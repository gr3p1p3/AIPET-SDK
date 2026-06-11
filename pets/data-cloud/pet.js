registerCustomPetPlugin({
    css: `
#pet.pet-custom.jarvis {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    animation: jarvisFloat 5.2s ease-in-out infinite;
}
#pet.pet-custom.jarvis .jarvis-cloud {
    position: absolute;
    inset: -12px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 35% 30%, rgba(116, 245, 255, 0.42), rgba(0, 0, 0, 0) 55%),
        radial-gradient(circle at 70% 70%, rgba(52, 178, 255, 0.24), rgba(0, 0, 0, 0) 60%);
    box-shadow:
        0 0 28px rgba(57, 223, 255, 0.58),
        inset 0 0 32px rgba(34, 149, 255, 0.34);
}
#pet.pet-custom.jarvis .jarvis-ring,
#pet.pet-custom.jarvis .jarvis-ring::before,
#pet.pet-custom.jarvis .jarvis-ring::after {
    position: absolute;
    inset: 16px;
    border-radius: 50%;
    border: 1px solid rgba(124, 230, 255, 0.55);
    content: '';
}
#pet.pet-custom.jarvis .jarvis-ring {
    animation: jarvisSpin 12s linear infinite;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
}
#pet.pet-custom.jarvis .jarvis-ring::before {
    inset: 10px;
    border-color: rgba(77, 178, 255, 0.62);
    animation: jarvisSpinReverse 8s linear infinite;
}
#pet.pet-custom.jarvis .jarvis-ring::after {
    inset: 24px;
    border-color: rgba(153, 246, 255, 0.5);
    animation: jarvisSpin 6s linear infinite;
}
#pet.pet-custom.jarvis .jarvis-core {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 72px;
    height: 72px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, rgba(236, 255, 255, 1), rgba(71, 197, 255, 0.55) 55%, rgba(0, 0, 0, 0) 75%);
    filter: drop-shadow(0 0 8px rgba(151, 245, 255, 0.95));
    transition: transform 100ms ease-out, filter 180ms ease;
}
#pet.pet-custom.jarvis .jarvis-particles {
    position: absolute;
    inset: 0;
}
#pet.pet-custom.jarvis .jarvis-p {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(150, 245, 255, 0.9);
    box-shadow: 0 0 8px rgba(150, 245, 255, 0.9);
    animation: jarvisPulse 2.1s ease-in-out infinite;
}
#pet.pet-custom.jarvis .jarvis-ring.jarvis-blink-ring {
    animation: jarvisBlinkRing 240ms cubic-bezier(0.22, 1, 0.36, 1) 1,
        jarvisSpin 2.8s linear 1;
}
#pet.pet-custom.jarvis .jarvis-p.jarvis-blink-particle {
    animation: jarvisBlinkParticle 220ms ease-out 1;
}
@keyframes jarvisSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes jarvisSpinReverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
@keyframes jarvisPulse { 0%,100% { opacity: .35; transform: scale(.8); } 50% { opacity: 1; transform: scale(1.25); } }
@keyframes jarvisBlinkRing {
    0% { transform: perspective(420px) scale(1) rotateY(0deg) rotate(0deg); filter: drop-shadow(0 0 0 rgba(170, 250, 255, 0)); }
    40% { transform: perspective(420px) scale(0.96) rotateY(calc(24deg * var(--jarvis-blink-dir, 1))) rotate(calc(7deg * var(--jarvis-blink-dir, 1))); filter: drop-shadow(0 0 12px rgba(220, 255, 255, 0.95)); }
    100% { transform: perspective(420px) scale(1.03) rotateY(calc(-10deg * var(--jarvis-blink-dir, 1))) rotate(calc(-3deg * var(--jarvis-blink-dir, 1))); filter: drop-shadow(0 0 0 rgba(170, 250, 255, 0)); }
}
@keyframes jarvisBlinkParticle {
    0% { opacity: 0.55; transform: scale(0.9); box-shadow: 0 0 8px rgba(150, 245, 255, 0.9); }
    50% { opacity: 1; transform: scale(1.9); box-shadow: 0 0 16px rgba(230, 255, 255, 1); }
    100% { opacity: 0.7; transform: scale(1.1); box-shadow: 0 0 10px rgba(170, 245, 255, 0.95); }
}
@keyframes jarvisFloat { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
#pet.pet-custom.jarvis.is-speaking .jarvis-core { animation: jarvisTalk 0.2s ease-in-out infinite; }
#pet.pet-custom.jarvis.event-gesture .jarvis-ring { animation-duration: 4s; }
#pet.pet-custom.jarvis.event-vision .jarvis-core { animation: jarvisVision 0.5s ease-in-out 2; }
#pet.pet-custom.jarvis.event-system-throttle { filter: saturate(0.45) brightness(0.74); opacity: 0.68; }
#pet.pet-custom.jarvis.event-system-recover .jarvis-cloud { animation: jarvisRecover 0.82s ease-out 1; }
#pet.pet-custom.jarvis.event-social-owner_with_guest { filter: hue-rotate(18deg) saturate(1.15); }
#pet.pet-custom.jarvis.event-social-owner_with_known_and_unknown .jarvis-ring { animation: jarvisSplit 0.68s ease-in-out 2; }
#pet.pet-custom.jarvis.event-social-middle_finger .jarvis-core { animation: jarvisThreat 0.18s steps(2,end) 8; filter: drop-shadow(0 0 14px rgba(255,166,77,0.95)) hue-rotate(-42deg); }
#pet.pet-custom.jarvis.event-social-no_person { opacity: 0.56; }
#pet.pet-custom.jarvis.event-social-unknown_person .jarvis-core { animation: jarvisThreat 0.22s steps(2,end) 10; }
#pet.pet-custom.jarvis.event-state-awake { animation: jarvisWake 0.38s ease-out 1; }
#pet.pet-custom.jarvis.event-state-sleep { animation: jarvisSleep 0.66s ease-in 1; }
#pet.pet-custom.jarvis.event-state-thinking .jarvis-core { animation: jarvisThink 0.54s ease-in-out 2; }
#pet.pet-custom.jarvis.event-state-searching .jarvis-ring { animation-duration: 3.2s; }
#pet.pet-custom.jarvis.event-state-focus_active { opacity: 1; }
#pet.pet-custom.jarvis.event-state-focus_lost { opacity: 0.72; }
#pet.pet-custom.jarvis.event-state-alert_unknown_person .jarvis-core { animation: jarvisThreat 0.22s steps(2,end) 10; }
@keyframes jarvisTalk { 0%,100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.12); } }
@keyframes jarvisVision { 0%,100% { filter: drop-shadow(0 0 8px rgba(151, 245, 255, 0.95)); } 50% { filter: drop-shadow(0 0 16px rgba(220,255,255,1)); } }
@keyframes jarvisRecover { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }
@keyframes jarvisSplit { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(8deg); } }
@keyframes jarvisThreat { 50% { filter: hue-rotate(140deg); } }
@keyframes jarvisWake { 0% { opacity: 0.72; } 100% { opacity: 1; } }
@keyframes jarvisSleep { 0% { opacity: 1; } 100% { opacity: 0.62; } }
@keyframes jarvisThink { 0%,100% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.09); } }
`,
    render() {
        return `
<div class="jarvis-cloud">
  <div class="jarvis-ring"></div>
  <div class="jarvis-core" id="jarvis-core"></div>
  <div class="jarvis-particles">
    <span class="jarvis-p" style="left:18%;top:26%;animation-delay:0s"></span>
    <span class="jarvis-p" style="left:72%;top:20%;animation-delay:.3s"></span>
    <span class="jarvis-p" style="left:82%;top:58%;animation-delay:.6s"></span>
    <span class="jarvis-p" style="left:24%;top:78%;animation-delay:.9s"></span>
    <span class="jarvis-p" style="left:56%;top:84%;animation-delay:1.2s"></span>
    <span class="jarvis-p" style="left:10%;top:52%;animation-delay:1.5s"></span>
  </div>
</div>`;
    },
    onMount({petElement}) {
        petElement.classList.add('jarvis');
    },
    onUnmount({petElement}) {
        petElement.classList.remove('jarvis');
    },
    onPointer({dx, dy, rootElement}) {
        const core = rootElement?.querySelector('#jarvis-core');
        if (!core) return;
        core.style.transform = `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy * 1.1}px))`;
    },
    onBlink({rootElement}) {
        const ring = rootElement?.querySelector('.jarvis-ring');
        const particles = Array.from(rootElement?.querySelectorAll('.jarvis-p') || []);
        if (ring) {
            this._blinkDirection = this._blinkDirection === -1 ? 1 : -1;
            ring.style.setProperty('--jarvis-blink-dir', String(this._blinkDirection));
            ring.classList.remove('jarvis-blink-ring');
            void ring.offsetWidth;
            ring.classList.add('jarvis-blink-ring');
            window.setTimeout(() => ring.classList.remove('jarvis-blink-ring'), 260);
        }
        particles
            .sort(() => Math.random() - 0.5)
            .slice(0, 2)
            .forEach((particle, index) => {
                particle.classList.remove('jarvis-blink-particle');
                void particle.offsetWidth;
                window.setTimeout(() => {
                    particle.classList.add('jarvis-blink-particle');
                    window.setTimeout(() => particle.classList.remove('jarvis-blink-particle'), 240);
                }, index * 45);
            });
    },
    _pulseClass(petElement, className, duration = 900) {
        petElement.classList.add(className);
        window.setTimeout(() => petElement.classList.remove(className), duration);
    },
    onAnimationChange({normalizedState, petElement}) {
        petElement.className = petElement.className.replace(/state-[^\s]+/g, '').trim();
        petElement.classList.add(`state-${normalizedState || 'idle'}`);
        this._pulseClass(petElement, `event-state-${normalizedState || 'idle'}`, 760);
    },
    onThinkingStart({petElement, rootElement}) {
        this._pulseClass(petElement, 'event-state-thinking', 860);
        const core = rootElement?.querySelector('#jarvis-core');
        if (!core) return;
        core.style.filter = 'drop-shadow(0 0 16px rgba(180,250,255,1)) hue-rotate(40deg)';
        core.style.transform += ' scale(1.08)';
    },
    onThinkingStop({petElement, rootElement}) {
        this._pulseClass(petElement, 'event-state-focus_active', 620);
        const core = rootElement?.querySelector('#jarvis-core');
        if (!core) return;
        core.style.filter = 'drop-shadow(0 0 8px rgba(151, 245, 255, 0.95))';
    },
    onSleep({petElement}) {
        this._pulseClass(petElement, 'event-state-sleep', 900);
        petElement.style.opacity = '0.62';
        petElement.style.filter = 'saturate(0.6)';
    },
    onAwake({petElement}) {
        this._pulseClass(petElement, 'event-state-awake', 760);
        petElement.style.opacity = '1';
        petElement.style.filter = '';
    },
    onSocialEvent({petElement, type}) {
        const social = String(type || '').toUpperCase();
        if (social === 'UNKNOWN_PERSON') this._pulseClass(petElement, 'event-social-unknown_person', 2200);
        else if (social === 'OWNER_WITH_GUEST') this._pulseClass(petElement, 'event-social-owner_with_guest', 1200);
        else if (social === 'OWNER_WITH_KNOWN_AND_UNKNOWN') this._pulseClass(petElement, 'event-social-owner_with_known_and_unknown', 1200);
        else if (social === 'MIDDLE_FINGER') this._pulseClass(petElement, 'event-social-middle_finger', 1400);
        else if (social === 'NO_PERSON') this._pulseClass(petElement, 'event-social-no_person', 1200);
    },
    onGesture({petElement}) { this._pulseClass(petElement, 'event-gesture', 900); },
    onVisionState({petElement}) { this._pulseClass(petElement, 'event-vision', 820); },
    onSystemState({petElement, throttled}) {
        const was = petElement.classList.contains('event-system-throttle');
        petElement.classList.toggle('event-system-throttle', !!throttled);
        if (was && !throttled) this._pulseClass(petElement, 'event-system-recover', 920);
    },
    onSpeechStart({petElement}) { petElement.classList.add('is-speaking'); },
    onSpeechEnd({petElement}) {
        petElement.classList.remove('is-speaking');
        this._pulseClass(petElement, 'event-system-recover', 620);
    }
});
