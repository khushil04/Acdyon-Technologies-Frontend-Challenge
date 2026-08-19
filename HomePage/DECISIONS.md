# Decisions

## 1. Why this ingestion strategy over the obvious alternative?

We already had a working AcdyOn homepage, so the job was to ingest the existing brand into a Product Hunt–style first screen — not to invent a new company.

The obvious alternative was a huge wordmark, a stock photo, and two competing buttons. That looks premium and explains almost nothing in three seconds. We ingested the product instead: one value prop, one CTA (`Find your path`), a mock Pathways console in the hero, and a real click-through selector below it. Copy stays at the level we can defend (doctoral, executive, program discovery). We did not ingest fake stats, logos, or testimonials, even though that is the faster way to look “launched.”

## 2. One trade-off under the time limit, and what a real week would change

Trade-off: the hero console is a designed mock, and consultation is an honest front-end demo that does not send mail. That ships a product feeling without a backend, CMS, or verified contact channel.

With a week: replace the mock with a real screenshot or a live pathway flow, connect consultation to a real AcdyOn destination, add 390 / 768 / 1440 visual QA on a device, and deploy from CI. Still no dark mode unless it is designed end-to-end.

## 3. Where AI was used, and what was verified afterward

Cursor drafted layout, copy options, and component splits. I kept the AcdyOn palette, type, and honesty rules; removed default Vite/Bolt metadata; deleted `localStorage` returning-user logic; fixed broken `@/data` and missing `acdyon-hero.png`; pointed the logo at `src/assets/acdyon-logo.png`; and checked that hashes, the one primary CTA, and the “nothing was sent” form match what the page actually does.
