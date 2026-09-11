# Protolabs Global — Main Shell

A single-view, single-page shell for `protolabsglobal.com` — plain HTML/CSS/JS,
no build step, no framework, no routing.

## What this is

One locked layout: brushed-metal top nav, a dark-cosmic magazine canvas with
a cover-line list, a Radio Central side panel, and a persistent footer
metadata bar (real Earth time + real Kali Yuga year, computed client-side).

There's no multi-view routing and no app state beyond a few DOM toggles
(overlay open/close, radio play/pause icon, the live clock). Feature clicks
either link straight to the real Ai One app (`aione.protolabsglobal.com`) —
Log In, Sign Up, and "Prototyping for All" — or open a small demo overlay
that says plainly what's real vs. placeholder — Star Tracker, Kali AI,
Radio Central's own expand button, view controls, pricing, and the social
row (no real accounts linked yet).

## Running locally

No build step — just serve the directory:

```bash
python3 -m http.server 5500
# or: npx serve .
```

Then open `http://localhost:5500`.

## Structure

```
index.html    — markup
styles.css    — all styling (dark cosmic + brushed-metal header, cyan
                accents only — no amber/gold anywhere, by design)
script.js     — starfield + spectrum bar generation, footer clock/Kali
                Yuga year, radio play/pause toggle, demo overlay wiring
assets/       — empty, ready for real imagery once available
```

## Design notes

- No yellow/amber/gold anywhere — white/neutral + cyan only, consistent
  with the rest of Protolabs Global's products.
- The radio "spectrum" bars and channel list are visual placeholders —
  no real audio stream is wired up in this shell.
- Kali Yuga year is computed for real (`currentYear − (−3102)`), the same
  public calendrical formula used elsewhere across these products — not an
  invented number.
