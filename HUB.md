# Free Rein hub

The public gallery for the builds Claude makes when given free rein. Builds can be anything that lives on a web page, not just games, toys, simulations and tools. This file is the source of truth for what has been built. Read it before choosing a new build, and update it with every build.

- **Live site:** https://dacoowork.github.io/free-rein/
- **Repo:** https://github.com/dacoowork/free-rein (public, `main` branch, GitHub Pages deploys from the root). Live since 23 Oct 2026.
- **Structure:** `index.html` (gallery, with one SVG motif drawing per build in its `MOTIFS` object), `play.html?b=<slug>` (viewer bar + build in a frame), `builds/<slug>/index.html` (each build), `builds.js` (list of builds, newest first), `HUB.md` (this file).
- **This file lives in the repo** (since 29 Oct). It used to be `claude/free-rein-hub.md` in the claude.ai project; that copy is now only a pointer here, because the scheduled tasks can have the repo or the project attached, not both.
- **Two scheduled tasks, both with the repo attached:**
  - **Free Rein nightly build** (10:39pm UK) builds and tests one new build, then commits it to the `queue` branch and pushes `queue`. It never pushes `main`.
  - **Free Rein Publish** (11:41pm UK) takes whatever is on `queue`, re-checks it, fast-forwards `main` to it, confirms the deploy, marks the builds live in this file and resets `queue` to `main`.
  - The `queue` branch is always `main` plus zero or more unpublished commits. If `queue` doesn't exist on the remote, or has nothing beyond `main`, nothing is waiting.

## Categories

Each day, pick the category first, then the idea. Favour categories with low counts, but go with what genuinely appeals that day. The count is how many builds sit in each one (queued builds included).

| Category | What it covers | Count |
|---|---|---|
| Game | Solo play with a goal and a win or lose: puzzles, arcade, daily challenges | 1 |
| Two-player or party game | Pass-and-play, hot-seat, games for a room | 1 |
| Word and language | Word games, etymology, invented languages, ciphers, typing as play | 1 |
| Toy | Open-ended play with no goal | 3 |
| Simulation | A real system modelled so you can poke it | 3 |
| Tool | Something useful you'd come back to: calculators, planners, editors | 3 |
| Instrument and sound | Play or compose: instruments, sequencers, ambient sound machines | 1 |
| Generative art | Visual pieces made by rules, to watch or tweak | 1 |
| Animation and motion | A short non-interactive film or motion piece | 0 |
| Interactive fiction | Stories you move through: branching tales, mysteries, letters | 1 |
| Writing machine | Generates text: poems, headlines, horoscopes, recipes | 1 |
| Explorable explainer | Teaches one idea by letting you play with it | 1 |
| Data story | Real data drawn and narrated | 0 |
| Map and place | Maps, atlases, journeys, imagined geography | 0 |
| Field guide and reference | Curated knowledge: almanacs, guides, glossaries, specimen books | 0 |
| Editorial and zine | A designed long-form read: essay, zine, magazine spread | 0 |
| Type and lettering | Type specimens, lettering toys, layout play | 1 |
| Museum and archive | A collection of objects, real or invented, to browse | 0 |
| Speculative world | Fiction as design: an invented city, sport, product line, holiday | 0 |
| Food | Recipes, menus, flavour pairings, kitchen maths | 1 |
| Time and ritual | Clocks, calendars, timers, daily practices | 1 |
| Quiz and trivia | Test what you know | 0 |
| Puzzle hunt | Linked puzzles with a hidden answer, meant to be solved over time | 0 |
| How it works | Cutaways, blueprints and diagrams of machines and processes | 1 |

## Catalogue (21 builds: 20 on the hub, 1 queued)

A date marked "(queued)" means the build is on the `queue` branch and not live yet.

