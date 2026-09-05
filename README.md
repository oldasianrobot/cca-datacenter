# The Data Center Next Door

A fictional eleven-decision classroom simulation, with a locally drawn pixel-art town and the supplied `hum.mp3` recording.

## Preview

Use the existing local server at http://localhost:8000. If it is stopped, run `python3 -m http.server 8000` in this folder. Use a local server (rather than double-clicking the HTML) so the browser can load the audio recording.

Entering the town unlocks audio automatically. Cooling and its hum begin in Year 2; Years 0 and 1 are silent. Choose **Sound on** to mute at any time. The recording is peak-normalized in memory, with a compressor controlling peaks; the original MP3 is unchanged. The default volume is 70%. The recording loops and gradually increases in gain through Year 10, relative to the volume slider. Mute and motion controls are always available. Audio fades out at the ending and when the tab is hidden. Restart resets construction and audio.

One massive data center is constructed in Year 1 and operates from Year 2 onward with the same footprint. Over ten years, the surrounding town shows rising electricity costs, water restrictions, pollution concerns and later fictional creek findings, housing pressure, and displacement. A cumulative observations panel keeps these burdens visible. Animations include construction cranes in Year 1, cooling fans, water, residents, and moving trucks later. Reduced-motion preferences are respected.

The scenario retains the original decision scores and four endings. Numbers, characters, and outcomes are fictional teaching material, not a predictive model or sourced case study. The supplied recording is an illustrative sound effect, not a measurement of real-world exposure.

## Validation

Verified in headless Chromium at desktop and mobile sizes: eleven decision screens, all reachable score states and four reachable endings, restart reset, decoded/looping audio in Year 2, no runtime errors, and no horizontal overflow at 390px.

The timeline runs from the Year 0 announcement to Year 10 (ten elapsed years, eleven decisions). Years 6–10 add water allocation, electricity costs, public monitoring, housing, and a final oversight vote. Audio validation checks decoded peak normalization, rising gain in Years 2–10, mute, ending fade, and restart silence.

## Decision-specific scenes

Decision 4 clears the clouds for a pulsing sun, a large billowing smoke plume, and angry residents. Decision 5 sends two packed family cars and two moving trucks away at staggered times and boards up four homes chosen once per run. Decision 6 sends five more moving trucks, boards four additional homes, and thins both crowds. Decision 7 increases the town-hall crowd and lowers the water over 18 seconds. Decision 8 increases the CloudCore crowd and deteriorates two closed homes. Decision 9 deteriorates two more homes, increases the protest, and turns the already-low water brown over 22 seconds. These conditions persist into Decisions 10–11. Restart clears them. Pausing freezes animation; reduced-motion mode presents the settled water state.
