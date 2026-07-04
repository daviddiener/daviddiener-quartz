---
title: Nordustry - A Data-Oriented Factory Game
date: 2026-06-25
tags:
  - gamedev
  - nordustry
---
![Cover](AAA_Meta/attachments/nordustry/cover.png)

<iframe frameborder="0" src="https://itch.io/embed/4717542" width="552" height="167"><a href="https://davidjs.itch.io/nordustry">Nordustry by david.js</a></iframe>

Nordustry is a real-time factory simulation game I'm building in Godot. The core idea is to build massive factories across the procedurally generated 9 Worlds of the nordic mythological worlds. 

Building a factory game that can scale infinitely is a huge technical challenge. If you try to use standard game engine objects for every single conveyor belt and item, the framerate will eventually tank. 

To solve this, I had to completely rethink how the game handles data. Coming from a Bevy ECS project ([[2026-04-19 Using ECS for Swarm Simulation]]), I understood that the key is not **ECS** (Entity-Component-System), but **DOD** (Data-Oriented Design). After all this is what my big inspiration Factorio uses. Wube, the developers of Factorio even mention this in a [blog post I found  ](https://forums.factorio.com/viewtopic.php?p=594414#p594414). One of the staff, **Twinsen**, wrote: 

> I know a bit about ECS and I can say Factorio is not doing it.  
> We didn't really follow any frameworks/paradigms except OOP and some C++ practices.  
> Afaik DOTS is quite new. I never heard of Bevy. ECS is very popular but afaik it became popular within the last 5-8 years. Factorio started development 11 years ago.  
>   
> We get high performance because:  
> 1. We always focus on it. For almost every implementation detail we ask "what about performance?".  
> 2. We code at a fairly low level, in C++. High level frameworks can easily make you forget about the basics like cache locality, context switching, branch prediction, avoiding unnecessary copying of data.  
> 3. We try to use the correct data structures for performance.  
> 4. We break OOP or clean code practices for the sake of performance, if necessary. The most common trade-off I see when writing code is do we want it simple, understandable, clean and respecting OOP or do we want it performant?  
> 5. We profile a lot. Even with all of the above in mind, sometimes CPUs, RAM and compilers are magic and you just profile and see if your theory holds in practice.  
>   
> And of course all these add development time. Factorio is a very well optimized game, but remember that we are making it for 11 years now.

Thats why my biggest architectural rule in Nordustry is strict DOD. I completely bypass Godot's `SceneTree` for runtime simulation. Instead of having thousands of `Node3D` objects for buildings and items, the entire factory state is managed by centralized C# managers using arrays of pure C# `structs`.

## O(1) Logistics
Conveyor belts and items are the core of Nordustry. The main implementation is again highly inspired by one of Wube's excellent blog posts on [belt optimization](https://www.factorio.com/blog/post/fff-176).

When it comes to interacting with the items no belts with the Inserters, To keep the simulation budget under my target, I had to avoid looping over transport lines to find the correct item for each Inserter grab. 

Instead, the spatial grid acts as a routing table. I use a deterministic topology where belt positions are sorted before tracing paths. When an Inserter needs to grab an item from a belt, it doesn't search for items; it performs an $O(1)$ lookup in the `LogisticsManager` to extract items directly from the tile.

```csharp
// Example of how the SimulationManager handles instant lookups
public bool TryExtractItem(GridPosition pos, out uint itemId)
{
    uint tileData = World.Map.GetTile(pos);
    SpatialMap.UnpackTile(tileData, out var type, out _);

    if (GetProcessor(type) is IItemProvider provider)
    {
        return provider.TryExtractItem(pos, out itemId);
    }
    itemId = 0;
    return false;
}
```

## Decoupled Rendering
Since the simulation runs purely on C# data structures, it's completely decoupled from the rendering loop. The C# logic managers are responsible for pushing spatial and transform data directly to Godot's `RenderingServer` or updating `MultiMeshInstance3D` buffers. 

Even if the simulation logic ticks at 10Hz to save CPU cycles, the `RenderManager` uses a `TickFraction` to visually interpolate the motion. This guarantees that items and Inserter swings always look like they are running at a smooth 60+ FPS.

**Inserter Interpolation**
![GIF Placeholder: Inserters smoothly transferring items between belts and assemblers](AAA_Meta/attachments/nordustry/nordustry_inserter.gif)

Due to this decoupling of the simulation and the rendering components, we also set the perfect foundation for a possible multiplayer mode in the future. But that's something I will tackle in the future If the project is worth it.

Next up, I will introduce some procedural generation to make the game world actually have content.