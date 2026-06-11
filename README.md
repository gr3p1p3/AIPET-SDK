# AIPET-SDK

AIPET-SDK is the public starter kit for building custom PET plugins for AIPET.

This repository is meant to do two things at once:

- introduce the PET plugin system in a clean, reusable way
- give creators a small cast of existing PET personalities they can study, copy, and evolve

Each PET is more than a visual skin. A PET has a mood, a presence, and a specific way of reacting to strangers, speech, focus, gestures, and silence.

## Included PETs

- [Observer Orb](./pets/observer-orb/README.md)
- [Silent Monitor](./pets/silent-monitor/README.md)
- [Digital Ghost](./pets/digital-ghost/README.md)
- [Data Cloud](./pets/data-cloud/README.md)

## Test Your PET

Use the AIPET SDK Debugger to render and test a plugin with its animation states and runtime reactions:

[https://getaipet.com/sdk/debugger](https://getaipet.com/sdk/debugger)

## Repository Structure

```text
AIPET-SDK/
  README.md
  pets/
    README.md
    observer-orb/
      README.md
      pet.js
    silent-monitor/
      README.md
      pet.js
    digital-ghost/
      README.md
      pet.js
    data-cloud/
      README.md
      pet.js
```

## PET Plugin Shape

Each plugin registers itself with:

```js
registerCustomPetPlugin({
  css: `#pet.pet-custom.my-pet {}`,
  render() {
    return `<div id="my-pet-root"></div>`;
  },
  onMount({ petElement }) {
    petElement.classList.add("my-pet");
  },
  onUnmount({ petElement }) {
    petElement.classList.remove("my-pet");
  }
});
```

## Core Hooks

Lifecycle:

- `onMount`
- `onUnmount`
- `onAnimationChange`

Motion and state:

- `onPointer`
- `onBlink`
- `onSleep`
- `onAwake`
- `onThinkingStart`
- `onThinkingStop`

Runtime events:

- `onSocialEvent({ type, context, ...hookContext })`
- `onGesture({ name, score, ...hookContext })`
- `onVisionState({ person, faces, objects, gesture, ...hookContext })`
- `onSystemState({ cpuLoad, memoryLoad, thermalLevel, throttled, battery, reasons, ...hookContext })`
- `onSpeechStart(hookContext)`
- `onSpeechEnd(hookContext)`

## Normalized States

Required:

- `idle`
- `awake`
- `sleep`
- `thinking`
- `searching`
- `alert_unknown_person`
- `focus_active`
- `focus_lost`

Extended:

- `curiosity_peak`
- `emotional_response`
- `defensive_mode`

## Hook Context

Common fields available in most hooks:

- `petElement`: the root PET node
- `rootElement`: the plugin root inside the PET
- `behaviorController`: helper for pointer and inactivity data
- `states`: normalized state enum
- `extendedStates`: extended state enum
- `currentState`: current normalized state

Motion fields:

- `xNormalized`, `yNormalized`
- `dx`, `dy`

## Runtime Event Payloads

`onSocialEvent`

- payload shape: `{ type, context }`
- common values: `UNKNOWN_PERSON`, `OWNER_WITH_GUEST`, `OWNER_WITH_KNOWN_AND_UNKNOWN`, `NO_PERSON`, `NAIL_BITING`, `MIDDLE_FINGER`

`onGesture`

- payload shape: `{ name, score }`

`onVisionState`

- payload shape: `{ person, faces, objects, gesture }`

`onSystemState`

- payload shape: `{ cpuLoad, memoryLoad, thermalLevel, throttled, battery, reasons }`
- `battery` shape: `{ level, isCharging }`

## Recommended Authoring Style

- Keep the base personality readable at a glance.
- Let the PET react differently to strangers, focus, and speech.
- Prefer expressive CSS-driven animation over heavy JavaScript.
- Clean up classes and inline styles in `onUnmount`.
- Use the debugger to validate every important state and social event.

## Getting Started

1. Pick one PET from `pets/` as your base.
2. Copy its `pet.js` into your own plugin workspace.
3. Change the visual language, behavior, and reactions.
4. Test the result in the debugger.

The goal is not only to make a PET that looks different, but a PET that feels different.
