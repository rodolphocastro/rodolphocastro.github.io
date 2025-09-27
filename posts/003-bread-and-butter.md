---
date: 2025-09-26
title: 'Rice and Beans'
description: 'Sometimes we forget the power of doing the basics really well in software engineering.'
author: Rodolpho Alves
published: true
lang: en
---

A few days ago YouTube recommended me a talk I didn’t expect based on the title, but whose content (at least the first 15 minutes) resonated immediately: the [opening keynote of Rails World 2025](https://youtu.be/gcwzWzC7gUA?si=KVKwsHroxcvSSdbC) by David Heinemeier Hansson. He talks about end-to-end freedom and how, over the last decades, we’ve created a lot of unnecessary complexity. I kept thinking about it afterwards, and this post is my take very much aligned with DHH.

## Bread and butter?

> “Wait, isn’t this a software engineering blog? Why are we talking about food?!”

If you’re not familiar with the Brazilian expression “feijão com arroz” (rice and beans), here’s a quick summary: it’s the most common everyday dish and, at the same time, it gives you most of the nutrients you need. Calling something “feijão com arroz” doesn’t just mean it’s basic it also covers the essentials.

> In English, the closest cultural equivalent is “bread and butter”, the simple staple that sustains everything else.

Once that reference is in place, we can talk about a complicated... trend: the habit of skipping the basics and jumping straight to whatever is shinier or more complex.

## What are the basics?

In software engineering, the basics (to me) are things that:

- Cover most of the requirements.
- Work reliably and consistently.
- (Ideally) Are simple to evolve and maintain.

That sounds obvious, but most systems you use today excel at exactly that baseline:

- Marketplace apps: you search, add to cart, and complete checkout.
- LinkedIn: you open the feed and edit your profile.
- Steam: you buy, install, and play.

> “But that’s not basic!”  
> It depends. “Basic” varies by domain. If the critical path doesn’t work, everything else loses value. If you can’t install and play, the Steam Overlay isn’t worth much.

## The obsession with “complete”

Across the last decades we’ve layered on more and more:

- Kubernetes
- Endless logging / observability stacks
- Multiple CI/CD pipeline flavors
- Many approaches to feature flags (toggles)
- Infrastructure as Code (Terraform or proprietary)

When I was 15 I hosted a (let’s say) “private” Tibia server on my own PC (Windows XP SP2) with 200+ simultaneous players. No dedicated link, no IaC-managed database (if I recall it was XML), no pipeline, no tests. I logged in as GOD, validated and shipped changes in minutes. Today in some professional projects, with far more robust tech, shipping even a prototype may involve 5+ PRs across different repos and layers of abstraction just to try a feature.

Bootcamps teach Cloud before TCP/IP or HTTP. We talk about container registries before a simple SSH/SFTP transfer (which could save hours of debug). We start directly with microservices or serverless instead of something cohesive that can evolve. We push for more and more E2E/Stress/Chaos/Performance tests while teams can’t even run the basics locally.

> There are systems where developers can’t run the app locally, they fully depend on the cloud to manually test a feature.

Result? Uncritical adoption, vendor lock‑in, slow deployment cycles and slower value delivery.

## Microservices everywhere

Microservices can scale performance, teams, and domains. But they carry cost: orchestration, infrastructure, CI/CD, patterns. When poorly designed then lead to distributed coupling, excessive chatter and fragile transactional flows... they can perform worse than a monolith.

Yet the hype suggests starting distributed. Startups frequently spend more energy maintaining architecture than building functionality to validate market hypotheses.

> “So should I never use microservices and only build monoliths?”  
> No. The point is: introduce complexity when it’s justified, not before.

## Add complexity only when necessary

**YAGNI - You Ain’t Gonna Need It.** We sometimes forget that while repeating the DRY or SOLID mantras.

Refactoring (Martin Fowler) teaches: solve the problem first; refactor when patterns emerge or pain appears. Don’t begin with the pattern, begin by delivering value.

> Not everything needs the “best” pattern / tool / process upfront. Iteration and refactoring are part of agile product development.

If your API is just CRUD, maybe you don’t need Kubernetes. A simple container is enough. With 50 users maybe not even that: you can start with a very basic service. Build so you can evolve, but don’t sacrifice time and opportunity chasing premature “perfection.”

## Practical recap

- Start simple: ship a stable critical path.
- Measure before optimizing or distributing.
- Adopt tools for real pain, not hype.
- Avoid “aspirational” complexity.
- Prefer incremental refactor over anticipatory rewrites.

> Delivered value > “Instagrammable” architecture.
