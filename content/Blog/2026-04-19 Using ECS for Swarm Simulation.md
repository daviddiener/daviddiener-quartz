---
title: Using ECS for Swarm Simulation
date: 2026-04-19
tags:
  - gamedev
  - god-series
draft: false
---

Back in 2023 I had the idea to create an [Auralux](https://www.reddit.com/r/Auralux/)inspired video game based on the [Bevy](https://bevy.org/)game engine. Bevy is a data driven game engine, using ECS (Entity-Component-System).

I made the inital commit on this project back in 2023 
with Bevy 0.12 to establish the basic spawning and movement logic of the "ships". My first draft of the game looked like this:

![[astreus_initial.mp4]]

Since then, the engine matured a lot with the recent Version being Bevy 0.18. I just migrated from 0.12 to 0.18 and made a overhaul of the games visuals. I introduced a lot of neon colors to move more into a Synthwave / 80s arcade style art direction:

![[astreus_visual_overhaul.mp4]]

For the simulation logic, I tested how ECS handles different entity behaviors at scale. In my Inspiration *Auralux*, you start with some planets that constantly pump out units. You then have to capture neutral or enemy planets and use some kind of strategy to produce more units than the enemy player to overthrow them.  

Instead of building out a full AI or campaign, I used the project as a sandbox to prototype specific systemic interactions. The final iteration of this demo introduced a lane system and different node types to test component queries. For example, *Extractor* planets produce units, while *Mixer* planets query for two different colored incoming units and convert them into a new color:

![[astreus_lanes.mp4]]

Overall, this project served as a great testing ground for getting comfortable with Bevy's ECS patterns and handling large amounts of moving entities cleanly.