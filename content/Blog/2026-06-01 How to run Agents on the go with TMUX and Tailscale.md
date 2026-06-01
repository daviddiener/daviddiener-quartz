---
title: How to Run Agents on the Go with TMUX and Tailscale
date: 2026-06-01
tags:
  - swe
  - linux
  - agentic_engineering
draft: false
---

I recently came across [happy](https://github.com/slopus/happy), a tool that lets you interact with AI agents via your phone. While it's a cool project, it currently only supports Gemini 2.5, and I guess the Gemini CLI integration will be completely worthless as the Gemini CLI will join [Googles Graveyard](https://killedbygoogle.com/) in favour of the Antigravity CLI anyways. However, it got me thinking about how I've been managing my own agentic sessions lately - especially when I'm away from my desk.

It turns out that the best way to run agents on the go for me isn't a new app, but rather a combination of two existing tools: **TMUX** and **Tailscale**.

I'm not the only one rediscovering this pattern. I recently read an [article by Simon Willison](https://addxorrol.blogspot.com/2026/03/slightly-safer-vibecoding-by-adopting.html) that perfectly captures why this old hacker habit is making a comeback in the age of LLMs:

> I mainly switched to that development model because I almost always need long-running compute and was travelling a lot, and with agent-first development the model is seeing a bit of a resurgence.

## Running the Harness in TMUX

In my last post, I talked about my [[2026-03-23 Thoughts about Windows, Linux and WSL2|transition from WSL2 to a native Ubuntu dual-boot]]. Now I'm running Linux full-time for development.

The core of this "remote agent" workflow is [TMUX](https://github.com/tmux/tmux). I start my Gemini CLI sessions inside a TMUX window. The idea is that this allows the agent to keep working on long-running tasks - like refactoring a large module or running a complex test suite - even if my local terminal session closes.

```bash
# Start a new session for my current project
tmux new -s nordustry
# Run the Gemini CLI
gemini
```

If you have an always-on home server, you can run your sessions there. This ensures your agents are literally working 24/7 without being tied to wether your  laptop is powered on at all.

## Accessing TMUX via Tailscale

This is where [Tailscale](https://tailscale.com/) comes in. Tailscale creates a secure, private network between all my devices. My Ubuntu laptop, my Ubuntu home server, and even my Pixel phone are all part of it.

If I'm outside, I can simply open an SSH client on my phone (I use Termius), connect to my laptops's Tailscale IP, and attach to the existing TMUX session:

```bash
tmux attach -t nordustry
```

This way I can use the whole feature set of the harness, right now Gemini CLI. If I need to switch to OpenCode, Claude Code, or anything else, its not a problem because after all we are just using the bash via SSH.

## When It Works (and When It Doesn't)

This workflow is a dream for web projects where I have a solid staging CI/CD pipeline. I can let the agent push changes to a branch, let the CI deploy it, and then check the results on my phone.

However, it hits a wall with projects that require a heavy GUI or local IDE interaction. My current main project, **Nordustry** (a factory simulation built with **Godot .NET**), is a good example. While the agent can write the C# scripts remotely, I still need to be back at my main keyboard eventually to test the game.

Despite the convenience of checking in via my phone, I always follow my core rule: **I only commit when I'm back at the keyboard.**

As I stated in [[2026-03-20 My Agentic Engineering Workflow In Early 2026|My Agentic Engineering Workflow]], I maintain strict control over my Git worktree. The remote TMUX session is for leading the agent through planning and editing phased, but the reviewing and committing happens when I have a full screen and full focus.