| Build | Date | Category | What it does | Subject world | Core mechanic | Look |
|---|---|---|---|---|---|---|
| Going Up | 29 Oct (queued) | Interactive fiction | Car Two's last full shift in the Calloway Building, Friday 14 April 1950, before self-service lifts go in on Monday. You are the operator: press brass floor buttons (B, G, 3, 6, 9, 12, 15, 18, R) to travel; each trip is half an hour, 18 trips from 8:00 to the five o'clock bell. Doors close, the indicator steps floor by floor, doors open on the scene. Orange call lamps show who is waiting, jade rings show passengers' floors. Ten passengers (Dora Pell with a KEEP THE OPERATORS petition, Eddie the telegram boy heading for the wrong floor, Mrs Lindqvist the cleaner who has never seen the roof, Mr Abernethy the owner, Brandt the Otis installer, Dr Feld, Mr Royce, the Haskell sisters, a cake delivery man; plus Sal at the shoeshine stand) with two-way choices. Four loose ends: the petition (8 names needed, delivered to 18 after half past three; full win needs the telegram delivered too, else lobby starter or refused), the misdelivered telegram, helping Brandt level the new car (Otis card), and taking Mrs Lindqvist to the roof at five. Ending composed from all four threads with a title (Car Two Stays, Adjuster, The View From the Top, Starter, Last Run) and a 4-thread summary; floor buttons lock while a choice is pending and your own floor is disabled | 1950 office-building lifts, lift operators, automation | Time-budgeted branching story driven by a lift's floor buttons (calls, passengers, choices, composed endings) | Federo (deco geometric sans) + Outfit; peach lobby plaster with faint pilaster lines, brass frame and buttons, near-black floor indicator with orange lamps, jade accent; deep oxblood in dark mode |
| Squad Numbers | 28 Oct | Type and lettering | Letter the back of a football shirt. Numerals 0–9 are built from stroke skeletons (block figures), drawn as layered strokes: shadow, 2nd outline, outline, fill, inline. Controls: corners (square = miter, round, chamfered = bevel), weight 12–44, width 70–140, slant 0–14°, outline 0–10, 2nd outline 0–8, shadow 0–10, solid or inline; shirt pattern plain/stripes/hoops/halves; 12 kit colours each for shirt, second colour, fill, outline, 2nd outline/shadow; name arched or straight (fitted with textLength). Six kit presets (Classic block, Seventies, Nineties away, Black and white, Modern thin, Tangerine third). "From the stand": a reading-distance model (30 cm number, strokes must subtend about 2.5 arcmin, cut by WCAG edge contrast against every shirt colour, penalised by inline and by outlines filling the counters; styles too wide for the back shrink and lose reach) gives metres and a grade (back row / mid-stand / lower tier / touchline / lost in the crowd); a seat slider 5–100 m shows the shirt shrinking and blurring in a sky-and-pitch window, with a 0–100 m meter. Validation: name letters/spaces/hyphens/apostrophes up to 16 characters; number 1–99, no leading zeros, digits only. Specimen plate of 0–9 in the current style (two rows on phones) | Football kits, shirt lettering, legibility | Parametric stroke-built numerals with a distance-legibility model | Anton (condensed display sans, uppercase) + Manrope; mown pitch-green stripes as the page ground, white kit-room cards, ink green, armband orange; floodlit night pitch in dark mode |
| Scoville Bench | 27 Oct | Food | Hot-sauce kitchen maths. Weigh 21 ingredients onto the bench in 5 or 10 g steps (8 chillies from jalapeño to Carolina Reaper, fruit and veg, lime and vinegars, water, salt, sugar, honey; capped at 1 kg each). It works out the batch's Scoville heat (mass-weighted), places it on a log scale from 100 to 3M SHU with pepper reference ticks and a "hotter than X, milder than Y" line, rates it 0 to 5 chillies, names the sauce (e.g. Habanero & Mango), draws a woozy bottle in the blended colour with seed flecks and a label, and counts 5 oz bottles. Estimated pH uses a buffering model (acid strength per kg of buffered food pulls the mix from the food's mean pH towards the acid's; about a quarter of the batch as vinegar takes a fresh pepper mash under pH 4). Verdict: ≤4.0 acid enough to bottle, 4.0–4.6 fridge, >4.6 not safe to keep, with a "Add N g white vinegar (to pH 3.8)" fix. Fermented method needs 2–5% salt of the mash (acids excluded) and refuses below or above with a "Set salt to 3%" fix; a good ferment brings the mash to pH 3.6. Presets: Mango habanero (fermented), Louisiana red, Green, Reaper dare, Pepper mash with no acid | Hot sauce, chillies, food safety | Ingredient-weighing calculator with a buffered pH model, safety verdicts and a drawn bottle | Rubik Mono One + Rubik; mustard-yellow ground, cream label panels, deep chilli-brown ink, chilli red; deep red-brown in dark mode |
| Tenth Hour | 26 Oct | Time and ritual | The French Revolution's decimal time and Republican calendar. A live ten-hour clock face (100 decimal minutes per hour, 100 seconds per minute, 10 at the top) beside a small ordinary clock, with a drag-through-the-day slider and a Now button. The day card gives the Republican date for the chosen day (e.g. Quartidi 4 Brumaire, an CCXXXV), month meaning and season, sextile or ordinary year, and the ten-day décade strip with décadi (rest day) countdown; sansculottides show as feast days. A year ring of 12 seasonal months plus sansculottides with a marker (tap a month to jump). Two-way converter (ordinary date or day/month/year of the Republic), rejecting dates before 22 Sep 1792, a 31st day, or a sixth sansculottide in a non-sextile year. Famous-date chips (1 Vendémiaire I, 9 Thermidor II, 18 Brumaire VIII, 10 Nivôse XIV, the 1871 Commune). Year starts from the September equinox (Meeus ch. 27 with periodic terms) in Paris local time; matches all the historical dates | Revolutionary France, decimal time, calendars | Live clock plus calendar converter with a year ring | Pinyon Script (display) + Albert Sans + DM Mono; pale lilac ground, plum ink, tricolore cobalt and red, seasonal ochre/blue/green/red; deep plum in dark mode |
| Interchange | 25 Oct | Generative art | Each press invents a city (seeded, numbered map) and draws its metro diagram by rule: lines at 0/45/90 degrees with rounded corners, no shared track, no turns sharper than 90 degrees, every line meeting another, interchanges kept a square apart, stations about two squares apart, labels placed by trying eight positions against lines and other names. 3 to 8 lines (6 on phones, which get a portrait grid), tick or dot station style, fare-zone rings. Tap two stations for a journey plan (Dijkstra with a change penalty): line, towards which terminus, stops, changes, minutes; the route is drawn over a dimmed map | Metro and transit diagrams, invented cities | Rule-based octilinear map generator with label placement and a route planner | Overpass 800 + Overpass; cool poster white, ink navy, roundel red with classic line colours; charcoal in dark mode |
| Viewing Recommended | 24 Oct | Writing machine | Enter the honest facts about a property (type, bedrooms, floor area, condition, area, and what the photos leave out: main road, railway, kebab shop below, top floor no lift, damp, north-facing garden and more) and it writes a British estate-agent listing: price with "offers in excess of", headline, key features, description, EPC and council tax band, plus a drawn front elevation with a for-sale board. Translate strikes through every euphemism and shows what it means; tap one phrase to translate just that. Rewrite rewords; Another property makes a random one. Impossible facts are refused with a reason (cul-de-sac on a main road, top-floor house, too many bedrooms for the floor area) | Estate agents, property listings | Rule-based text generator with a euphemism-to-truth decoder | Zilla Slab 700 + Figtree; pale grey-green window, white listing card, agency magenta, highlighter yellow for the truth |
| Checkout | 23 Oct | Explorable explainer | Why queues explode near full capacity: one till with an arrivals slider (live queue, measured vs predicted wait), the Pollaczek–Khinchine hockey-stick chart with three basket mixes, and one snake vs four join-the-shortest lines fed the same shoppers (average and longest wait, % overtaken, Erlang C prediction) | Supermarket checkouts, queueing theory | Event-driven queue simulation drawn top-down beside a live formula chart | Space Mono 700 + Work Sans; cool off-white, ink, lane-light yellow tickets, shopper blue fading to price-tag red |
| Flush | 23 Oct | How it works | Working cutaway of a British syphon cistern: full and half flush (air-bleed), plunger throws a slug over the crown, syphon runs and breaks, float-operated fill valve refills; won't re-flush below 10 cm; adjustable set level; worn-washer fault overflows to the warning pipe; gauges, 60 s level trace, numbered parts list | Household plumbing | Animated machine cutaway driven by a small fluid model, with fault toggles | Archivo Expanded 900 + JetBrains Mono; white bathroom-tile grid, ink line drawing, water blue, brass parts |
| Hoist | 23 Oct | Word and language | International Code of Signals flags: read words flown as vertical hoists (points per flag, hints cost a point, misreads explained), type a message and it goes up as halyards, flag locker with all 26 single-flag meanings | Maritime signal flags | Decode-and-type reading game plus live encoder | Barlow Condensed 800 uppercase + Barlow; pale harbour-sky ground, signal-flag primaries (red, yellow, blue, black) |
| Sprouts | 23 Oct | Two-player or party game | Conway and Paterson's 1967 pen-and-paper game for two on one screen: draw lines between spots, a new spot sprouts on each line, no crossings, max three lines per spot; undo, concede, 1 to 6 starting spots with perfect-play notes | Recreational maths | Freehand line drawing checked against topology rules | Bricolage Grotesque; white squared exercise-book paper, blue and red pen |
| Sixfold | 21 Oct | Toy | Cut a folded twelfth of paper and it opens into a six-armed snowflake | Paper craft, snow | Cut on a wedge, mirrored 12 ways | Gloock; near-black navy, ice blue, red |
| Drawdown | 19 Oct | Tool | Four-shaft weaving draft editor (threading, tie-up, treadling) with live cloth, presets, float checks, natural-dye yarns | Handweaving | Edit grids, cloth renders live | Young Serif; pale grey-green, navy ink, madder red |
| Ringing Chamber | 17 Oct | Instrument and sound | Ring six church bells in English change-ringing, follow the blue line through Plain Bob, Grandsire, Cambridge | Church bell ringing | Play along to methods | Cinzel; dark brown, gold, blue |
| Night Ledger | 16 Oct | Tool | Stargazing almanac: longest moon-free dark window for any place and night, twilight times, week ahead | Astronomy | Calculator with timeline | Bodoni Moda; night navy, pale blue |
| Ebru Tray | 16 Oct | Toy | Turkish paper marbling: float pigments, rake patterns, pull a print | Paper marbling | Fluid paint simulation | Alegreya SC; dark teal, ochre |
| Harmonograph | 13 Oct | Simulation | Victorian pendulum drawing machine tuned to musical intervals, decaying spirals on cyanotype | Victorian science toys, music ratios | Damped pendulum curves | IM Fell English SC; cyanotype blue, gold |
| Ninety Minute Night | 12 Oct | Tool | Sleep-cycle planner: alarm times between 90-minute cycles, draws the night | Sleep | Time calculator with hypnogram | Newsreader italic; night navy, gold, blue |
| Vault | 12 Oct | Game | Crack a four-digit safe in eight tries from tumbler clues; daily safe plus practice | Safecracking | Mastermind-style deduction | Big Shoulders Stencil; gunmetal, brass |
| Night Garden | 12 Oct | Toy | Typed thoughts grow into plants; questions bloom, long thoughts become vines; seasons change | Gardens, journalling | Text-driven generative growth | Instrument Serif italic; night navy, gold, green |
| Plasmodium Dish | 12 Oct | Simulation | Slime mould: tens of thousands of agents grow vein networks between oat flakes you drop | Biology | Agent-based physarum sim | Young Serif; dark brown, amber |
| Murmuration | 12 Oct | Simulation | 2,000 starlings flocking at dusk; drag to dive through as the peregrine | Birds | Boids flocking | Bodoni Moda italic; dusk blue to orange |

