# The Data Center Next Door
## Project Summary and Development Process

**Educational context:** This is an educational simulation for the **Critical Studies Program at the California College of the Arts**, developed for the **Social Problems course, Fall 2026**.

**Coding credit:** This simulation is coded by **Maxwell Leung, Ph.D., with the assistance of GPT-6 Astra**.

**Project date:** September 5, 2026

## Purpose

*The Data Center Next Door* invites students to consider how the operation of one massive data center can affect a community over time. Set in the fictional community of Crystal Valley, the simulation follows residents through a decade of decisions concerning CCACore Industries and the social consequences of its facility.

The project connects classroom discussion of social problems to an interactive experience. Students encounter promises of jobs and tax revenue alongside rising electricity costs, pressure on water supplies, persistent noise, pollution, housing insecurity, and displacement. They consider how residents respond individually and collectively, and how institutional and corporate power shape the choices available to them.

This is a fictional educational scenario. Its figures and outcomes are illustrative, not predictions. It is not an empirical model, a documented case study, or a measurement of environmental exposure.

## Starting Point and Design Direction

The project began with an existing browser-based simulation featuring an abstract, dark 3D environment, six decisions, and a five-year timeline. The initial revision replaced that environment with an animated pixel-art town inspired by a supplied image of a mountainous waterfront community.

The new design established a recognizable place before introducing industrial development. Mountains, water, homes, a town hall, residents, and a central field gave students a community to follow as the story unfolded. A two-column layout placed the animated town beside the narrative and decision choices.

During development, the timeline expanded to ten elapsed years. An early visual approach showed additional data centers appearing each year. This was revised to focus on **one massive facility**: construction occurs in Year 1, operations begin in Year 2, and the building retains the same footprint thereafter. The surrounding community changes as the burdens of its operation accumulate.

## Visual Development

The finished town is drawn locally in a low-resolution HTML canvas and displayed with crisp pixel scaling. Its animations include moving clouds and water, construction cranes and workers, cooling fans, residents, vehicles, and protests.

Specific scenes were developed to reinforce the narrative:

- **Decision 4, The Incident:** Clouds clear, a bright sun animates overhead, a large smoke plume rises from the facility, and angry residents gather.
- **Decision 5, The Reckoning:** Two family cars carrying belongings and two moving trucks depart at staggered times. Four randomly selected homes are boarded up and marked for sale.
- **Decision 6, The Crossroads:** Five additional moving trucks leave, four more homes close, and crowds at the facility and town hall become smaller.
- **Decision 7, The Water Budget:** More angry residents gather at town hall while the water level gradually drops over approximately 18 seconds.
- **Decision 8, Who Pays for the Grid?:** The crowd outside the facility grows, and two previously closed homes deteriorate.
- **Decision 9, What Is in the Water?:** The water remains low and gradually turns brown over approximately 22 seconds. Two additional homes deteriorate, and the protest grows.
- **Decisions 10 and 11:** The accumulated visual conditions persist.

Homes are selected once per run so their closure and deterioration remain consistent. A “Toll over time” panel tracks the scenario’s observations about electricity, water allocation, water quality, housing, and displacement.

## Sound Development

The supplied `hum.mp3` recording provides the data-center sound. Entering the simulation enables browser audio, while Years 0 and 1 remain silent. The hum begins when cooling systems start in Year 2, loops continuously, and increases in playback intensity through Year 10.

Initial testing and feedback identified two problems: sound was muted by default, and its initial playback level was too low. The implementation was revised to enable audio through the entry button, normalize the recording in memory, raise playback levels, and use compression to control peaks. The original audio file remains unchanged.

The interface includes mute and volume controls. Audio fades out at the ending and when the browser tab is hidden. Restarting resets the audio to the silent opening phase.

