registerCustomPetPlugin({
    css: `
#pet.pet-custom.observer-orb {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 34% 26%, rgba(255,255,255,0.98) 0 7%, rgba(255,255,255,0) 18%),
        radial-gradient(circle at 50% 56%, #8cf7ff 0 16%, #1da8c6 34%, #083041 62%, #02070c 100%);
    box-shadow:
        inset 0 -24px 34px rgba(0,0,0,0.48),
        inset 0 12px 22px rgba(255,255,255,0.28),
        0 0 24px rgba(98,234,255,0.46),
        0 12px 30px rgba(0,0,0,0.32);
    transform-origin: 50% 62%;
    animation: observerBodyFloat 5.4s ease-in-out infinite;
}
#pet.pet-custom.observer-orb::before,
#pet.pet-custom.observer-orb::after,
#pet.pet-custom.observer-orb .eye,
#pet.pet-custom.observer-orb .whiskers,
#pet.pet-custom.observer-orb .nose,
#pet.pet-custom.observer-orb .zzz {
    display: none !important;
}
#pet.pet-custom.observer-orb .observer-shell {
    position: absolute;
    inset: 13px;
    border-radius: 50%;
    border: 1px solid rgba(189,252,255,0.45);
    box-shadow: inset 0 0 18px rgba(175,250,255,0.23);
    animation: observerShellBreathe 3.8s ease-in-out infinite;
}
#pet.pet-custom.observer-orb .observer-lid {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 118px;
    height: 76px;
    border-radius: 56% 56% 48% 48%;
    transform: translate(-50%, -46%);
    background: linear-gradient(180deg, rgba(233,255,255,0.96), rgba(65,171,190,0.88) 46%, rgba(2,12,20,0.94) 100%);
    box-shadow: inset 0 10px 12px rgba(255,255,255,0.34), inset 0 -16px 18px rgba(0,0,0,0.46);
    overflow: hidden;
}
#pet.pet-custom.observer-orb .observer-eye {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    transform: translate3d(-50%, -50%, 0);
    background:
        radial-gradient(circle at 36% 32%, #ffffff 0 8%, rgba(255,255,255,0) 19%),
        radial-gradient(circle, #dbffff 0 17%, #39e6ff 22%, #051119 47%, #000 100%);
    box-shadow: 0 0 14px rgba(80,235,255,0.9), inset 0 0 9px rgba(255,255,255,0.5);
    transition: transform 110ms ease-out, filter 160ms ease, opacity 160ms ease;
}
#pet.pet-custom.observer-orb .observer-ring {
    position: absolute;
    inset: 35px;
    border-radius: 50%;
    border: 1px dashed rgba(174,252,255,0.38);
    animation: observerRing 13s linear infinite;
}
#pet.pet-custom.observer-orb .observer-scan {
    position: absolute;
    left: 24%;
    right: 24%;
    top: 49%;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(225,255,255,0.96), transparent);
    opacity: 0;
    transform: scaleX(0.72);
}
#pet.pet-custom.observer-orb.state-searching .observer-scan {
    opacity: 1;
    animation: observerScan 0.95s ease-in-out infinite;
}
#pet.pet-custom.observer-orb.state-thinking .observer-ring {
    border-style: solid;
    animation-duration: 3.2s;
}
#pet.pet-custom.observer-orb.state-alert_unknown_person,
#pet.pet-custom.observer-orb.state-defensive_mode {
    filter: hue-rotate(136deg) saturate(1.45) contrast(1.08);
    animation: observerFreeze 1.4s steps(2,end) infinite;
}
#pet.pet-custom.observer-orb.state-sleep {
    opacity: 0.64;
    filter: saturate(0.58) brightness(0.8);
}
#pet.pet-custom.observer-orb.is-speaking .observer-shell {
    animation: observerTalk 0.46s ease-in-out infinite;
}
#pet.pet-custom.observer-orb.event-gesture .observer-eye { animation: observerGesture 0.5s ease-in-out 2; }
#pet.pet-custom.observer-orb.event-vision .observer-lid { animation: observerVision 0.52s ease-in-out 2; }
#pet.pet-custom.observer-orb.event-system-throttle { filter: saturate(0.52) brightness(0.72); }
#pet.pet-custom.observer-orb.event-system-recover .observer-shell { animation: observerRecover 0.8s ease-out 1; }
#pet.pet-custom.observer-orb.event-social-owner_with_guest .observer-ring { animation-duration: 4s; }
#pet.pet-custom.observer-orb.event-social-owner_with_known_and_unknown .observer-ring { animation: observerSplit 0.7s ease-in-out 2; }
#pet.pet-custom.observer-orb.event-social-middle_finger .observer-eye { animation: observerThreat 0.2s steps(2,end) 10; filter: hue-rotate(-28deg) brightness(1.18); }
#pet.pet-custom.observer-orb.event-social-no_person { opacity: 0.72; }
#pet.pet-custom.observer-orb.event-social-unknown_person .observer-shell { animation: observerThreat 0.24s steps(2,end) 8; }
#pet.pet-custom.observer-orb.event-state-awake .observer-eye { animation: observerWake 0.38s ease-out 1; }
#pet.pet-custom.observer-orb.event-state-sleep .observer-shell { animation: observerSleep 0.65s ease-in 1; }
#pet.pet-custom.observer-orb.event-state-thinking .observer-ring { animation-duration: 2.2s; }
#pet.pet-custom.observer-orb.event-state-searching .observer-scan { opacity: 1; animation: observerScan 0.95s ease-in-out 2; }
#pet.pet-custom.observer-orb.event-state-focus_active .observer-eye { filter: brightness(1.22); }
#pet.pet-custom.observer-orb.event-state-focus_lost .observer-eye { filter: brightness(0.72); }
#pet.pet-custom.observer-orb.event-state-alert_unknown_person .observer-shell { animation: observerThreat 0.24s steps(2,end) 8; }
@keyframes observerBodyFloat { 0%,100% { transform: translateY(0) rotate(-0.6deg); } 50% { transform: translateY(-8px) rotate(0.7deg); } }
@keyframes observerShellBreathe { 0%,100% { transform: scale(0.985); opacity: 0.64; } 50% { transform: scale(1.025); opacity: 1; } }
@keyframes observerRing { to { transform: rotate(360deg); } }
@keyframes observerScan { 0%,100% { transform: translateY(-22px) scaleX(0.62); opacity: 0; } 45% { opacity: 1; } 50% { transform: translateY(22px) scaleX(1); } }
@keyframes observerFreeze { 0%,100% { transform: translateY(-3px) scale(1.015); } 50% { transform: translateY(-3px) scale(1.015); } }
@keyframes observerTalk { 0%,100% { transform: scale(0.99); } 50% { transform: scale(1.03); } }
@keyframes observerGesture { 0%,100% { transform: translate3d(-50%, -50%, 0); } 50% { transform: translate3d(-50%, -55%, 0) scale(1.06); } }
@keyframes observerVision { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.26); } }
@keyframes observerThreat { 50% { opacity: 0.32; } }
@keyframes observerSplit { 0%,100% { transform: rotate(0deg); } 50% { transform: rotate(7deg); } }
@keyframes observerWake { 0% { transform: translate3d(-50%, -50%, 0) scale(0.88); } 100% { transform: translate3d(-50%, -50%, 0) scale(1); } }
@keyframes observerSleep { 0% { opacity: 1; } 100% { opacity: 0.62; } }
@keyframes observerRecover { 0%,100% { opacity: 0.64; } 50% { opacity: 1; } }
`,
    render() {
        return `
<div class="observer-shell"></div>
<div class="observer-ring"></div>
<div class="observer-lid"><div class="observer-eye" id="observer-eye"></div></div>
<div class="observer-scan"></div>`;
    },
    onMount({petElement}) {
        petElement.classList.add('observer-orb');
    },
    onUnmount({petElement}) {
        petElement.classList.remove('observer-orb');
    },
    onPointer({dx, dy, rootElement}) {
        const eye = rootElement?.querySelector('#observer-eye');
        if (!eye) return;
        eye.style.transform = `translate3d(calc(-50% + ${dx * 0.95}px), calc(-50% + ${dy * 0.72}px), 0)`;
    },
    onBlink({rootElement}) {
        const eye = rootElement?.querySelector('#observer-eye');
        if (!eye) return;
        eye.style.transform += ' scaleY(0.08)';
        window.setTimeout(() => {
            eye.style.transform = eye.style.transform.replace(' scaleY(0.08)', '');
        }, 120);
    },
    onAnimationChange({normalizedState, petElement}) {
        petElement.className = petElement.className.replace(/state-[^\s]+/g, '').trim();
        petElement.classList.add(`state-${normalizedState || 'idle'}`);
        this._pulseClass(petElement, `event-state-${normalizedState || 'idle'}`, 760);
    },
    _pulseClass(petElement, className, duration = 900) {
        petElement.classList.add(className);
        window.setTimeout(() => petElement.classList.remove(className), duration);
    },
    onSleep({petElement}) {
        this._pulseClass(petElement, 'event-state-sleep', 900);
    },
    onAwake({petElement}) {
        this._pulseClass(petElement, 'event-state-awake', 760);
    },
    onThinkingStart({petElement}) {
        this._pulseClass(petElement, 'event-state-thinking', 820);
    },
    onThinkingStop({petElement}) {
        this._pulseClass(petElement, 'event-state-focus_active', 620);
    },
    onSocialEvent({petElement, type}) {
        const social = String(type || '').toUpperCase();
        if (social === 'UNKNOWN_PERSON') this._pulseClass(petElement, 'event-social-unknown_person', 2200);
        else if (social === 'OWNER_WITH_GUEST') this._pulseClass(petElement, 'event-social-owner_with_guest', 1200);
        else if (social === 'OWNER_WITH_KNOWN_AND_UNKNOWN') this._pulseClass(petElement, 'event-social-owner_with_known_and_unknown', 1200);
        else if (social === 'MIDDLE_FINGER') this._pulseClass(petElement, 'event-social-middle_finger', 1400);
        else if (social === 'NO_PERSON') this._pulseClass(petElement, 'event-social-no_person', 1200);
    },
    onGesture({petElement}) {
        this._pulseClass(petElement, 'event-gesture', 900);
    },
    onVisionState({petElement}) {
        this._pulseClass(petElement, 'event-vision', 820);
    },
    onSystemState({petElement, throttled}) {
        const was = petElement.classList.contains('event-system-throttle');
        petElement.classList.toggle('event-system-throttle', !!throttled);
        if (was && !throttled) this._pulseClass(petElement, 'event-system-recover', 920);
    },
    onSpeechStart({petElement}) {
        petElement.classList.add('is-speaking');
    },
    onSpeechEnd({petElement}) {
        petElement.classList.remove('is-speaking');
        this._pulseClass(petElement, 'event-system-recover', 620);
    }
});