## Patterns already used a lot (steer away from these)

- **Categories:** mostly Toy, Tool, Simulation, Game, Instrument, Two-player game and Word and language. 9 categories are untouched (Animation and motion, Data story, Map and place, Field guide and reference, Editorial and zine, Museum and archive, Speculative world, Quiz and trivia, Puzzle hunt).
- **Dark night palettes:** 8 of 21 builds sit on near-black or navy. Favour daylight, bright or paper-white grounds (Sprouts, Hoist, Flush, Checkout, Viewing Recommended, Interchange, Tenth Hour, Scoville Bench, Squad Numbers and Going Up are daylight).
- **Serif display faces:** 10 of 21 use a serif display face; Viewing Recommended uses a slab (Zilla Slab). Young Serif and Bodoni Moda are each used twice. Tenth Hour used a formal script (Pinyon Script), so next time try hand-lettered, brush or display sans rather than another copperplate script. Taken sans faces: Barlow Condensed (Hoist), Bricolage Grotesque (Sprouts), Archivo Expanded (Flush), Space Mono (Checkout), Overpass (Interchange), Rubik Mono One + Rubik (Scoville Bench), Anton + Manrope (Squad Numbers: tall condensed uppercase), Federo + Outfit (Going Up: art deco geometric sans). Condensed uppercase sans is now used twice (Hoist, Squad Numbers); deco is now taken too.
- **Ground colours:** Drawdown and Viewing Recommended both sit on pale grey-green; Tenth Hour is pale lilac; Scoville Bench is saturated mustard yellow; Squad Numbers is saturated pitch green with mowing stripes; Going Up is peach plaster with brass. Pick something else next (no more yellow, lilac/purple, grey-green, green, or peach/brass for a while).
- **Heritage crafts and Victorian science:** weaving, marbling, bell ringing, harmonograph, paper cutting. Look to modern, urban, mechanical, language or pop subjects.
- **Sport and football:** Squad Numbers is football kits. Leave football, kits and stadiums alone for a while (other sports are fine later).
- **History and France:** Tenth Hour is Revolutionary France; Going Up is a 1950 office building. Leave 18th-century history, revolutions and French subjects alone for a while, and give period pieces (mid-century nostalgia, "the last day before the machines") a rest next time; try something present-day or future.
- **Lifts, office buildings and automation-replaces-a-job stories:** Going Up. Leave elevators, skyscrapers and office workers alone for a while.
- **Clocks, calendars and astronomy maths:** Tenth Hour (decimal clock, equinox-based calendar), Night Ledger (twilight) and Ninety Minute Night (sleep cycles) are all time calculators. The next Time and ritual build should be a practice or ritual, not another clock or date converter.
- **Time-budget mechanics:** Going Up gives you a fixed number of half-hour trips. Avoid another "limited turns in a day" structure next.
- **Nature simulations:** slime mould, starlings, plants. Avoid another particle or agent swarm for a while.
- **Paper as a material:** Sixfold, Ebru Tray and Sprouts' exercise-book page. Give paper a rest.
- **Nautical:** Hoist uses maritime signalling. Leave ships and the sea alone for a while.
- **Water and plumbing:** Flush is a water-level machine with float and valve. Avoid another tank, pipe or fluid-level build for a while, and another cutaway-with-gauges layout.
- **Queues and slider-plus-live-sim explainers:** Checkout simulates shoppers at tills with sliders, ticket readouts and a formula chart. Avoid another queue, traffic or service-line sim, and vary the explainer format next time (scrolly story, step-through, diagram-first).
- **British everyday life:** Flush (cistern), Checkout (supermarket) and Viewing Recommended (estate agents) are all ordinary British domestic subjects. Leave housing, shops and the home alone for a while.
- **Facts-panel-plus-output layout:** Viewing Recommended pairs a form of chips and steppers with a generated card. The next writing machine should use a different interaction (one prompt, a dial, a deck of cards, a scroll).
- **Story with pill-button choices:** Going Up presents prose blocks with two rounded choice buttons each. The next interactive fiction should use a different form (letters, a found archive, a map, typed commands, a conversation log) rather than another choose-a-button story.
- **Steppers-and-safety-verdict calculators:** Scoville Bench is a shelf of +/− weight steppers feeding a label card with a coloured good/warn/bad verdict and one-tap fixes. Squad Numbers also ends in a coloured grade pill from a model. Avoid another "inputs feed a scored verdict" build next; try something with no score at all.
- **Slider-and-swatch control panels:** Squad Numbers has three cards of range sliders, segmented buttons and 12-colour swatch rows. Avoid another big parametric control panel next; favour direct manipulation (drag, draw, type) or no controls.
- **Chillies and hot sauce:** leave spice, heat scales and condiments alone for a while.
- **Transit and maps:** Interchange is a metro map generator with a journey planner. Leave railways, transit, route planners and network diagrams alone for a while (Map and place is still 0, but pick a non-transit idea there).
- **Map-plus-sidebar layout:** Interchange, Night Ledger and Drawdown all put the main drawing beside a side column; Squad Numbers puts the shirt beside a readout card. Tenth Hour and Going Up are single columns; keep varying.
- **Round dials and rings:** Tenth Hour has a clock face and a year ring. Avoid another radial/dial composition next.

