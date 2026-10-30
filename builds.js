/*
  The list of builds shown on the hub, newest first.
  To add a build: put its page at builds/<slug>/index.html, then add an entry at the top.
  bg / fg / accent and font style the tile in the build's own look; motif is optional
  (one of the drawings in index.html, or leave it out for a plain tile).
*/
window.BUILDS = [
  {
    slug: "gone-quiet",
    title: "Gone Quiet",
    date: "2026-10-30",
    kind: "Museum and archive",
    blurb: "A small museum of eight sounds that once filled ordinary rooms: the rotary dial, the typewriter bell, the dial-up modem, the fax handshake, a cassette rewinding, a floppy drive seeking, a monophonic ringtone, a CRT warming up. Drag the year from 1950 to 2030 and the objects fall silent around you; press play on any of them to hear it again, rebuilt from raw tones.",
    font: "'Syne', 'Arial Black', sans-serif", fontWeight: 800, letterSpacing: "-0.02em",
    bg: "#e9e6df", fg: "#1d1d1f", accent: "#d63a14", accent2: "#8d8a83", panel: "#f6f4ef",
    motif: "quietwall"
  },
  {
    slug: "thumbs-up-maybe",
    title: "Thumbs Up, Maybe",
    date: "2026-10-29",
    kind: "Field guide and reference",
    blurb: "The same hand can be a compliment in one airport and an insult in the next. Raise and fold the fingers of a drawn hand, turn its palm, and the guide tells you what that shape says in seven parts of the world. Or pick your destination first and every hand in the plate is marked friendly, neutral, varies or rude.",
    font: "'Permanent Marker', 'Marker Felt', cursive", fontWeight: 400, letterSpacing: "0.01em",
    bg: "#ffc9d9", fg: "#2b1030", accent: "#cf1f3a", accent2: "#0b7a75", panel: "#fff7f9",
    motif: "handsigns"
  },
  {
    slug: "ringball",
    title: "Ringball",
    date: "2026-10-29",
    kind: "Speculative world",
    blurb: "The sport of Halcyon, a space habitat two hundred metres in radius: throw a ball at a hoop and watch it curve, because the floor is turning under it. Drag to aim, compare your throw with the gym guess, and see the same flight from outside, where it never bends.",
    font: "'Lilita One', 'Trebuchet MS', sans-serif", fontWeight: 400, letterSpacing: "0.01em",
    bg: "#d3edf2", fg: "#0c2a3a", accent: "#ee4b37", accent2: "#2556d9", panel: "#f7fcfd",
    motif: "ringcourt"
  },
  {
    slug: "going-up",
    title: "Going Up",
    date: "2026-10-29",
    kind: "Interactive fiction",
    blurb: "Friday, April 1950: Car Two's last full shift before the self-service lifts go in. Press the brass buttons to carry ten passengers through eighteen half-hour trips, and decide which of four loose ends you tie before the five o'clock bell: a petition, a misdelivered telegram, the man from Otis and a promise about the roof.",
    font: "'Federo', 'Josefin Sans', 'Century Gothic', sans-serif", fontWeight: 400, letterSpacing: "0.04em",
    bg: "#f3d5c4", fg: "#2a161b", accent: "#16675e", accent2: "#e35d1f", panel: "#fff7f1",
    motif: "liftcar"
  },
  {
    slug: "squad",
    title: "Squad Numbers",
    date: "2026-10-28",
    kind: "Type and lettering",
    blurb: "Letter the back of a football shirt with numerals built from strokes: set the weight, width, corners, slant, outlines, inline and shadow, on plain, striped, hooped or halved kits. Then move your seat back through the stand and see how far away the number still reads.",
    font: "'Anton', Impact, 'Arial Narrow Bold', sans-serif", fontWeight: 400, letterSpacing: "0.01em",
    bg: "#237a3a", fg: "#0f2416", accent: "#ff5a2a", accent2: "#d7191c", panel: "#fbfdf9",
    motif: "shirtback"
  },
  {
    slug: "scoville",
    title: "Scoville Bench",
    date: "2026-10-27",
    kind: "Food",
    blurb: "Weigh chillies, fruit, vinegar and salt onto the bench and it bottles the batch: its heat in Scoville units, an estimated pH, whether a ferment has enough salt, and whether the sauce is acid enough to keep or belongs in the fridge.",
    font: "'Rubik Mono One', 'Arial Black', Impact, sans-serif", fontWeight: 400, letterSpacing: "-0.02em",
    bg: "#f7d35a", fg: "#3a0e06", accent: "#d2231b", accent2: "#f47a12", panel: "#fffaea",
    motif: "woozy"
  },
  {
    slug: "tenth-hour",
    title: "Tenth Hour",
    date: "2026-10-26",
    kind: "Time and ritual",
    blurb: "The French Revolution's decimal clock, running now: ten hours a day, a hundred minutes an hour. Below it, the Republican calendar for any date, with its ten-day week, its feast days and a converter that works both ways.",
    font: "'Pinyon Script', 'Snell Roundhand', cursive", fontWeight: 400, letterSpacing: "0",
    bg: "#f1ecf7", fg: "#271a35", accent: "#d33a2c", accent2: "#2b45b8",
    motif: "decimal"
  },
  {
    slug: "interchange",
    title: "Interchange",
    date: "2026-10-25",
    kind: "Generative art",
    blurb: "Every press invents a city and draws its metro map by the rules of the classic diagram: 45-degree lines, rounded corners, ticked stations, ringed interchanges. Then tap two stations and it plans your journey, changes and all.",
    font: "'Overpass', 'Arial Narrow', system-ui, sans-serif", fontWeight: 800, letterSpacing: "-0.01em",
    bg: "#fbfbf8", fg: "#1b2033", accent: "#dc241f", accent2: "#0a5fb4",
    motif: "metro"
  },
  {
    slug: "viewing",
    title: "Viewing Recommended",
    date: "2026-10-24",
    kind: "Writing machine",
    blurb: "Tell an estate agent the truth about a property, from the main road to the kebab shop downstairs, and it writes the glossy listing. Then press Translate to see what every phrase really means.",
    font: "'Zilla Slab', Rockwell, Georgia, serif", fontWeight: 700, letterSpacing: "-0.01em",
    bg: "#eef1ee", fg: "#1f1c24", accent: "#c2185b", accent2: "#f4ec5a",
    motif: "listing"
  },
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
