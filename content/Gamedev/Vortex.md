---
title: Vortex - An Arcade Space Game for Ludum Dare 50
date: 2022-04-30
tags:
  - gamedev
---
![Cover](../Assets/vortex/cover.png)

I made **Vortex** for Ludum Dare 50. The theme was "Delay the inevitable," which I interpreted as surviving as long as possible while the sun's gravity pulls a constant stream of meteors toward you.

The game is built in Unity, but I wanted to do something a bit extra for the leaderboard. Instead of using a third-party service, I built a small backend in TypeScript (Express.js) and a MongoDB database, hosted on Render. It handles score persistence and exposes a REST API that the game talks to.

I also spent some time in Unity's Shader Graph to create a starfield effect with fading stars. It’s a simple parallax effect, but it adds a lot to the "space" feel.

It was a fun 48-hour sprint, and I'm happy with how the final version turned out.

<div style="text-align: center; margin: 20px 0;"><a href="https://davidjs.itch.io/vortex" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">Play Vortex on Itch.io</a></div>

**Screenshots:**

![Image of the player ship flying through a field of meteors](vortex_1.png)
![Image of the leaderboard screen](vortex_2.png)

<div style="text-align: center; margin: 20px 0;"><a href="https://github.com/daviddiener/vortex" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">Unity Source on GitHub</a></div>

<div style="text-align: center; margin: 20px 0;"><a href="https://github.com/daviddiener/vortex-backend" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">Backend Source on GitHub</a></div>
