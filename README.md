# AIPET-SDK

AIPET-SDK is the public starter kit for building custom, context-aware PET plugins for **[AIPET](https://getaipet.com)**.

This repository serves a dual purpose:
- **Framework & Lifecycle:** It introduces the AIPET plugin system and state machine in a clean, reusable way.
- **Reference Personalities:** It provides a curated collection of existing PET personalities that creators can study, copy, and evolve.

An AIPET plugin is much more than a visual skin. Each PET has its own mood, presence, and a unique way of reacting to physical space (vision), speech, device telemetry, user gestures, and silence.

---

## 🚀 Quick Start

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/your-username/AIPET-SDK.git](https://github.com/your-username/AIPET-SDK.git)
   cd AIPET-SDK

```

2. **Explore existing PETs:** Look into the `pets/` folder to understand how behaviors are structured.
3. **Open the Debugger:** Go to the [AIPET SDK Debugger](https://getaipet.com/sdk/debugger) to load, test, and preview your custom scripts in real-time.

---

## 📦 Repository Structure

```text
AIPET-SDK/
 ├── README.md
 └── pets/
      ├── README.md
      ├── observer-orb/
      │    ├── README.md
      │    └── pet.js       # Expressive, heavy-vision orb pet
      ├── silent-monitor/
      │    ├── README.md
      │    └── pet.js       # Text/data heavy minimalist monitor
      ├── digital-ghost/
      │    ├── README.md
      │    └── pet.js       # Glitchy, highly reactive particle pet
      └── data-cloud/
           ├── README.md
           └── pet.js       # System telemetry tracking cloud

```

---

## 🛠️ PET Plugin Architecture

Every plugin registers itself globally via `registerCustomPetPlugin()`. Below is a baseline blueprint of a custom PET:

```javascript
registerCustomPetPlugin({
  // 1. Inject your scoped styling
  css: `
    #pet.pet-custom.my-pet {
      transition: all 0.3s ease;
    }
    .my-pet-eye {
      background: cyan;
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  `,

  // 2. Render the DOM markup
  render() {
    return `
      <div id="my-pet-root">
        <div class="my-pet-eye"></div>
      </div>
    `;
  },

  // 3. Lifecycle hooks
  onMount({ petElement, rootElement }) {
    petElement.classList.add("my-pet");
    console.log("My custom PET is alive!");
  },

  onUnmount({ petElement }) {
    petElement.classList.remove("my-pet");
  }
});

```

---

## 🔄 Core Hooks & Lifecycle

### Lifecycle & Animation

* `onMount(hookContext)`: Triggered when the PET is injected into the DOM. Ideal for setting up local tracking or intervals.
* `onUnmount(hookContext)`: Triggered when switching PETs or closing. **Always clean up** classes, event listeners, and timers here.
* `onAnimationChange(hookContext)`: Fires when the visual animation state machine switches loops.

### Physical Motion & Interactivity

* `onPointer(hookContext)`: Pointer coordinate updates over the PET window.
* `onBlink(hookContext)`: Periodic triggers for natural behavior rhythms.
* `onSleep(hookContext)` / `onAwake(hookContext)`: Transition responses when entering/leaving sleep cycles.
* `onThinkingStart(hookContext)` / `onThinkingStop(hookContext)`: Triggered when AIPET's underlying AI engine is processing data or generating text.

### Advanced Sensor & Runtime Events

* `onSocialEvent({ type, context, ...hookContext })`
* `onGesture({ name, score, ...hookContext })`
* `onVisionState({ person, faces, objects, gesture, ...hookContext })`
* `onSystemState({ cpuLoad, memoryLoad, thermalLevel, throttled, battery, reasons, ...hookContext })`
* `onSpeechStart(hookContext)` / `onSpeechEnd(hookContext)`

---

## 🧠 State Engine

Your PET must visually or behaviorally account for the following **Normalized States**:

| State | Context / Description |
| --- | --- |
| `idle` | The default standard state. Breathing/waiting. |
| `awake` | Reacting to the user presence or interaction. |
| `sleep` | Low-power state, resting. |
| `thinking` | Undergoing heavy processing (e.g., generating LLM responses). |
| `searching` | Actively looking for a face, target, or user input. |
| `alert_unknown_person` | Security/Attention alert when an unrecognized profile is detected. |
| `focus_active` | Locked onto the active user session or specific screen region. |
| `focus_lost` | User turned away or backgrounded the interaction. |

### Extended States (Optional)

For highly dynamic personalities, you can also listen to:

* `curiosity_peak` (Sudden object/movement discovery)
* `emotional_response` (Reacting to sentiment or voice tone)
* `defensive_mode` (Reacting to specific negative social events or critical system throttling)

---

## 🔌 Hook Context & Event Payloads

### Common Hook Context

Every lifecycle hook receives a `hookContext` object containing reference points and engine status:

* `petElement`: The root DOM node of AIPET.
* `rootElement`: The custom DOM node you returned in `render()`.
* `behaviorController`: Utility tracking inactivity thresholds and pointer velocity.
* `currentState`: The single source of truth for the active state (maps to `states`).

*Motion Analytics:* `xNormalized`, `yNormalized` (0 to 1 position vectors) and `dx`, `dy` (delta directional movement vectors).

### Rich Event Payloads Examples

#### `onVisionState`

Fires when the environment camera processing engine catches situational updates.

```javascript
onVisionState({ person, faces, objects, gesture, rootElement }) {
  // Check if a face is present and looking at the PET
  if (faces && faces.length > 0) {
    rootElement.querySelector('.my-pet-eye').style.transform = 'scale(1.2)';
  }
}

```

#### `onSocialEvent`

Abstract social telemetry interpreted by the AI context processor.

* **Common values for `type`:** `UNKNOWN_PERSON`, `OWNER_WITH_GUEST`, `OWNER_WITH_KNOWN_AND_UNKNOWN`, `NO_PERSON`, `NAIL_BITING`, `MIDDLE_FINGER`.

#### `onSystemState`

Real hardware telemetry from the host environment.

* **Payload fields:** `cpuLoad` *(float)*, `memoryLoad` *(float)*, `thermalLevel` *('nominal'|'fair'|'serious'|'critical')*, `throttled` *(boolean)*, `battery` *({ level, isCharging })*.

---

## 🎨 Recommended Authoring Style

1. **CSS Over JavaScript:** Rely heavily on CSS variables and transitions triggered by class switching inside your hooks rather than doing continuous JavaScript layout calculations. It saves battery and hardware resources.
2. **Make it Context-Aware:** Don't just make a looping GIF. Make the PET shy (shrinks on `UNKNOWN_PERSON`), hyperactive (pulses fast when `cpuLoad` is high), or sleepy.
3. **Garbage Collection:** Ensure absolutely zero side effects remain in `onUnmount`. Clear any custom `setInterval` or `window` listeners you spawn.

---

## 🤝 Contributing & Community

Built an amazing PET personality? Share it with the community!

1. Fork the repo.
2. Create a subfolder inside `pets/your-pet-name/` containing your `pet.js` and an expressive `README.md`.
3. Submit a Pull Request.


---
