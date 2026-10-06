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

The Erodium seed drills itself into soil by unwinding a helical stalk. We built mechanics models of this process and used them to design a three-tailed wood-based seed carrier that outperforms the natural version across many soil types. A flat pasta groove story follows the same logic: the right groove geometry makes flat dough curl into a specific 3D shape when cooked.

{{< fig src="img/research/morphing-pasta.jpg" alt="Flat pasta morphing into 3D shapes as it cooks in water" caption="Grooved flat pasta morphs into 3D shapes as it cooks. *Science Advances* cover (2021)." width="420" >}}

{{< keypapers >}}*Nature* (2023) · *JMPS* (2024) · *Device* (2026) · *JAM* (2026){{< /keypapers >}}

---

## Interfaces and soft matter {#interfaces}

How a surface sticks, releases, and interacts with liquids depends on its geometry at small scales. We study wrinkled, grooved, and patterned surfaces to understand these interactions and control them. This includes how droplets behave at the tips of fibers, how soft pillars adhere and detach, and how surface topography can be actively changed by a magnetic field.

These problems connect to real applications: coatings that resist bacterial growth, soft robots that grip and release objects, and bio-hybrid devices that work in wet environments.

{{< fig src="img/research/rod-droplet-wrapping-sequence.jpg" alt="Time sequence of an elastic rod wrapping around a liquid droplet, from 0 to 1.33 seconds" caption="An elastic rod wraps around a liquid droplet (0 to 1.33 s), simulated with a coupled lattice–particle model." width="760" >}}

{{< keypapers >}}*Advanced Functional Materials* (2023) · *Physical Review Fluids* (2025){{< /keypapers >}}

---

## Biological systems and bioinspired mechanics {#biological}

Some of our work takes biology as the starting point for engineering design. Some takes biology as the subject itself.

On the engineering side: the Erodium seed, millipede locomotion, and the Venus flytrap have all shaped how we think about morphing and actuation. These organisms solved hard mechanical problems over millions of years. We try to extract the principles and put them to work.

{{< fig src="img/research/seed-carrier-sim-vs-experiment.jpg" alt="Erodium-inspired seed carriers drilling into soil, with matching simulations below" caption="Erodium-inspired seed carriers drilling into soil over 75 minutes (top) and the corresponding simulations (bottom). *Nature* (2023)." >}}

On the science side: we are building mechanics models of somite formation — the process by which the vertebral column segments during embryonic development. The biochemistry of this process is fairly well understood, but the role of mechanical forces is not. We work closely with stem cell biologists on this. It is a new direction for our group, and one we find genuinely exciting.

A third thread, in collaboration with Syracuse and ETH Zürich, uses magnetically driven surface topographies to fight bacterial biofilms on medical implants. A related project contributed to a soft robotic trunk, inspired by an elephant's, that helped a stroke patient open a cabinet and retrieve items from a refrigerator.

{{< keypapers >}}*Nature Communications* (2026) · *Advanced Functional Materials* (2025) · NSF CMMI (2025–2028){{< /keypapers >}}

---

## Human–AI research in mechanics {#human-ai}

{{< eyebrow >}}Across all three themes{{< /eyebrow >}}

*AI can do more of the workflow. Verification determines how much we should trust it.*

AI agents can increasingly write scientific code, operate simulation tools, and analyze results. But producing a plausible result is different from producing a trustworthy mechanics result. We study how AI can be integrated into computational mechanics while keeping the models, assumptions, numerical evidence, and verification accessible to researchers.

Our work focuses on human-verifiable workflows. An AI agent may help formulate a model, implement it, run simulations, compare alternatives, or diagnose problems, while independent checks are used to test whether the result is mechanically and numerically sound. The goal is not to replace mechanics expertise, but to change where researchers spend their effort: less on routine implementation and more on modeling choices, verification, interpretation, and new scientific questions.

We are developing open computational tools and benchmark problems to study these workflows in finite-element, multiphysics, and related simulations. A particular interest is making scientific software easier for both people and AI agents to use: clear interfaces, reproducible examples, traceable evidence, and verification built into the workflow.

### Where the evidence is

Each item below links to public code and records, so the claims can be checked rather than taken on trust.

- **Lessons from practice.** [ai-mechanics-resources](https://github.com/tengzhang48/ai-mechanics-resources) documents human–AI research across several mechanics projects, including failures, retractions and open claims. Its evidence is case-based; it is not a measurement of how often a failure occurs.
- **Nonlinear analysis with an explicit claims record.** Two 2026 manuscripts, one under review on [period doubling and quadrupling of wrinkles](https://github.com/tengzhang48/nonlinear-symplectic-wrinkle-bifurcations) and one under revision on [constrained crack-tip fields in a Mooney–Rivlin sheet](https://github.com/tengzhang48/nonlinear-symplectic-mooney-rivlin-crack-tip), were carried out as human–AI collaborations. Their companion repositories ship claims ledgers, verification tests and figure-generation records, and the wrinkle study publishes its [process and lessons](https://github.com/tengzhang48/nonlinear-symplectic-wrinkle-bifurcations/blob/main/PROCESS_AND_LESSONS.md), wrong turns included.
- **Code generation with layered verification.** [abaqus_ufl](https://github.com/tengzhang48/abaqus_ufl), described in [*Extreme Mechanics Letters* (2026)](https://doi.org/10.1016/j.eml.2026.102530), turns constitutive-model and element declarations written in Python into inspectable Abaqus UMAT/UEL Fortran, and checks the generated code against independent references, with [public benchmark results](https://tengzhang48.github.io/abaqus_ufl/#livebench). A [case study](https://github.com/tengzhang48/ai-mechanics-resources/blob/main/case_studies/abaqus_ufl.md) records how AI systems contributed to its development.
- **A worked simulation example.** In a [public example](https://github.com/tengzhang48/CoupFE-EDA/tree/main/examples/stacked_memory_package) developed with an AI coding agent (credited in its commit history) on the [CoupFE](https://github.com/tengzhang48/CoupFE) finite-element scaffold, a synthetic 90-body electronic package goes from CAD to heat conduction and thermoelastic warpage. A separately written FEniCSx implementation, sharing only the mesh and the declared model, reproduces every reported field to within 5 × 10⁻¹⁰ relative difference, against tolerances fixed before the comparison ([comparison record](https://github.com/tengzhang48/CoupFE-EDA/blob/main/examples/stacked_memory_package/fenicsx_verification/COMPARISON.md)). This verifies the implementation for that declared model; it does not validate the model against a physical package.

{{< fig2 src1="img/research/package-heat-warpage.png" alt1="Two package designs on one mesh: peak die temperature 76.2 versus 60.5 degrees Celsius, and substrate warpage 3.91 versus 1.90 micrometres" src2="img/research/package-fenicsx-verification.png" alt2="Histograms of the difference between CoupFE and an independent FEniCSx solve for temperature, displacement and von Mises stress, all far below the predeclared 1e-5 tolerance, and a stress parity plot on the diagonal" caption="The worked example. Left: two thermal-interface materials compared on one mesh, giving peak die temperatures of 76.2 and 60.5 °C and substrate warpage of 3.91 and 1.90 µm. Right: the independent check, with every CoupFE–FEniCSx difference far below the predeclared 10⁻⁵ tolerance (dashed lines). Figures from the [public example](https://github.com/tengzhang48/CoupFE-EDA/tree/main/examples/stacked_memory_package)." >}}
