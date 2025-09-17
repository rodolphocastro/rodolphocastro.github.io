---
date: 2025-09-16
title: 'Automation: build the path of least resistance'
description: 'a few ramblings about quality and automation'
author: Rodolpho Alves
published: true
lang: en
---

## Before we talk specifics

Ironic! It's been _almost_ an year since I last wrote on this post! I built the whole thing while on PTO and job-hunting, at the time due to some frustration with how some peers were affecting the mental health of myself and my team, and now I'm finally circling back to this as I decide to being another job hunt (but for different reasons).

## What the heck is quality?

Over the last few weeks I have been posed with questions that some elements within the system we work on have "lower quality". When asking stakeholders why they believe this is the case I'm met with some very different perceptions of what quality really means to them:

- "the website is slow!"
- "this doesn't work when ... happens"
- "the button looks off!"
- "we don't have metrics to track the system behavior, so it must lack quality!"

This is easily debatable within the team and not something that I'll digress too much on but it is what got me thing on "what the heck is quality after all" - which is what I want to talk about today and got me to explore [Playwright](https://playwright.dev) hands-on and use it professionally and on this website.

> By the way: using playwright to test a static site such as this one is an overkill so... I don't advise you do it unless it's really mission critical or you're wanting something to play with.

### The Engineering mumbo-jumbo

Whenever I'm talking to a team member within an Engineering context there's two main chain of thoughts I tend to focus on:

- Automated Tests (Unit, Integration, API, E2E) and Metrics (uptime, latency, error rate)
- Solid Processes (Clearly written tickets, refinement, planning, release, observability, documentation)

> Note: Before you curse me! I know this is a non-extensive list and there are many other different types of tests and approaches to ensure Quality! Those are the ones I focus on when dealing with Software Engineers so stick with me for the ride.

Automated Tests are usually the low hanging fruit when you step into a project. They are fairly easy to track and create KPIs on (after all most teams are at least capturing coverage and scanning with [SonarQube](https://www.sonarsource.com/products/sonarcloud/), right?), plus they are cheaper to run when on a pipeline, easier to explain to stakeholders with the testing pyramid and within the team's direct sphere of influence. So, usually, this is the thing that Engineers will tend to focus on!

#### Dwelling into the testing pyramid

On this context my knee-jerk reaction was to look at what KPIs we had around the automated portion, such as:

- Coverage % (Unit and Integration), which averages to 80%
- Uptime, which averages to 99.99999%
- Error Rates, which vary by service and component but were okay for the critical path
- Quantity of Automated E2E Tests x Manual E2E Tests, which had almost 10 automated tests for over 1000s of manual tests.

So, being the Engineer I am and hyperfocused, it hit me with a resounding "OOOOOF" that we should immediately fix the E2E portion! Which led me down the rabbit hole of engaging with SDETs, Quality Guilds and the such on: having a test suite that is adoptable by SDETs and SEs alike.

#### Developer Experience

> Water follows the path of least resistance.

Within the project I am on there have been _numerous_ attempt to get teams (SEs and SDETs alike) to adopt an E2E test suite. They usually failed due to low adoption albeit managers actively encouraging members to use them (and including those as part of performance reviews) - the impact on the lack of an extensive E2E coverage has always been worked around since there's a solid quantity of unit+integration tests and some quite engaged QEs that'd manually test work in a quick manner.

On its last iteration, the SDET lead at the time, decided it would be an awesome idea to use Kotlin + Playwright + SpringBoot to scaffold the "test suite" they all should use. Great idea on paper, right? All SEs work with SpringBoot and Kotlin, they can learn Playwright! So many man-months were spend on that suite being built from scratch to allow Backend and Frontend tests.

Come time for adoption and... it was a catastrophe. The learning curve, which is quite expected if you look at the different expectations we have on SDETs tech stacks and SEs, made it so that testing manually across many sprints was easier than creating a single test case! And since SDETs would barely make through that learning curve there were very few of those that could join with the Manager to encourage (and lead by example). Plus the architecture was so "perfect" that no SDETs were part of the developed itself, it was all handled by a lead that loved to overengineer to make his Resume more appealing. Sorry, not sorry.

So we ended up on a situation where we had a fancy bazooka, that nobody knew how to operate properly, and we could barely kill an ant. And why? Because no one cared to think on the development experience of those SDETs which would pave the way for the SEs to quickly join in.

#### What then?

We ended up agreeing on dropping that thing altogether. No need to decommission it (since it had a whooping 10 test cases!) but we decided, collectively, that we should use the thing that made sense for the SDETs: Typescript and either Playwright or Cypress.

After some undesired bureaucracy (honestly, I've seen companies in the public sector that face less bureaucracy) we ended up with one of our SDETs scaffolding a Playwright repo and within a week he created 5 test cases that actually covered the most brittle areas of the system.

No fancy "inject loads of data using a Kafka connector that translates REST to Messages in CloudEvent spec" - plain and old prioritization plus isolating the things that (at the time) were not worth automating and turning them into _standards_.

Our SDETs, at the time, were overwhelmed with lots of manual tests and the onerous ('member that bureaucracy?) release process so I decided I should give in to my inner engineer and step into their shoes to: 1. create more empathy with this part of their work, 2. _lead by example_ and 3. unburden them.

Turns out that the simple thing was quite easy for me, that had zero experience with Playwright, to hack around in since I knew enough Typescript and it looked quite similar to Jest and Vitest (which I use on personal projects)!

And then comes the effect of [the shadow of the leader](https://thinkingfocus.com/tag/shadow-of-the-leader/). I was able to create 3 new tests cases and reduce the time taken for the authorization step from 30s for each test to a whooping 30s, once, for how many tests you wanted to run on that session (kudos to the amazing docs on Playwright for that). Within the following days our SDETs also added their tests cases, bumping our total to 15 test cases. After that we talked, on the team's stand-ups, to our SEs and since then not only we increased to 20 test cases but we now have a better pipeline that allowed the tests to be run on every pull request, ensuring a more seamless experience for those contributing to the suite. This all happened within a span of a month.

Is it the silver bullet? Is isn't (read the side-note). But it is a step, an iterative one, on the right direction.

### Side note 1: The Collective perception

> You can put lipstick on a pig. It will still be a pig.

The problem with automated tests is that no matter how much you write them, on their varying levels, you cannot make up for poor processes. Be those processes the company's, product's or even engineering's.

And then come the processes themselves. Harder to change, harder to track but the ones that are most impactful to what the collective perceives as quality:

> When something is deploy it should just work, look good and not break!

I'll leave all the process drama to a later post. It is getting late and I want to wrap-up this post and add some more tests to this repo before I go to sleep!

### Side note 2: Playwright itself

If you got interested on learning more about Playwright feel free to look at the source code for this website. E2E tests are on the `./tests` folder and the pattern being used is the `PageObject` one because I'm quite used to using OO to organize my code. For the love of whatever deity you believe in: do not feel compelled to use PageObject just because you're seeing it!!! Start with whatever makes sense for your scenario and, if it grows too big, then refactor it into another pattern!
