registerCustomPetPlugin({
    css: `
#pet.pet-custom.digital-ghost {
    width: 212px;
    height: 212px;
    border-radius: 50% 50% 45% 45%;
    background:
        radial-gradient(circle at 34% 25%, rgba(255,255,255,0.88) 0 7%, transparent 20%),
        radial-gradient(circle at 50% 48%, rgba(226,255,255,0.74), rgba(84,205,222,0.24) 48%, rgba(14,26,42,0.04) 100%);
    box-shadow:
        inset 0 12px 18px rgba(255,255,255,0.18),
        inset 0 -18px 28px rgba(23,55,74,0.2),
        0 0 26px rgba(100,236,255,0.2);
    opacity: 0.86;
    filter: saturate(0.96);
    transform-origin: 50% 72%;
    animation: ghostFloat 4.6s ease-in-out infinite;
}
#pet.pet-custom.digital-ghost::before,
#pet.pet-custom.digital-ghost::after,
#pet.pet-custom.digital-ghost .eye,
#pet.pet-custom.digital-ghost .whiskers,
#pet.pet-custom.digital-ghost .nose,
#pet.pet-custom.digital-ghost .zzz {
    display: none !important;
}
#pet.pet-custom.digital-ghost .gh-copy,
#pet.pet-custom.digital-ghost .gh-face {
    position: absolute;
    inset: 18px;
    border-radius: 50% 50% 44% 44%;
}
#pet.pet-custom.digital-ghost .gh-copy {
    border: 1px solid rgba(206,255,255,0.24);
    opacity: 0.46;
    mix-blend-mode: screen;
}
#pet.pet-custom.digital-ghost .gh-copy.one { transform: translate(-4px, 2px); animation: ghostLayerA 2.8s ease-in-out infinite; }
#pet.pet-custom.digital-ghost .gh-copy.two { transform: translate(5px, -2px); animation: ghostLayerB 3.6s ease-in-out infinite; }
#pet.pet-custom.digital-ghost .gh-eye {
    position: absolute;
    top: 58px;
    width: 26px;
    height: 36px;
    border-radius: 50%;
    background: radial-gradient(circle at 42% 34%, #fff 0 12%, #0e2430 15% 100%);
    box-shadow: 0 0 13px rgba(190,255,255,0.68);
}
#pet.pet-custom.digital-ghost .gh-eye.left { left: 46px; }
#pet.pet-custom.digital-ghost .gh-eye.right { right: 46px; }
#pet.pet-custom.digital-ghost .gh-mouth {
    position: absolute;
    left: 50%;
    top: 108px;
    width: 38px;
    height: 18px;
    border-radius: 50%;
    transform: translateX(-50%);
    border-bottom: 4px solid rgba(20,55,68,0.46);
}
#pet.pet-custom.digital-ghost .gh-tail {
    position: absolute;
    left: 31px;
    right: 31px;
    bottom: 14px;
    height: 34px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(90deg, transparent 0 8%, rgba(226,255,255,0.28) 22%, transparent 38%, rgba(226,255,255,0.24) 56%, transparent 82%);
    animation: ghostTail 1.7s ease-in-out infinite;
}
#pet.pet-custom.digital-ghost.state-focus_lost {
    opacity: 0.48;
    filter: saturate(0.55) brightness(0.9);
}
#pet.pet-custom.digital-ghost.state-emotional_response,
#pet.pet-custom.digital-ghost.state-alert_unknown_person {
    opacity: 0.98;
    animation: ghostGlitch 0.35s steps(2,end) 6;
}
#pet.pet-custom.digital-ghost.state-alert_unknown_person .gh-copy {
    border-color: rgba(255,95,95,0.48);
    filter: hue-rotate(135deg);
}
#pet.pet-custom.digital-ghost.state-searching .gh-face {
    animation: ghostPeek 1.1s ease-in-out infinite;
}
#pet.pet-custom.digital-ghost.state-sleep {
    opacity: 0.38;
}
#pet.pet-custom.digital-ghost.is-speaking .gh-mouth { animation: ghostTalk 0.22s ease-in-out infinite; }
#pet.pet-custom.digital-ghost.event-gesture .gh-tail { animation: ghostGesture 0.5s ease-in-out 2; }
#pet.pet-custom.digital-ghost.event-vision .gh-eye { animation: ghostVision 0.5s ease-in-out 2; }
#pet.pet-custom.digital-ghost.event-system-throttle { opacity: 0.58; filter: saturate(0.52); }
#pet.pet-custom.digital-ghost.event-system-recover .gh-copy { animation: ghostRecover 0.8s ease-out 1; }
#pet.pet-custom.digital-ghost.event-social-owner_with_guest { filter: hue-rotate(28deg) saturate(1.16); }
#pet.pet-custom.digital-ghost.event-social-owner_with_known_and_unknown .gh-copy { animation: ghostLayerA 0.4s ease-in-out 6; }
#pet.pet-custom.digital-ghost.event-social-middle_finger .gh-copy { animation: ghostGlitch 0.18s steps(2,end) 8; opacity: 0.78; }
#pet.pet-custom.digital-ghost.event-social-middle_finger .gh-mouth { transform: translateX(-50%) scaleX(0.74); }
#pet.pet-custom.digital-ghost.event-social-no_person { opacity: 0.46; }
#pet.pet-custom.digital-ghost.event-social-unknown_person .gh-copy { animation: ghostGlitch 0.22s steps(2,end) 12; }
#pet.pet-custom.digital-ghost.event-state-awake { animation: ghostWake 0.42s ease-out 1; }
#pet.pet-custom.digital-ghost.event-state-sleep { animation: ghostSleep 0.66s ease-in 1; }
#pet.pet-custom.digital-ghost.event-state-thinking .gh-eye { animation: ghostThink 0.54s ease-in-out 2; }
#pet.pet-custom.digital-ghost.event-state-searching .gh-face { animation: ghostPeek 0.8s ease-in-out 3; }
#pet.pet-custom.digital-ghost.event-state-focus_active { opacity: 0.92; }
#pet.pet-custom.digital-ghost.event-state-focus_lost { opacity: 0.5; }
#pet.pet-custom.digital-ghost.event-state-alert_unknown_person .gh-copy { animation: ghostGlitch 0.22s steps(2,end) 10; }
@keyframes ghostFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
@keyframes ghostLayerA { 0%,100% { transform: translate(-5px, 2px); opacity: 0.34; } 50% { transform: translate(2px, -3px); opacity: 0.62; } }
@keyframes ghostLayerB { 0%,100% { transform: translate(5px, -2px); opacity: 0.28; } 50% { transform: translate(-3px, 3px); opacity: 0.55; } }
@keyframes ghostTail { 0%,100% { transform: skewX(-5deg); } 50% { transform: skewX(6deg); } }
@keyframes ghostGlitch { 0% { transform: translate(0,0); } 33% { transform: translate(4px,-1px); } 66% { transform: translate(-3px,2px); } 100% { transform: translate(1px,0); } }
@keyframes ghostPeek { 0%,100% { transform: translateX(-4px); } 50% { transform: translateX(5px); } }
@keyframes ghostTalk { 0%,100% { width: 38px; } 50% { width: 24px; } }
@keyframes ghostGesture { 0%,100% { transform: skewX(-5deg); } 50% { transform: skewX(12deg); } }
@keyframes ghostVision { 0%,100% { transform: scale(1); } 50% { transform: scale(1.16); } }
@keyframes ghostWake { 0% { opacity: 0.6; } 100% { opacity: 0.92; } }
@keyframes ghostSleep { 0% { opacity: 0.92; } 100% { opacity: 0.4; } }
@keyframes ghostThink { 0%,100% { transform: scaleY(1); } 50% { transform: scaleY(0.62); } }
@keyframes ghostRecover { 0%,100% { opacity: 0.3; } 50% { opacity: 0.7; } }
`,
    render() {
        return `
<div class="gh-copy one"></div>
<div class="gh-copy two"></div>
<div class="gh-face">
  <span class="gh-eye left"></span>
  <span class="gh-eye right"></span>
  <span class="gh-mouth"></span>
</div>
<span class="gh-tail"></span>`;
    },
    onMount({petElement}) {
        petElement.classList.add('digital-ghost');
    },
    onUnmount({petElement}) {
        petElement.classList.remove('digital-ghost');
    },
    onPointer({dx, dy, rootElement}) {
        const face = rootElement?.querySelector('.gh-face');
        if (face) {
            face.style.transform = `translate3d(${dx * 0.18}px, ${dy * 0.14}px, 0)`;
        }
    },
    onBlink({rootElement}) {
        rootElement?.querySelectorAll('.gh-eye').forEach((eye) => {
            eye.style.transform = 'scaleY(0.1)';
            window.setTimeout(() => { eye.style.transform = ''; }, 130);
        });
    },
    onAnimationChange({normalizedState, petElement, extendedStates, behaviorController}) {
        petElement.className = petElement.className.replace(/state-[^\s]+/g, '').trim();
        const h = new Date().getHours();
        const night = h >= 22 || h <= 5;
        const spooky = (night && behaviorController.getInactivityMs() > 10000) ? extendedStates.EMOTIONAL_RESPONSE : normalizedState;
        petElement.classList.add(`state-${spooky || 'idle'}`);
        this._pulseClass(petElement, `event-state-${normalizedState || 'idle'}`, 760);
    },
    _pulseClass(petElement, className, duration = 900) {
        petElement.classList.add(className);
        window.setTimeout(() => petElement.classList.remove(className), duration);
    },
    onSleep({petElement}) { this._pulseClass(petElement, 'event-state-sleep', 900); },
    onAwake({petElement}) { this._pulseClass(petElement, 'event-state-awake', 760); },
    onThinkingStart({petElement}) { this._pulseClass(petElement, 'event-state-thinking', 860); },
    onThinkingStop({petElement}) { this._pulseClass(petElement, 'event-state-focus_active', 620); },
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
