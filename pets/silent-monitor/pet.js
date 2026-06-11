registerCustomPetPlugin({
    css: `
#pet.pet-custom.silent-monitor {
    width: 208px;
    height: 208px;
    border-radius: 18px;
    background:
        linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0) 28%),
        linear-gradient(145deg, #272c2d, #101416 72%, #07090a);
    box-shadow:
        inset 0 0 0 1px rgba(235,255,246,0.1),
        inset 0 -18px 24px rgba(0,0,0,0.5),
        0 12px 30px rgba(0,0,0,0.38);
}
#pet.pet-custom.silent-monitor::before,
#pet.pet-custom.silent-monitor::after,
#pet.pet-custom.silent-monitor .eye,
#pet.pet-custom.silent-monitor .whiskers,
#pet.pet-custom.silent-monitor .nose,
#pet.pet-custom.silent-monitor .zzz {
    display: none !important;
}
#pet.pet-custom.silent-monitor .m-bezel {
    position: absolute;
    inset: 18px;
    border-radius: 12px;
    background: linear-gradient(180deg, #111617, #050707);
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 10px 18px rgba(255,255,255,0.05);
}
#pet.pet-custom.silent-monitor .m-eye {
    position: absolute;
    left: 50%;
    top: 48%;
    width: 74px;
    height: 74px;
    margin: -37px 0 0 -37px;
    border-radius: 50%;
    background:
        radial-gradient(circle at 38% 34%, #ffffff 0 8%, transparent 19%),
        radial-gradient(circle, #dffdf5 0 16%, #7faeaa 24%, #07100f 58%, #000 100%);
    box-shadow: 0 0 8px rgba(179,255,239,0.28), inset 0 0 18px rgba(255,255,255,0.12);
    transition: transform 420ms ease-out, opacity 240ms linear, filter 180ms ease;
}
#pet.pet-custom.silent-monitor .m-line {
    position: absolute;
    left: 34px;
    right: 34px;
    bottom: 38px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(202,255,238,0.28), transparent);
    opacity: 0.45;
}
#pet.pet-custom.silent-monitor .m-dot {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #baffdb;
    opacity: 0.35;
    box-shadow: 0 0 8px rgba(186,255,219,0.36);
}
#pet.pet-custom.silent-monitor.state-alert_unknown_person .m-eye {
    filter: hue-rotate(145deg) saturate(1.5);
    box-shadow: 0 0 16px rgba(255,78,78,0.5), inset 0 0 18px rgba(255,255,255,0.12);
}
#pet.pet-custom.silent-monitor.state-alert_unknown_person .m-dot {
    background: #ff5f5f;
    opacity: 1;
    animation: monitorDot 0.8s steps(2,end) infinite;
}
#pet.pet-custom.silent-monitor.state-searching .m-eye {
    animation: monitorStare 1.4s ease-in-out infinite;
}
#pet.pet-custom.silent-monitor.state-sleep .m-eye {
    opacity: 0.32;
    transform: scaleY(0.18);
}
#pet.pet-custom.silent-monitor.is-speaking .m-line { animation: monitorTalk 0.2s linear infinite; }
#pet.pet-custom.silent-monitor.event-gesture .m-dot { animation: monitorDot 0.3s steps(2,end) 6; }
#pet.pet-custom.silent-monitor.event-vision .m-eye { animation: monitorVision 0.5s ease-in-out 2; }
#pet.pet-custom.silent-monitor.event-system-throttle { filter: grayscale(0.35) brightness(0.7); }
#pet.pet-custom.silent-monitor.event-system-recover .m-line { animation: monitorRecover 0.8s ease-out 1; }
#pet.pet-custom.silent-monitor.event-social-owner_with_guest .m-dot { background: #7fffd4; opacity: 0.92; }
#pet.pet-custom.silent-monitor.event-social-owner_with_known_and_unknown .m-eye { filter: hue-rotate(42deg); }
#pet.pet-custom.silent-monitor.event-social-middle_finger .m-dot { background: #ffb36b; opacity: 1; animation: monitorThreat 0.18s steps(2,end) 8; }
#pet.pet-custom.silent-monitor.event-social-middle_finger .m-line { opacity: 0.88; }
#pet.pet-custom.silent-monitor.event-social-no_person .m-eye { opacity: 0.42; }
#pet.pet-custom.silent-monitor.event-social-unknown_person .m-dot { animation: monitorThreat 0.2s steps(2,end) 10; }
#pet.pet-custom.silent-monitor.event-state-awake .m-eye { animation: monitorWake 0.38s ease-out 1; }
#pet.pet-custom.silent-monitor.event-state-sleep .m-eye { animation: monitorSleep 0.66s ease-in 1; }
#pet.pet-custom.silent-monitor.event-state-thinking .m-eye { animation: monitorThink 0.5s ease-in-out 2; }
#pet.pet-custom.silent-monitor.event-state-searching .m-eye { animation: monitorStare 0.9s ease-in-out 2; }
#pet.pet-custom.silent-monitor.event-state-focus_active .m-line { opacity: 0.62; }
#pet.pet-custom.silent-monitor.event-state-focus_lost .m-line { opacity: 0.22; }
#pet.pet-custom.silent-monitor.event-state-alert_unknown_person .m-dot { animation: monitorThreat 0.2s steps(2,end) 10; }
@keyframes monitorDot { 50% { opacity: 0.2; } }
@keyframes monitorStare { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.22); } }
@keyframes monitorTalk { 0%,100% { opacity: 0.45; } 50% { opacity: 1; } }
@keyframes monitorVision { 0%,100% { transform: scale(1); } 50% { transform: scale(1.12); } }
@keyframes monitorThreat { 50% { transform: scale(1.5); opacity: 1; } }
@keyframes monitorWake { 0% { transform: scale(0.9); } 100% { transform: scale(1); } }
@keyframes monitorSleep { 0% { opacity: 1; } 100% { opacity: 0.32; } }
@keyframes monitorThink { 0%,100% { filter: brightness(1); } 50% { filter: brightness(1.26); } }
@keyframes monitorRecover { 0%,100% { opacity: 0.45; } 50% { opacity: 1; } }
`,
    render() {
        return `
<div class="m-bezel">
  <div id="monitor-eye" class="m-eye"></div>
  <span class="m-line"></span>
  <span class="m-dot"></span>
</div>`;
    },
    onMount({petElement}) {
        petElement.classList.add('silent-monitor');
    },
    onUnmount({petElement}) {
        petElement.classList.remove('silent-monitor');
    },
    onPointer({dx, dy, rootElement}) {
        const eye = rootElement?.querySelector('#monitor-eye');
        if (eye) {
            eye.style.transform = `translate3d(${dx * 0.09}px, ${dy * 0.07}px, 0)`;
        }
    },
    onBlink({rootElement}) {
        const eye = rootElement?.querySelector('#monitor-eye');
        if (!eye) return;
        eye.style.transform += ' scaleY(0.16)';
        window.setTimeout(() => {
            eye.style.transform = eye.style.transform.replace(' scaleY(0.16)', '');
        }, 190);
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