The on-screen disclaimer credits the supplied audio to a data center in Dowagia, Michigan, with the source link provided during development: [Data-center audio source](https://youtu.be/40u7nRi-yuw). This attribution was supplied for the project and was not independently verified during implementation. Playback intensity is a dramatic effect and does not represent accurate decibel levels.

## Narrative and Decision Structure

The final experience spans the Year 0 announcement through Year 10, giving students **eleven decisions over ten elapsed years**:

1. **The Announcement:** Promised employment and revenue meet residents’ concerns.
2. **Groundbreaking:** Construction disrupts daily life and raises questions about water and jobs.
3. **The Hum:** Around-the-clock operations introduce persistent noise and cooling demands.
4. **The Incident:** A grid emergency, generator emissions, and a coolant leak intensify concern.
5. **The Reckoning:** Corporate public relations unfold alongside housing pressure and eviction.
6. **The Crossroads:** Higher operating demands compound household costs and community exhaustion.
7. **The Water Budget:** Household conservation requirements collide with industrial water allocations.
8. **Who Pays for the Grid?:** Residents question the costs and priorities of additional electrical infrastructure.
9. **What Is in the Water?:** Testing raises questions about contamination, access to information, and cleanup.
10. **A Town That Can Stay:** Housing affordability and the return of displaced residents become central concerns.
11. **The Ten-Year Vote:** Residents consider who will have a voice in the community’s next decade.

Maxwell Leung supplied revised narration for every decision and revised selected response options. These edits were incorporated incrementally, one decision at a time. Shared labels were changed to Crystal Valley and CCACore, the navigation was personalized as “MAX'S LAB | SEPTEMBER 5, 2026,” and a blinking red indicator was added beside “LIVE FROM CRYSTAL VALLEY.”

Later editorial changes replaced references to “collective efficacy” with **“social mobilization”** and rewrote em-dash passages as complete sentences or with conjunctions. The explanatory text was also adjusted to describe bringing people, networks, and resources together for collective action toward shared goals.

## Outcomes and Classroom Reflection

Choices affect three internal scores: community solidarity, environmental health, and institutional power. These scores determine one of four narrative endings:

- **The Organized Community**
- **The Sacrifice Zone**
- **The Gentrified Enclave**
- **The Managed Decline**

The outcomes support discussion rather than forecast what would happen in a real community. Most of the town’s visual changes follow the authored timeline; they are not a separate environmental model driven by the scores.

The concluding classroom questions ask students to consider consequential choices, social mobilization, corporate power, and the relationship between individual decisions and structural forces. The simulation provides a starting point for examining who benefits, who bears costs, and whose participation matters in public decision-making.

## Implementation and Verification

The simulation uses HTML, CSS, and JavaScript. The original 3D rendering dependency was removed, and the town is drawn with the browser’s built-in canvas functionality. The project runs on the existing local server at `http://localhost:8000`.

Development checks covered:

- Progression through all eleven decision screens.
- Reachability of all four endings through the score system.
- Audio loading, looping, increasing gain, mute behavior, ending fade, and restart silence.
- Persistent home closure and deterioration counts.
- Changing crowd sizes and water transitions.
- Restart behavior and animation pause controls.
- Desktop and mobile layout, including horizontal-overflow checks.
- JavaScript syntax and browser runtime errors during functional checks.

Motion controls allow animations to pause. Reduced-motion preferences are respected, with settled water conditions displayed when appropriate. Later text revisions were checked for JavaScript syntax after insertion.

## Final Project Files

Old source backups and unused folder metadata were removed after the simulation was completed. The project contains:

| File | Purpose |
| --- | --- |
| `index.html` | Page structure, interface labels, and educational disclaimer |
| `style.css` | Layout, visual styling, responsive behavior, and live-indicator animation |
| `app.js` | Narrative, choices, scoring, endings, pixel-art rendering, animations, and audio behavior |
| `hum.mp3` | Supplied data-center hum recording |
| `README.md` | Local setup and implementation notes |
| `PROJECT_SUMMARY.md` | This development summary and educational attribution |

## Educational Attribution

**The Data Center Next Door is an educational simulation for the Critical Studies Program at the California College of the Arts, for the Social Problems course, Fall 2026. This simulation is coded by Maxwell Leung, Ph.D., with the assistance of GPT-6 Astra.**
