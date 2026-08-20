# Decisions

## 1. Why this ingestion strategy over the obvious alternative you rejected?

The obvious approach was to create a visually impressive hero using a large wordmark, stock imagery, and multiple competing CTAs. I rejected that because it can look premium while still leaving the visitor unclear about what AcdyOn offers.

Instead, I focused the first screen around one clear value proposition, one primary CTA (`Find Your Path`), and a visual representation of AcdyOn's pathways. The interactive PathFinder below the hero lets visitors explore Doctoral Programs, Executive Education, and program discovery.

I deliberately avoided fabricated statistics, testimonials, university logos, rankings, or other claims that I could not verify.

## 2. One trade-off you made under the time limit, and what you’d do with a real week.

The hero pathway console is a designed frontend demonstration rather than a live product flow, and the consultation interaction is intentionally frontend-only.

This allowed me to focus the limited time on visual quality, responsiveness, interaction, and clear communication without introducing an unverified backend or contact system.

With a full week, I would replace the demonstration with verified AcdyOn program data or a real pathway flow, connect the consultation CTA to an official AcdyOn destination, and perform dedicated visual QA at 390px, 768px, and 1440px. I would also add CI-based deployment checks.

## 3. Where did you use AI tools, and what did you personally verify or change afterward?

I used Cursor to accelerate layout exploration, copy iterations, and component structure.

I personally reviewed and modified the generated implementation, including the AcdyOn visual system, responsive layout, component structure, interactive PathFinder, metadata, asset paths, logo integration, navigation links, and consultation behavior.

I also verified that the page does not contain fabricated statistics, testimonials, logos, or partnerships, and that the consultation interaction accurately indicates that no information is submitted.