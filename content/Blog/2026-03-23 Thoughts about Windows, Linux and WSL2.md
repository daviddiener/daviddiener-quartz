---
title: Thoughts about Windows, Linux and WSL2
date: 2026-03-23
tags:
  - swe
draft: false
---
After years of switching between dual boots, Linux only and Windows only, my development environment has (temporarily?) settled into a middle ground that works for both my professional and personal projects. Here some of my history with Linux and how I currently use WSL2 to keep my main Windows system clean.

## My history with Linux so far

Ever since I started tinkering around with computers I was constantly shifting my main Desktop OS from Windows to Linux.

- Ubuntu: An old Laptop running Ubuntu with Gnome. I guess I was around 10 years old when my parents gave me this laptop. There was this game called [Robots](https://wiki.ubuntuusers.de/Spiele/Robots/) that scared me a lot because of the unexpectedly loud sound when the robots got you.  
- Ubuntu Dual Boot: I had this on my Desktop PC for a long time in my teenage years and gained a lot of experience with the OS.
- Kali Linux: Right after I watched Mr. Robot
- Arch Linux: When I had to much free time while studying
- Ubuntu on WSL2: Ever since WSL2 launched back in 2019

And then every since I used WSL2 I never really had the need to switch to a full Linux Desktop environment or a dual boot anymore. That does not mean that I don't have the urge to do it. My life is just easier with Windows as the main OS, mainly because
- Game Development is still Windows centric (even though Linux lately breaks record after record on Steam usage statistics)
- Some proprietary software is holding me back
	- The [BBSR Druckapplication](https://github.com/BBSR-GEG-Portal/druckapplication-fuer-energieausweise) (that we heavily leverage at enarQ)
	- The official German Ausweis App is Windows only (there is however a Linux port available but I didn't try that out yet)

My job at Bosch also requires me to use Windows, mainly because we support Beckhoff PLCs in [HMInow](https://www.hmi.now/), and its kind of mandatory to have the TwinCAT (The **Windows** Control and Automation Technology) runtime available at all times for testing. Of course that's one a whole different device than my personal laptop but I like to commit to one Desktop OS overall. 

## WSL2 as isolated environments

Now that we have such excellent WSL2 support on Windows I like the idea to just install all my development tools into the isolated WSL2 Ubuntu instance, so I don't clutter my main host OS. So that's why all my development tools like node (incl. global packages), Hugo, Go, Rust , ... now live inside a WSL2 instance. 

Lately I also did a lot of switching between different LLM Client CLIs like OpenCode and Gemini CLI. Those isolated WSL2 were also great to play around with global configs. And when the installation is messed up completely, I can just delete it and spin up the next Ubuntu instance.
## Working with multiple WSL2 instances 
After reading this comment section about the [WSL manager](https://news.ycombinator.com/item?id=47299505)on Hackernews, I started messing around with multiple WSL2 instances in parallel. To save yourself from setting up all your base tools again and again you can symlink your configs across instances or from your windows host into the WSL2 instance:

```bash
ln -s /mnt/c/Users/david/.gemini ~/.gemini
```

Thats how I keep my Gemini CLI config up to date in all my development environments.