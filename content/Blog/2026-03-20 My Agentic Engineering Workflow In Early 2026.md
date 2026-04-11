---
title: My Agentic Engineering Workflow In Early 2026
date: 2026-03-20
tags:
  - agentic_engineering
  - swe
draft: false
---

There is a big difference between letting an AI agent write code for you (*vibe coding*) vs. an AI agent to help you engineer software (*agentic engineering*). Here is what my daily agentic engineering workflow looks like.
### High Level Planning 
To keep track of the overall architecture of my projects I keep a Gemini Gem where all relevant project context files go. This means connecting all relevant repositories and documents so it knows the current state of the code and the requirements altogether. This is especially useful for domains I am just getting into. I use this for 
- high level architecture brainstorming
- questions about best practices
- question about technical limitations 
### Always use AGENTS.md or a similar equivalent

The first thing I do after initializing a fresh git repository is to create the AGENTS.md. I currently use AGENTS.md in favour of GEMINI.md, CLAUDE.md,  .github/copilot-instructions.md (what a bad name 🫥), ... or whatever else is out there. 

This currently works across GitHub Copilot, OpenCode, and the Gemini CLI (though I had to configure the filename in my settings.json).

In general, using AGENTS.md as the file name makes limited sense, because the support is not there yet for all of the different CLI's. But as I am mainly switching between Gemini CLI, Copilot and OpenCode anyways, it works for me. 
### Use planning mode extensively before almost any prompt

This gives you the chance to steer the implementation to the exact outcome that you want.

![[Pasted image 20260411200813.png]]

In the Gemini CLI thats just shift+tab. I also like to encourage the agent to ask questions with something like **"feel free to asks me any questions about XYZ, that we need to clear up first"**. This way he will most often ask me a few question.

![[Pasted image 20260411201155.png]]

I think its the shared understanding between user and agent which gives much better result in the implementation phase.
### Cross Repo References
Use the `/dir add`  command (in Gemini CLI) to cross reference a relevant repo.

```bash
/dir add ../my/super/related/repository
```
### Constant git work tree control

One of my favorite blog post I read lately is [Simon Willison's piece about Agentic Engineering Patterns ](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/). He explains what separates vibe coding and agentic engineering:

>I think of vibe coding using its original definition of coding where you pay no attention to the code at all, which today is often associated with non-programmers using LLMs to write code. [...] Agentic Engineering represents the other end of the scale: professional software engineers using coding agents to improve and accelerate their work by amplifying their existing expertise.

And that resonates a lot with me as I think that one of the main skills in software engineering, and more specific when producing code, is to have complete control over what enters and leaves the codebase - so, *pay attention to the code*.

This is why its mandatory to always check the git diffs that the agent produces. I mostly use the git integration of Visual Studio Code to constantly check the diffs. Everything that is reviewed is staged or commited away, so If the agent makes another change to the same piece of code we will notice.

![[Pasted image 20260411203218.png]]

Controlling the git worktree yourself also makes in mandatory to forbid the execution of all git commands that do any kind of write operations. That means that stuff like `git commit`, `git push`and `git add` are forbidden, while explorative tools like `git log` should still be allowed.

### Conclusion
Now at the end of writing this post, I noticed I did not even touch the topic of MCPs. I really only ever use the quite popular Context7 MCP. Other than that I feel the importance of MCP not really holding up to the hype that we still had last year when they came up. 

Now thats my current setup. Feel free to read about my other post related to [software engineering](#swe) and lets see how the state of agentic engineering will change throughout the rest of the year :) 