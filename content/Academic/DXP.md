---
title: Context-Sensitive AR - A Seminar Project Overview
date: 2022-08-30
tags:
  - studies
---
![Cover](AAA_Meta/attachments/dxp/cover.png)


For this seminar project, I wanted to dive into making Augmented Reality (AR) apps more context-sensitive. Instead of just overlaying static images, I looked at how AR can better react to the user's environment. Specifically, I focused on two things: how information is spatially arranged and how physical obstacles affect navigation.

<object data="../AAA_Meta/attachments/dxp/DXP_Poster_DavidDiener.pdf" type="application/pdf" width="700px" height="700px">
    <embed src="../AAA_Meta/attachments/dxp/DXP_Poster_DavidDiener.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="AAA_Meta/attachments/dxp/DXP_Poster_DavidDiener.pdf">Download Poster</a>.</p>
    </embed>
</object>

## The Importance of Context-Sensitivity

Context-sensitivity is what makes AR actually feel immersive and interactive. In my paper, I focused on "Spatial Arrangement" and "Physical Factors"[^1].

### Spatial Arrangement

Spatial Arrangement is all about how external information is organized and displayed within the AR application. In my research, I developed a surface detection system that adapts the interface based on the user's environment. This system builds upon the foundational work of Grubert et al. (2017), who described the importance of adapting the interface based on context[^1].

The surface detection system uses the Mixed Reality Toolkit's Scene Understanding API to classify surfaces as 'Walkable' or 'Obstacle.' This classification allows for more interactive and realistic AR experiences, as objects can be placed or interacted with based on these surface types[^2].

### Physical Factors

Physical Factors refer to the environmental elements that are not under the control of the AR system or the user. These could include lighting conditions, physical obstacles, and more. My paper presents a real-time 3D Navigation system that takes into account these physical factors[^2].

For the 3D Navigation system, I employed Mercuna, a third-party library, to navigate the spatial geometry. This system uses a data structure called 'Nav Octree' to represent the spatial geometry around the user. It also includes a 'Nav Seed' which is the starting point for navigation[^3].


## Limitations and Future Directions

- **Cold Start Problem**: The systems rely on the WSUO, which in turn depends on scanning the spatial environment. This means that surface detection and 3D Navigation are only possible after the environment has been successfully scanned.
- **Scanning Details**: The level of detail in spatial scanning is limited. For example, narrow geometric objects like table legs could not be reliably detected.

I see a lot of room for improvement and expansion. For instance, the surface detection system could be enhanced by considering additional spatial features like the curvature or texture of surfaces. Also, performance optimization is crucial, especially for mobile platforms like the HoloLens 2, where computational resources are limited.


## Conclusion

My seminar paper aims to push the boundaries of what's possible in context-sensitive AR. While there are challenges and limitations, the research sets a strong foundation for future work in this exciting and ever-evolving field.

<div style="text-align: center; margin: 20px 0;"><a href="https://youtu.be/CQ1pEaBofvI?si=1dmjyDLJFS3hS-aJ" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">Watch a short demo</a></div>

If you want to take a look at the full paper, you can download it below.

<div style="text-align: center; margin: 20px 0;"><a href="AAA_Meta/attachments/dxp/DXP_Implementation_of_a_context_sensitive_augmented_reality_application.pdf" style="display: inline-block; padding: 10px 20px; background-color: var(--secondary); color: white; text-decoration: none; border-radius: 5px; font-weight: bold;" target="_blank">Download Paper</a></div>

## References

[^1]: Grubert, J., Langlotz, T., Zollmann, S., & Regenbrecht, H. (2017). Towards pervasive augmented reality: Context-awareness in augmented reality.

[^2]: Unity. (2022). Unity - scripting API: Collider.

[^3]: Mercuna. (2022). Mercuna - 3d navigation for games.