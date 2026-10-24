/*
  The list of builds shown on the hub, newest first.
  To add a build: put its page at builds/<slug>/index.html, then add an entry at the top.
  bg / fg / accent and font style the tile in the build's own look; motif is optional
  (one of the drawings in index.html, or leave it out for a plain tile).
*/
window.BUILDS = [
  {
    slug: "checkout",
    title: "Checkout",
    date: "2026-10-23",
    kind: "Explorable explainer",
    blurb: "Why a queue goes from fine to hopeless when the shop gets only a little busier. Push a till towards full, change the basket mix, then race one snake against four lines with the same shoppers.",
    font: "'Space Mono', ui-monospace, Menlo, monospace", fontWeight: 700, letterSpacing: "-0.03em",
    bg: "#f3f5f2", fg: "#17191c", accent: "#d7261e", accent2: "#ffcf1a",
    motif: "tills"
  },
  {
    slug: "flush",
    title: "Flush",
    date: "2026-10-23",
    kind: "How it works",
    blurb: "A working cutaway of a British syphon cistern. Flush it and watch a slug of water start the syphon, the air break it, and the float refill the tank. Then wear out the valve and make it overflow.",
    font: "'Archivo', 'Arial Black', sans-serif", fontWeight: 900, fontStretch: "125%", letterSpacing: "-0.01em",
    bg: "#e9efee", fg: "#152020", accent: "#1f8db4", accent2: "#9ad8ea",
    motif: "cistern"
  },
  {
    slug: "hoist",
    title: "Hoist",
    date: "2026-10-23",
    kind: "Word and language",
    blurb: "Ships spell with flags. Read words flown as signal hoists, string up your own message, and learn what each of the 26 flags means alone.",
    font: "'Barlow Condensed', 'Arial Narrow', sans-serif", fontWeight: 800, letterSpacing: "0.02em",
    bg: "#e8f0f4", fg: "#12222c", accent: "#d22630", accent2: "#1f4c9e",
    motif: "hoist"
  },
  {
    slug: "sprouts",
    title: "Sprouts",
    date: "2026-10-23",
    kind: "Two-player game",
    blurb: "John Conway's 1967 pen-and-paper game for two. Draw lines between spots, a new spot sprouts on each line, and whoever can't move loses.",
    font: "'Bricolage Grotesque', 'Avenir Next', sans-serif", fontWeight: 800, letterSpacing: "-0.02em",
    bg: "#fbfcfa", fg: "#1c2227", accent: "#1d4fd8", accent2: "#d33b27",
    motif: "sprouts"
  },
  {
    slug: "sixfold",
    title: "Sixfold",
    date: "2026-10-21",
    kind: "Toy",
    blurb: "Cut a folded twelfth of paper with scissors or a punch and watch it open into a six-armed snowflake.",
    font: "'Gloock', Georgia, serif",
    bg: "#0d1520", fg: "#e9edf0", accent: "#a8d6e8", accent2: "#c9553f",
    motif: "snowflake"
  },
  {
    slug: "drawdown",
    title: "Drawdown",
    date: "2026-10-19",
    kind: "Tool",
    blurb: "Write a four-shaft weaving draft (threading, tie-up, treadling) and see the cloth it weaves, with float checks.",
    font: "'Young Serif', Georgia, serif",
    bg: "#eceee9", fg: "#1b2240", accent: "#a33a2b",
    motif: "weave"
  },
  {
    slug: "ringing-chamber",
    title: "Ringing Chamber",
    date: "2026-10-17",
    kind: "Instrument",
    blurb: "Ring six church bells in the English change-ringing style and follow your bell's blue line through Plain Bob, Grandsire or Cambridge.",
    font: "'Cinzel', 'Trajan Pro', Georgia, serif", fontWeight: 700, letterSpacing: "0.04em",
    bg: "#1d140d", fg: "#e9d6a6", accent: "#c9a24a", accent2: "#6aa6e0",
    motif: "blueline"
  },
  {
    slug: "night-ledger",
    title: "Night Ledger",
    date: "2026-10-16",
    kind: "Tool",
    blurb: "A stargazing almanac. For any place and night it finds the longest stretch of moon-free darkness, with twilight times and the week ahead.",
    font: "'Bodoni Moda', Didot, Georgia, serif", fontWeight: 700,
    bg: "#0c111b", fg: "#e4e8ef", accent: "#8dbfeb",
    motif: "almanac"
  },
  {
    slug: "ebru-tray",
    title: "Ebru Tray",
    date: "2026-10-16",
    kind: "Toy",
    blurb: "Turkish paper marbling. Float earth pigments on a bath, rake them into patterns, then lay paper to pull a print.",
    font: "'Alegreya SC', Georgia, serif", fontWeight: 700, letterSpacing: "0.04em",
    bg: "#161d1e", fg: "#ece6d6", accent: "#d39a3c",
    motif: "marble"
  },
  {
    slug: "harmonograph",
    title: "Harmonograph",
    date: "2026-10-13",
    kind: "Simulation",
    blurb: "A Victorian pendulum drawing machine. Each plate is tuned to a musical interval and spirals inward on cyanotype blue as friction drains it.",
    font: "'IM Fell English SC', Georgia, serif",
    bg: "#13284b", fg: "#eef3fb", accent: "#d8b46a",
    motif: "harmonograph"
  },
  {
    slug: "ninety-minute-night",
    title: "Ninety Minute Night",
    date: "2026-10-12",
    kind: "Tool",
    blurb: "A sleep-cycle planner. It suggests alarm times that land between 90-minute cycles and draws the night you'll have.",
    font: "'Newsreader', Georgia, serif", fontStyle: "italic", fontWeight: 300,
    bg: "#0d1024", fg: "#e7e4f4", accent: "#f2d58a", accent2: "#8fb3ff",
    motif: "hypnogram"
  },
  {
    slug: "vault",
    title: "Vault",
    date: "2026-10-12",
    kind: "Game",
    blurb: "Crack a four-digit safe in eight tries from tumbler clues. One daily safe for everyone, plus unlimited practice.",
    font: "'Big Shoulders Stencil Display', Impact, sans-serif", fontWeight: 800, letterSpacing: "0.06em",
    bg: "#1a1d20", fg: "#e8e2d2", accent: "#d1a54a",
    motif: "dial"
  },
  {
    slug: "night-garden",
    title: "Night Garden",
    date: "2026-10-12",
    kind: "Toy",
    blurb: "Type a thought and it grows into a plant. Questions bloom, long thoughts climb as vines, and the seasons change.",
    font: "'Instrument Serif', Georgia, serif", fontStyle: "italic",
    bg: "#0a1520", fg: "#dfe7df", accent: "#f2d68c", accent2: "#7fb08a",
    motif: "garden"
  },
  {
    slug: "plasmodium",
    title: "Plasmodium Dish",
    date: "2026-10-12",
    kind: "Simulation",
    blurb: "A living slime mould. Tens of thousands of blind agents grow vein networks between the oat flakes you drop.",
    font: "'Young Serif', Georgia, serif",
    bg: "#15120b", fg: "#f5e6b0", accent: "#e7a51f",
    motif: "veins"
  },
  {
    slug: "murmuration",
    title: "Murmuration",
    date: "2026-10-12",
    kind: "Simulation",
    blurb: "Two thousand starlings flocking at dusk. Press and drag to dive through them as the peregrine.",
    font: "'Bodoni Moda', Didot, Georgia, serif", fontStyle: "italic", fontWeight: 500,
    bg: "#2d3c6c", bg2: "#ee8a5e", panel: "#0c0a12", fg: "#f3ece4", accent: "#f2a65a",
    motif: "flock"
  }
];
