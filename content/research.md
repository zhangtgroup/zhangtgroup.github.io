---
title: "Research"
layout: "research"
---

# Research

We use mechanics as an enabling tool — drawing on biological observation, building theoretical and computational models, and translating those models into engineered systems. The three scientific themes below describe our current work. They are connected: many projects cross more than one theme.

Running across all three is a methodological effort on [human–AI research in mechanics](#human-ai): how AI agents can take on more of the computational work while the evidence and verification stay visible to researchers.

---

## Morphing structures and reconfigurable systems {#morphing}

Many structures in nature can snap between shapes, hold a position without power, and switch states on command. We want to understand why — and use that understanding to build things. Our main tool is computational modeling. We developed a method that maps out the energy landscape of an elastic structure, revealing all its stable states and the paths between them. This lets us design structures that switch reliably rather than by trial and error.

We extended this to magnetic systems. A magnet embedded in a soft structure changes how it deforms. We built simulation tools that capture this coupling efficiently, and used them to design ribbon arrays that flip between multiple shapes under a remote magnetic field — with no wires, no motors, and no continuous power. One application is programmable liquid manipulation for diagnostics.

{{< fig class="fig-right" src="img/research/morphing-pasta.jpg" alt="Flat pasta morphing into 3D shapes as it cooks in water" caption="Grooved flat pasta morphs into 3D shapes as it cooks. *Science Advances* cover (2021)." >}}

The Erodium seed drills itself into soil by unwinding a helical stalk. We built mechanics models of this process and used them to design a three-tailed seed carrier made from wood veneer; on flat ground it drills in 80% of the time, where natural Erodium seeds fail. A flat pasta groove story follows the same logic: the right groove geometry makes flat dough curl into a specific 3D shape when cooked.

{{< keypapers >}}*Nature* (2023) · *JMPS* (2024) · *Device* (2026) · *JAM* (2026){{< /keypapers >}}

---

## Interfaces and soft matter {#interfaces}

How a surface sticks, releases, and interacts with liquids depends on its geometry at small scales. We study wrinkled, grooved, and patterned surfaces to understand these interactions and control them. This includes how droplets behave at the tips of fibers, how soft pillars adhere and detach, and how surface topography can be actively changed by a magnetic field.

These problems connect to real applications: coatings that resist bacterial growth, soft robots that grip and release objects, and bio-hybrid devices that work in wet environments.

{{< fig src="img/research/rod-droplet-wrapping-sequence.jpg" alt="Time sequence of an elastic rod wrapping around a liquid droplet, from 0 to 1.33 seconds" caption="An elastic rod wraps around a liquid droplet (0 to 1.33 s), simulated with a coupled lattice–particle model." >}}

{{< keypapers >}}*Advanced Functional Materials* (2023) · *Physical Review Fluids* (2025){{< /keypapers >}}

---

## Biological systems and bioinspired mechanics {#biological}

Some of our work takes biology as the starting point for engineering design. Some takes biology as the subject itself.

On the engineering side, natural systems such as the Erodium seed have shaped how we think about morphing and actuation. They solved hard mechanical problems over millions of years; we try to extract the principles and put them to work.

{{< fig src="img/research/seed-carrier-sim-vs-experiment.jpg" alt="Erodium-inspired seed carriers drilling into soil, with matching simulations below" caption="Erodium-inspired seed carriers drilling into soil over 75 minutes (top) and the corresponding simulations (bottom). *Nature* (2023)." >}}

On the science side: we are building mechanics models of somite formation — the process by which the vertebral column segments during embryonic development. The biochemistry of this process is fairly well understood, but the role of mechanical forces is not. We work closely with stem cell biologists on this. It is a new direction for our group, and one we find genuinely exciting.

A third thread uses magnetically driven surface topographies to fight bacterial biofilms on medical implants. A related project contributed to a soft robotic trunk, inspired by an elephant's, that helped a stroke patient open a cabinet and retrieve items from a refrigerator.

{{< keypapers >}}*Nature Communications* (2026) · *Advanced Functional Materials* (2025) · NSF CMMI (2025–2028){{< /keypapers >}}

---

{{< eyebrow >}}Across all three themes{{< /eyebrow >}}

## Human–AI research in mechanics {#human-ai}

AI agents can now write scientific code, operate simulation tools, and analyze results. But a plausible result is not the same as a trustworthy mechanics result. We study how to bring AI into computational mechanics while keeping the models, assumptions, numerical evidence, and verification visible to researchers: AI can do more of the workflow, and verification determines how much we should trust it.

In this way of working, an agent helps formulate, implement, run, and diagnose a model, while independent checks test whether the result is mechanically and numerically sound. Researchers spend less effort on routine implementation and more on modeling choices, verification, and interpretation. Our two 2026 manuscripts on nonlinear symplectic analysis, one under review and one under revision, were carried out as human–AI collaborations, and the lessons, failures included, are documented in [ai-mechanics-resources](https://github.com/tengzhang48/ai-mechanics-resources).

We are developing open tools for these workflows, including the [CoupFE](https://github.com/tengzhang48/CoupFE) finite-element scaffold and [abaqus_ufl](https://github.com/tengzhang48/abaqus_ufl), which generates inspectable Abaqus user subroutines and checks them against independent references.

{{< fig src="img/research/package-heat-warpage.png" alt="Two package designs on one mesh: peak die temperature 76.2 versus 60.5 degrees Celsius, and substrate warpage 3.91 versus 1.90 micrometres" caption="Example: a 90-body electronic package, from CAD to heat and warpage, developed with an AI coding agent. A separately written FEniCSx solver reproduces every field to within 5 × 10⁻¹⁰ relative difference ([public example and comparison record](https://github.com/tengzhang48/CoupFE-EDA/tree/main/examples/stacked_memory_package))." >}}

{{< keypapers label="Open code" >}}[ai-mechanics-resources](https://github.com/tengzhang48/ai-mechanics-resources) · [CoupFE](https://github.com/tengzhang48/CoupFE) · [abaqus_ufl](https://github.com/tengzhang48/abaqus_ufl) · [CoupFE-EDA](https://github.com/tengzhang48/CoupFE-EDA){{< /keypapers >}}

---

{{< anchor "funding" >}}

{{< keypapers label="Funding" >}}National Science Foundation: CAREER Award [1847149](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1847149) (mechanics of interfaces in soft materials) · [2020476](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2020476) (multistable structures) · [2428643](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2428643) (bioinspired seeding) · [2517722](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2517722) (tissue boundary formation){{< /keypapers >}}
