/*
  The list of builds shown on the hub, newest first.
  To add a build: put its page at builds/<slug>/index.html, then add an entry at the top.
  bg / fg / accent and font style the tile in the build's own look; motif is optional
  (one of the drawings in index.html, or leave it out for a plain tile).
*/
window.BUILDS = [
  {
    slug: "iron-wire",
    title: "Iron Wire",
    date: "2026-11-12",
    kind: "Generative art",
    blurb: "Craze a glaze the way Song-dynasty Ge ware did. Fire a tile, cool the kiln, and watch the glass tear itself into cells by one rule: every new crack starts at a right angle off an older one and stops dead when it meets the next. Rub iron stain into the first net to make it show, then wait a century for a finer golden net to split the cells between. Tap the glaze to strike your own cracks, choose how badly the glaze fits its clay and one of three glazes, and read off the crack length, cell count and mean cell size on a 12 cm tile.",
    font: "'Darker Grotesque', 'Arial Narrow', sans-serif", fontWeight: 900, letterSpacing: "-0.02em",
    bg: "#3b2318", fg: "#24150e", accent: "#b98422", panel: "#f6eee2",
    why: "Crackle is one of the few patterns that potters prize precisely because nobody draws it, and the physics behind it fits in a single sentence, so I wanted the page to run on that sentence and nothing else.",
    hook: "Cool a glazed tile and watch it craze into iron and gold.",
    motif: "ironwire"
  },
  {
    slug: "interlock",
    title: "Interlock",
    date: "2026-11-11",
    kind: "How it works",
    blurb: "A working jacket zip seen from above. Seat the pin in the box, then drag the slider and watch the two rows of teeth funnel together at its throat and come apart on its diamond wedge. See inside the slider, wear its throat out so the zip splits open behind it, then pinch it with pliers and zip over the split again. Underneath: why the teeth hold (each bump nests in the next tooth's hollow), the parts, and three dates from hooks and eyes to rubber boots.",
    font: "'Schibsted Grotesk', 'Arial Black', sans-serif", fontWeight: 900, letterSpacing: "-0.05em",
    bg: "#fbfbf9", fg: "#141414", accent: "#ff6414", panel: "#ffffff",
    why: "Everyone uses a zip a dozen times a day without knowing what the slider actually does, and the split-behind-the-slider failure everyone has suffered turns out to be the clearest way to show it.",
    hook: "Drag the slider and watch the teeth meet inside it.",
    motif: "interlock"
  },
  {
    slug: "handles",
    title: "Handles",
    date: "2026-11-10",
    kind: "Explorable explainer",
    blurb: "Every curve in every font and logo on your screen is a Bézier curve, and a Bézier curve is just mixing points, again and again. Six draggable steps: a mix along a line, a quadratic built from mixes of mixes, a cubic with its three rounds of construction animated, two pieces joined smoothly or with a kink, three outlines to match (one of them a loop a single cubic draws by crossing its handles), and the magic number 0.5523 that lets four cubics fake a circle.",
    font: "'Sora', 'Arial Black', sans-serif", fontWeight: 800, letterSpacing: "-0.05em",
    bg: "#d81f45", fg: "#17090d", accent: "#1f47ff", panel: "#fff8f4",
    why: "Pen-tool handles feel like magic until you see that the curve is one small operation repeated, and that construction is something you should get to watch happen rather than read as a formula.",
    hook: "Drag the handles and watch a curve built from mixing.",
    motif: "handles"
  },
  {
    slug: "lot-twelve",
    title: "Lot Twelve",
    date: "2026-11-09",
    kind: "Two-player or party game",
    blurb: "Pass the device and bid in secret. Eight odd lots come up (a copper teapot, a stuffed pike, a magician's top hat) and you each start with 100 coins for the whole sale. Before every lot each of you sees a private appraiser's range that always contains the true value but is centred differently from your rival's. Share it, bluff about it or keep quiet, then lock in a hidden bid. Highest bid wins and pays; a tie withdraws the lot. Unspent coins count one for one, so overpaying loses.",
    font: "'Bagel Fat One', 'Arial Black', sans-serif", letterSpacing: "0.01em",
    bg: "#5b32c9", fg: "#20123f", accent: "#f3b91c", panel: "#fbf6e9",
    why: "I wanted a party game where the fun is the table talk: each of you holds half the truth, and the only way to pool it is to trust someone you are about to outbid.",
    hook: "Bid in secret on odd lots with half the truth each.",
    motif: "lottwelve"
  },
  {
    slug: "focus-call",
    title: "Focus Call",
    date: "2026-11-08",
    kind: "Game",
    blurb: "Bend coloured stage lights onto the marks. Each cue is a small rig of red, green and blue lamps, a handful of empty mounts and some marks that want an exact colour. Tap a mount to drop in a slash or backslash mirror, and watch the beams reroute and add up: red and green make yellow, green and blue cyan, all three white. Eight cues, from one lamp to a four-lamp rig, each checked to be solvable, with a hint that names one wrong mount.",
    font: "'Red Hat Display', 'Arial Black', sans-serif", fontWeight: 900, letterSpacing: "-0.03em",
    bg: "#d9654a", fg: "#2a1410", accent: "#2a1410", panel: "#fff3e6",
    why: "I wanted a puzzle where the mixing of coloured light does the work: you can lose by lighting a mark too much as well as too little.",
    motif: "focuscall"
  },
  {
    slug: "overtone",
    title: "Overtone",
    date: "2026-11-07",
    kind: "Instrument and sound",
    blurb: "One plucked string hides sixteen voices. Pluck it and they all sound at once; rest a finger lightly on a tick mark like 1/2, 1/3 or 1/4 and every voice except one is held still, so a single harmonic rings out. The string is drawn from the real sum of its standing waves, a bar chart shows each harmonic's loudness, and a ladder button climbs the natural harmonic series. Tap anywhere that isn't a node and you get a dull thud.",
    font: "'Bungee', Impact, sans-serif", fontWeight: 400, letterSpacing: "0",
    bg: "#fafafa", fg: "#0b0b0b", accent: "#0b0b0b", panel: "#e4e4e4",
    why: "A guitar string never plays just one note, and a light touch in the right place lets you hear the others one at a time.",
    motif: "overtone"
  },
  {
    slug: "drift",
    title: "Drift",
    date: "2026-11-06",
    kind: "Word and language",
    blurb: "Latin turned into Spanish through a few dozen regular sound changes, and the order they happen in matters. Take a Latin word like focu or ferru, apply laws from a deck (short o breaks into ue, f goes silent before a vowel, cl melts into ll, a t between vowels softens to d) and watch the letters change until it comes out as the Spanish word. Get the order wrong and fuerte becomes huerte, a dead end the game points out.",
    font: "'Epilogue', 'Arial Black', sans-serif", fontWeight: 900, letterSpacing: "-0.04em",
    bg: "#cfd3d4", fg: "#14181a", accent: "#c6ff00", panel: "#f3f5f5",
    why: "Sound change looks like chaos until you see it as rules that have to run in the right order, so I made the order the puzzle.",
    motif: "drift"
  },
  {
    slug: "billions",
    title: "The Billions",
    date: "2026-11-05",
    kind: "Data story",
    blurb: "It took all of history until 1804 to reach one billion people, and the latest billion took eleven years. A grid of 1,000 squares, each ten million people, is coloured billion by billion; drag across it or pick a birth year to see how many people were alive then, which billion you were counted in, and how many have arrived since. A bar chart shows the years each billion took, including the UN's projections for the ninth and tenth.",
    font: "'Gabarito', 'Arial Black', sans-serif", fontWeight: 800, letterSpacing: "-0.03em",
    bg: "#0f8284", fg: "#06292b", accent: "#ff5a36", accent2: "#e8b21c", panel: "#fbf6ea",
    why: "Big round numbers hide how fast things changed; a grid you can drag through makes the speed-up something you feel rather than read.",
    motif: "billions"
  },
  {
    slug: "sit",
    title: "Sit",
    date: "2026-11-04",
    kind: "Editorial and zine",
    blurb: "A short zine about how people have sat down, told in seven postures: the deep squat, the Egyptian stool, the throne, Thonet's bentwood chair, the office swivel, the kneeling chair and the standing desk. A drawn figure follows you down the page and re-poses itself for each chapter, with hip height, knee bend and hip angle measured live from the drawing. A shuffle button at the end cycles through all seven.",
    font: "'Shrikhand', 'Arial Black', sans-serif", letterSpacing: "0",
    bg: "#c4986a", fg: "#17120d", accent: "#0e5a57", accent2: "#17120d", panel: "#f4ede1",
    motif: "sit"
  },
  {
    slug: "antipode",
    title: "Antipode",
    date: "2026-11-03",
    kind: "Map and place",
    blurb: "Dig straight down from anywhere and see where you'd come out. Drag a pin across a world map, or pick a city, and a second map shows the exact opposite spot, with a cross-section of the Earth and a no-air fall timer. Most of the time the answer is sea; switch on the highlight to see the few patches of land that sit opposite more land.",
    font: "'Familjen Grotesk', 'Arial Black', sans-serif", fontWeight: 700, letterSpacing: "-0.03em",
    bg: "#efe9dc", fg: "#1b1a17", accent: "#d6196f", accent2: "#3c27c9", panel: "#f8f4ea",
    motif: "antipode"
  },
  {
    slug: "found-phone",
    title: "Found Phone",
    date: "2026-11-02",
    kind: "Puzzle hunt",
    blurb: "Someone left a phone on the 8:15 bus and Mo is locked out of their house. Four apps each hide a word: a shopping list with items crossed out, three unnamed alarms, six photos out of order, and a street grid to walk. Each word gives one letter, and together they spell the passcode that says where the spare key is. Hints come in two steps.",
    font: "'Dela Gothic One', Impact, sans-serif", letterSpacing: "0",
    bg: "#8c1c2c", fg: "#1d1416", accent: "#8c1c2c", accent2: "#fbf7f1", panel: "#fbf7f1",
    motif: "passcode"
  },
  {
    slug: "ballpark",
    title: "Ballpark",
    date: "2026-11-01",
    kind: "Quiz and trivia",
    blurb: "Eight estimation questions with no calculator: how many grains of rice in a bag, heartbeats in a life, ants on Earth, how fast a fingernail grows. Slide a marker along a scale that jumps ten times at every tick, lock it in, and see the truth pinned beside your guess. Being out by a factor of two still scores well; the final screen shows whether you lean high or low.",
    font: "'Unbounded', 'Arial Black', sans-serif", fontWeight: 800, letterSpacing: "-0.02em",
    bg: "#ff7a1a", fg: "#1a0f08", accent: "#d6204a", accent2: "#1a0f08", panel: "#fff6ea",
    motif: "tenfold"
  },
  {
    slug: "overnight",
    title: "Overnight",
    date: "2026-10-31",
    kind: "Animation and motion",
    blurb: "A 48-second film about one parcel's night, 18:42 to 05:58. Follow the white box from the back of a van onto a belt, under a scanning arch, past the paddles that shove each parcel down its chute, into a wheeled cage, and out in a lorry at dawn. Play, scrub, change speed or jump to any of eight chapters.",
    font: "'Bowlby One', Impact, sans-serif", fontWeight: 400, letterSpacing: "0",
    bg: "#1f2fd1", fg: "#ffffff", accent: "#ff7a1a", accent2: "#ffe14d", panel: "#2b3ee8",
    motif: "depotbelt"
  },
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
