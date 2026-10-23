/*
  The list of builds shown on the hub, newest first.
  To add a build: put its page at builds/<slug>/index.html, then add an entry at the top.
  bg / fg / accent and font style the tile in the build's own look; motif is optional
  (one of the drawings in index.html, or leave it out for a plain tile).
*/
window.BUILDS = [
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