## Rejected because they repeated an earlier build

- Treadle (23 Oct): four-shaft weaving draft studio. Same as Drawdown.

## Adding a new build (the nightly build task)

1. Clone the repo, then get onto the queue: `git fetch origin queue` (it's fine if this fails because there is no `queue` branch). If `origin/queue` exists, `git checkout -b queue origin/queue` and `git rebase origin/main`; otherwise `git checkout -b queue origin/main`. Read `HUB.md` from this checkout: it includes anything already queued.
2. Save the build's page to `builds/<slug>/index.html`, wrapped in a full document: copy the one-line `<!doctype html>…<head>…</head><body>` prefix from an existing build, put the build's `<title>` inside that head, and close with `</body></html>`.
3. Add an entry at the top of `builds.js`: slug, title, date, kind (use the category name), blurb, font (plus fontStyle/fontWeight/letterSpacing/fontStretch if needed; the tile supports `fontStretch` since Flush), bg/fg/accent (optional accent2, bg2, panel), motif. The tile's text area uses `panel` (or `bg`) with `fg`, so when bg is a strong colour give a light `panel` and a dark `fg`, and let the motif paint bg itself.
4. Add a motif drawing for it in `index.html` (viewBox 320x180), and add its display font to the Google Fonts link if it's new (each family needs its own `family=` parameter). The drawing must be true to the build: a game position must be legal, a pattern must be one the build can actually make.
5. Bump the `?v=` date on the `builds.js` script tag in both `index.html` and `play.html`. GitHub Pages caches files for about 10 minutes, and without this visitors see the old list. If today's date is already the version, add a letter (2026-10-23b, then c, and so on). Live is 2026-10-29b; Going Up is queued as 2026-10-29c.
6. Render the gallery locally with Playwright and look at the new tile.
7. Update this file in the same commit: add the catalogue row with "(queued)" after the date, bump the category count, update the catalogue heading and the pattern notes, and list the build under "Queued" below.
8. Commit (message `Add <Title>: <short description> (<Category>)`) and `git push origin queue` (use `--force-with-lease` if you rebased). Never push `main` from the build task.
9. Also publish the tested page as a private artifact, so the report has a link to try it before it goes live.

## Publishing the queue (the publish task)

1. Clone, `git fetch origin queue`. If there's no `queue` branch, or `git rev-list --count origin/main..origin/queue` is 0, nothing is waiting.
2. `git checkout -b queue origin/queue`, `git rebase origin/main`. Check the result with Playwright: the gallery at 1280px and 390px with the new tiles, and each `builds/<slug>/index.html` loading with no page errors (blocked Google Fonts requests don't count). If a build is broken, drop its commit (interactive rebase), leave a note in this file and ship the rest.
3. Mark the builds live in this file (remove "(queued)", update the catalogue heading, clear the "Queued" list, update the "Live is …" note) as one more commit.
4. `git push origin HEAD:main` (a fast-forward). Then `git push --force-with-lease origin HEAD:queue` so `queue` equals `main` again.
5. Confirm with `gh api repos/dacoowork/free-rein/commits/main/check-runs` until the check named `deploy` shows completed/success (filter on that name: `build` and `report-build-status` finish first and also say completed/success). Pages redeploys in under a minute (it sat queued for about two minutes on 27 Oct). Don't use the Pages API or fetch the github.io site from a session; the proxy blocks both.

## Build and process tips

Build tip: SVG presentation attributes such as `fill="var(--x)"` ignore CSS variables. Use `style="fill:var(--x)"` when theming SVG with tokens.

Build tip (26 Oct): SVG labels drawn on top of clickable shapes steal clicks from Playwright (and are fiddly for users); give such text `pointer-events:none`. Script fonts vary a lot in width, so fit centred SVG titles with `getComputedTextLength()` and `textLength` when they risk overflowing.

Build tip (27 Oct): a 200px-minimum tile grid looked fine on phones (one column) but crushed stepper tiles into five narrow columns at 1280px, pushing the + buttons out of the tiles. Check the desktop "after" screenshot of any repeated-tile grid, and size the minimum to the tile's real content (260px for name + stepper).

Build tip (28 Oct): when a preview shrinks with distance, a blur proportional to distance cancels out against the shrinking (apparent stroke ∝ 1/d), so the blur never changed; tie the blur to (d / reach)² instead. Test sliders by reading the computed style before and after, not just by looking. Also: adjacent SVG stripe rects leave hairline seams; paint the ground once and lay only the alternate stripes on top.

Build tip (29 Oct): a dark strip that should stay dark in both themes (Going Up's floor indicator) must not use the ink token, which flips light in dark mode; give it its own constant token. On phones, long story text pushed the floor buttons below the fold; making the button strip `position: sticky; bottom: env(safe-area-inset-bottom)` inside its frame keeps it reachable. Screenshots taken right after a CSS transition starts catch it half-way (doors half open); wait out the transition before judging. Going Up locks its floor buttons while a choice is pending, so a test has to answer the open choices before pressing a floor.

Process tip (23–28 Oct): scheduled runs with no repo attached had no add_repo tool and got a 403 from the git proxy on push ("not in this session's authorized repository set"). Check early with `git push --dry-run origin HEAD:<branch>`. If a push fails, report the exact error line and stop rather than working around it.

## Queued

- **Going Up** (`going-up`), Interactive fiction, built 29 Oct. Commit on `queue`; ?v= 2026-10-29c. Artifact: https://claude.ai/artifact/XK6pbLdp1ptYJhFL1vT75w

## Left out on purpose

The work artifacts: Pie Portfolio, Picker Performance (both versions), Quarterly Connect Model Audit, Completion Bar Build Sheet, Paul Simmonds Rebuild.
