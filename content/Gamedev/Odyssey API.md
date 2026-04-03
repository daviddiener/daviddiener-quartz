---
title: Launch Day! - Introducing the Odyssey REST API
date: 2024-02-10
tags:
  - webdev
  - gamedev
---
![Cover](../Assets/odyssey_api/cover.png)


I’ve reached a major milestone with Odyssey: the REST API is finally live and ready to use.

## What is Odyssey?

If you missed my [previous post](https://www.daviddiener.de/posts/odyssey/), Odyssey is a project where I’m blending MUD, simulator, and RPG elements into a web-based world. It’s my personal playground for procedural generation and web experimentation.

## The Frontend is just a Reference

While there is a [working frontend](https://odyssey.daviddiener.de/), I don't really consider it the "final" version of the game. Instead, it’s more of a reference implementation to show what’s possible with the API. My real goal is to provide a solid backend that other developers can use to build their own clients, tools, or unique experiences.

<div style="text-align: center; margin: 20px 0;"><a href="https://github.com/daviddiener/OdysseyFrontend" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">View Odyssey Frontend on GitHub</a></div>

## Opening up the API

By opening up the Odyssey REST API, I’m making the entire virtual universe accessible. You can fetch region details, manage character attributes, and interact with basically every part of the game logic. I’m really curious to see if anyone actually builds something with it.

## A Note on Hosting

One quick heads-up: the API is currently running on Render’s free tier. This means it might take a few seconds to "wake up" if it hasn't been accessed in a while. I’ve experimented with a self-hosted solution, but for the current scale, this is the most practical setup. I’ll look into upgrading if the traffic ever demands it.

## Getting Started

If you want to poke around, the API documentation is live. It covers all the endpoints and should give you everything you need to start building.

<div style="text-align: center; margin: 20px 0;"><a href="https://www.daviddiener.de/odyssey_api/" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">View the API Docs</a></div>
