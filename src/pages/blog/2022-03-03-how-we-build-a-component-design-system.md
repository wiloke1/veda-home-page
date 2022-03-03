---
templateKey: blog-post
title: How we Build a Component Design System
date: 2022-03-03T08:31:08.435Z
description: Design systems were created to bring order into an inevitable
  entropy. The first design system was introduced by NASA in 1976, and today
  nearly all large organizations like Uber, Pinterest, Airbnb, or Shopify have
  such a system to bring consistency into the chaos of more products and teams.
featuredimage: /img/1_g_dger2tcjuick0y5sx2xw.jpg
tags:
  - design-system
  - components
  - javascript
---
Design systems were created to bring order into an inevitable entropy. The first design system was introduced by [NASA in 1976](https://blog.bitsrc.io/7-tools-for-building-your-design-system-in-2020-452d9c9b3b8e#:~:text=Legend%20has%20it%20that%20the,different%20teams%2C%20projects%20and%20applications.), and today nearly all large organizations [like Uber, Pinterest, Airbnb, or Shopify](https://blog.bitsrc.io/building-a-consistent-ui-design-system-4481fb37470f) have such a system to bring consistency into the chaos of more products and teams.

At **[Bit](https://bit.dev/),** we build tools for 150,000+ developers working with components. Our platform helps developers build, share, and collaborate on components to speed up and improve web application development.

We enjoy a **Design System driven by Components.**

Over the past 2 years, we’ve been “dogfooding” our platform to build a design system and turn it into a living ecosystem of shared modular components.

The benefits of our system go way beyond UI/UX consistency. We greatly accelerated and scaled our development, improved our product quality, and greatly improved work between developers, designers, and everyone else.

By letting everyone create and share components in a collaborative way, we are able to achieve faster and wider adoption of our design system.

In this article, I will focus on the developer side of things and will share our goals, process, and results. Feel free to AMA in the comments below.

1. **Visual Language**
2. **Shared Components**
3. **Documentation and Discovery**
4. **Incremental Upgrades**
5. **Rippling Changes to Dependencies**
6. **Project Updates**
7. **Team Communication**
8. **Designer — Developer Collaboration**

# 1. Our Visual Language

> Audit, then order.

Our process of creating a visual language was a bit different than what you would read in [most articles](https://www.invisionapp.com/inside-design/guide-to-design-systems/) on design systems. This is a privilege saved for larger enterprises and is often a luxurious choice for younger companies.

As a growing company, we didn’t have the time to stop and turn our design system into a large and complex project. Instead, we had to audit and turn our existing visual language into an organized system.

This process, led by Bit’s head of design 

[Amir Shalev](https://medium.com/u/42423d94f25a?source=post_page-----15713a1f1833-----------------------------------)

, was twofold: First **auditing our existing styles and elements,** and then **creating a consistent system** to standardize our visual language as a strong yet flexible base.

![](https://miro.medium.com/max/8850/1*CtyHMGKoD5zA8ObCvBgVEw.jpeg)

![](https://miro.medium.com/max/8850/1*9A0GbthHItnMjZkfwc2x4g.jpeg)

Our surfaces and colors used in bit.dev

**Visual consistency** means creating a unified style-guide standard for colors, fonts, sizes, positions, and every other part of your visual language. Aspects such as typefaces, typography, primary and secondary colors can still be specified as part of the design system.

In addition, we needed to create a consistent set of UI elements that can be later implemented as components using a modern framework (e.g. React).

![](https://miro.medium.com/max/1400/1*n9FYcXb8sFQAxF7d9YRy7Q.jpeg)

Our buttons, avatars, and other basic components

To make your system of elements actionable in the real world, it must include more than just a set of basic UI components like Button or Avatar. It should include concrete examples of more specific instances or compositions of components, which are the most basic implementation of your features.

![](https://miro.medium.com/max/1400/1*TRCiTlVzTH6A8LRawHqtBw.jpeg)

Composition of components to create more concrete and advanced features

The design of your system is not ready until you have two assets:

a) A **style-guide** that defines the styling and implementation of your UI. This is usually a rather long document with a lot of text and typography.

b) A set of **reusable visual elements** that bring together both **visual (UI) and functional (UX) consistency** through components. This is usually a rather large canvas with elements drawn on 

[Figma](https://medium.com/u/bf1152b11387?source=post_page-----15713a1f1833-----------------------------------)

 or 

[Sketch](https://medium.com/u/d39f69b23aa2?source=post_page-----15713a1f1833-----------------------------------)

 etc (we use both).

# 2. Shared Components

> Building a component ecosystem.

Some people just publish a single-versioned package with all their components. We prefer creating a shared component ecosystem.

## Our process

If you head over to the **[homepage of Bit.dev](https://bit.dev/)** **you will see something awesome**. When the mouse hovers over a component, a highlighter will turn on, indicating the component's name, version, and parent Scope. [Try it](https://bit.dev/).

[![](https://miro.medium.com/max/1400/1*V7pkn8njybmOwAC46h-oUA.png)](https://bit.dev/)

The Bit.dev homepage — a composition of shared components

What you see here is [a page composed of shared components](https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc). However, these are [independent components](https://blog.bitsrc.io/independent-components-the-webs-new-building-blocks-59c893ef0f65) developed and owned by different teams and published from different projects, which are mixed and integrated together.

At Bit, we have **more than just one design system**. We have different teams that build and share their components, in a UI component ecosystem.

If you hover over components like [link](https://bit.dev/bit/base-ui/elements/link?version=1.0.2) or [paragraph](https://bit.dev/bit/base-ui/text/paragraph?version=1.0.2) and click the links, you will see that these components are part of the “**[base-ui](https://bit.dev/bit/base-ui)” Scope.** This is **our most basic design system**, developed by our design system team in an autonomous [GitHub repo](https://github.com/teambit/base-ui), and published to Bit.dev for everyone to use.

[![](https://miro.medium.com/max/1400/1*o0tBO-nyHAYTBxCtAfreXg.png)](https://bit.dev/bit/base-ui)

“Base-ui” — Our base design system components

The marketing team, however, needs some more concrete components like a marketing “[heading](https://bit.dev/bit/evangelist/elements/heading?version=1.1.0)” or “[action-button](https://bit.dev/bit/evangelist/elements/button)”. These are not a part of the base-ui design system but are a part of another Scope called “**[Evangelist](https://bit.dev/teambit/evangelist)**”. They belong autonomously to the marketing team in this [GitHub repo](https://github.com/teambit/evangelist). Since they use components from base-ui, they get updates from the base-ui team.

[![](https://miro.medium.com/max/1400/1*NIhxEjb89xhpky4yTbV1gg.png)](https://bit.dev/bit/evangelist)

“Evangelist” — Our marketing components

[Evangelist](https://bit.dev/teambit/evangelist) is just one of many Scope of components that compose and extend the base-ui components. In fact, each team in the company builds and shares its own Scope of components with everyone else.

Instead of publishing a single one-size-fits package for components, we create an ecosystem where everyone works together yet delivers independently. The design system’s team role is to facilitate and regulate, not block or enforce.

This turned out to be a huge success, and we were able to reduce the building time of new marketing pages by ~75% while keeping our design consistent. Try visiting the [bit.dev/enterprise](https://bit.dev/enterprise) page or [/support](https://bit.dev/support-plans) pages to see examples. Similar success was recorded by many other teams in the company.

## Working with our own tools

Our own “dogfooding” of Bit means we build the way we help other people build. We’ve been doing so for a few years, since 2017. Here’s the gist.

1. We use [Bit’s OSS Workspace](https://github.com/teambit/bit) to develop, manage, and publish decoupled components in different codebases owned by different teams.
2. We enjoy [Bit’s cloud platform](https://bit.dev/) to help all teams smoothly expose, share, and integrate components with each other.
3. The design-system team provides our base components, controls updates, and regulates changes to ensure consistency and standardization.

## Choosing React

We chose to use React back in 2017 for a variety of reasons, and have been very happy with our choice. Since the introduction of Hooks and Context API in React 16, the ability to decouple components from each other even in terms of state management, for example, has become phenomenal.

Yet, we’re seeing many teams choosing to use Bit for Vue or Angular and even Stencil Web Components. We’ve even been working with the Angular team itself to provide support for Bit with Angular. After taking everything into account, we believe React is the best solution for us at this point.

## Independent components

Bit workspace helps you build modular projects, while enjoying a simple and holistic dev experience. Each component is independently developed, built, tested, documented, published, and integrated into new applications. All components are composed and managed together in harmony. **[Try it](https://github.com/teambit/bit)**.

![](https://miro.medium.com/max/1400/1*M28IpX4-_1uhibsB45gQrQ.png)

## Standardizing development

Another great way to achieve consistency in design is to standardize the development of components. Bit helps us do so with a variety of features such as standard component dev environments, reusable docs templates, and even extensible and reusable build pipelines to standardize the release process.

![](https://miro.medium.com/max/1400/1*ZeYUQX73seohcBLL7xhSKA.png)

Customizable, extensible, reusable build pipelines

# 3. Documentation and Discovery

> Always up to date. No extra tools.

Another advantage we have when working with Bit is that we don’t need to create or maintain extra documentation websites for components.

## Local development

As we write components, Bit’s UI presents the documentation for every component in the local development environment. This includes descriptions, examples, and even compositions that render the component in isolation.

You can create customizable and reusable docs templates so that all components can be documented by the same standards and design.

![](https://miro.medium.com/max/1400/1*cpm0dY6AKi_lpvswBlP8BQ.png)

Docs are a part of local development

## Docs on the cloud

Docs are just a part of every Bit component. When it is exported to the cloud, its docs become the front-page of the component for everyone to see. Docs can be viewed and explored in the same place the component is hosted. If you install or import a component, you can locally develop the docs too.

> “Tokens, then React, UI Kit, then Doc Site for changed links to those + release docs”
>
> — Kaelig Deloumeau-Prigent, Developer, Shopify’s Polaris

All the docs on Bit.dev are exactly what we see when we develop locally. With every new version of a component, its docs can be easily updated too. No extra overhead, no complex processes, no outdated documentation.

![](https://miro.medium.com/max/1400/1*vXvrin8ETHpemo67kcc7-Q.png)

What you develop locally is what you get on the cloud

## Discoverability and search

And as we have more and more components, Bit.dev makes components discoverable with features like *component-search* and *context-filters* that help us instantly search through many components with ease.

[![](https://miro.medium.com/max/1400/1*JLkB6aSk-U2VaotgidO2Vg.gif)](https://bit.dev/)

Head over to bit.dev and search thousands of OSS components, or add your own

# 4. Incremental Upgrades

> Independent component versioning.

Our design system is versioned by component, and not as a single package.

[**Versioning independent components** is much better](https://blog.bitsrc.io/versioning-independent-ui-components-why-and-how-7ea60d8be5f2) than versioning all components as a single package. Independent per-component sem-ver has been a game-changer for us. I’d also suggest [reading this wonderful post](https://medium.com/eightshapes-llc/versioning-design-systems-48cceb5ace4d) by the awesome [Nathan Curtis](https://medium.com/u/799c7c7840a?source=post_page-----7ea60d8be5f2--------------------------------). Here are the key advantages for us:

1. **We only get updates you need to the things you use.**
2. **We easily and quickly upgrade a single component.**
3. **We easily hotfix or rollback any component.**
4. **We mix and match components to create anything.**

Bit helps us version and publish each component as an independent package. Since each component is versioned independently, our different projects can get incremental upgrades to components, instead of just one large package.

If you head over to this **[button](https://bit.dev/teambit/evangelist/elements/button)** component you will notice that it is currently on version 1.5.0, and started on version 1.0.0 a while back.

![](https://miro.medium.com/max/1220/1*XrYKbMEo0oLhwDYF57LGCQ.png)

This gives both our designers and developers great freedom to constantly innovate and release upgrades to production.

For example, here is version 1.5.0 of ‘button’ used in production.

![](https://miro.medium.com/max/540/1*P-1dyjMnAhRT8bsl122mUA.png)

Evangalist/button@1.5.0

And here is the previous version 1.4.0.

![](https://miro.medium.com/max/412/1*xjXNaxWB0lc2CMo0woakDA.png)

And here’s the earliest version 1.0.0 of ‘button’.

![](https://miro.medium.com/max/614/1*Y75jzOgx5hZw4N_MZhceNQ.png)

Evangalist/button@1.0.0

If you head back to version 1.5.0 you will notice that it has an array of examples that support more design use-cases than ever before.

![](https://miro.medium.com/max/1400/1*PSmQM45tcDO7ZTgBy-MhDA.png)

Our designers and developers are able to freely innovate and deliver upgrades without having to wait on large bloated versions or long releases.

Component developers can control each component’s version bumps according to sem-ver rules, view its history, and even its view changelog.

App builders don’t get updates they don’t need. Everyone is happy.

![](https://miro.medium.com/max/1400/1*rJpNeOOgygmG4P_YSFutXg.png)

# 5. Rippling Changes to Dependencies

> Managing all component relationships.

Bit manages the dependency graph between all components in a project. This means that when we upgrade or break a component, Bit will “know” which other components depend on it, and will run their builds and tests.

![](https://miro.medium.com/max/1400/1*hkZPDw-c_9r8kOfUm9Ea5Q.png)

As a result, it becomes much easier to develop many components inside a single project, since it’s easier to master their internal relationships.

> “If we upgrade and break a component, we have to go through and fix all the dependent components”
>
> — Jony Cheung, Software Engineering Manager, Atlassian’s Atlaskit

On every change, the builds and tests of all dependant components will run and let us know exactly what’s broken and what’s not. If all is well, we can simply tell Bit to bump all dependant components at once.

![](https://miro.medium.com/max/1400/1*4ReJPipyUAoS1kgb8jBIYw.jpeg)

We’re now working on a new product called **Ripple CI**. Through the cloud, Ripple’s build process will propagate changes to all dependant components in all of the organization’s applications. We (and you) will be able to see exactly how every component is impacted, where, and how, then fix and release (want to learn more? ask to get in [our Beta program](https://bit.dev/support)).

# 6. Project Updates

> Automated with a GitHub Integration.

We use a [publically available integration](https://blog.bitsrc.io/announcing-auto-github-prs-for-component-version-bumping-74e7768bcd8a) to connect Bit.dev with GitHub. When a new version of a component is published to Bit.dev, it will “know” which GitHub (or GitLab) projects should be getting this update.

Then the process becomes fully automated.

The new version of the component is sent to all-consuming projects as an automated Pull-Request that can be accepted with one click.

![](https://miro.medium.com/max/1400/1*-c3jzTySykKcQKSznOoTrg.png)

This makes it very easy for our design-system team to continuously deliver upgrades and help all product-builders accept and integrate the changes.

And, our design system team can monitor who forgot to update what and where at all times. Here 

[Gilad Shoham](https://medium.com/u/8311225defe2?source=post_page-----15713a1f1833-----------------------------------)

 who leads our core team just avoided a serious nudge! Watch out Gilad, we see everything.

![](https://miro.medium.com/max/1400/1*StjUm8hZIcNGyZcxGWP4Pw.jpeg)

# 7. Team Communication

> Automated with a Slack Integration.

When a new component version is published, all teams that use this component (i.e. have this component as a dependency) will get an update notification via the platform and [also via a **Slack integration**](https://blog.bitsrc.io/optimizing-collaboration-between-distributed-front-end-teams-82ba14ce21f9).

So, for example, when a version of ‘button’ inside ‘shopping-cart’ gets exported, our team gets a notification that includes the user’s name, the type of action (export), the number of components related to that specific action.

Here 

[Eden Ella](https://medium.com/u/8ec0911f1c05?source=post_page-----15713a1f1833-----------------------------------)

 from the Envagalism team is caught upgrading buttons.

![](https://miro.medium.com/max/1054/0*Fh5DAM4FDPOPYTqP.png)

When importing, the same notification shows but with the origin Scope.

![](https://miro.medium.com/max/1272/0*2qrQPsdu8On9uHBM.png)

This workflow helps everyone stay in sync and work better together.

# 8. Developer — Designer Collaboration

> Working together over code, in a visual way.

A [design system means different things](https://medium.com/sketch-app-sources/what-is-your-design-system-really-c7a927d7bf92) to designers and developers.

Designers usually talk about elements on their canvas. Developers talk about the React component in their IDE. Users will get the code, not the design.

That’s why **it’s critical to include designers** in our UI development process.

We use two great tools to achieve a firm, mutual handshake.

The first is 

[Zeplin](https://medium.com/u/5d3d19cfe01?source=post_page-----15713a1f1833-----------------------------------)

 — Which is a great way for designers to work with developers. We use to translate and organize design tasks into development tasks, and we work with it every day.

The second is **[Bit](https://bit.dev/)** — Which is a fantastic way for developers to work with designers. It creates a bridge for our designers to take an active part in the development of UI components. Moreover, helps our designers to monitor and collaborate on code changes and new versions of components.

> 💡 The Zeplin and Bit teams are now working on a joint integration!

[![](https://miro.medium.com/max/1400/1*eby7DKoLT-OCpOswu2HEbw.gif)](https://bit.dev/)

Designers can see and try the actual React components in a visual way

We use Bit to expose all our components to our designers and help them always make sure everything stays perfectly aligned with the design.

Features like hot-reloading rendering and editable examples are a great way for designers to view components, and even try different designs hands-on.

When there’s a new component published to Bit.dev, or a new version of an existing component, designers can instantly and visually see what changed. That makes it easy to ensure everything stays consistent with the design.

Then, after designers approve, the change can be [sent as an automated PR](https://blog.bitsrc.io/announcing-auto-github-prs-for-component-version-bumping-74e7768bcd8a) to all projects affected by the change. This means our designers now work with developers directly on the development of components. Cool, right?

In the near future, our team intends to add more designer-facing features to Bit.dev such as an interactive property panel, so designers can create changes to components, and save them as new versions. Should be ready in 2021.

# Conclusion

![](https://miro.medium.com/max/1400/1*rYMm99h7an8ms-V9OQLgtA.png)

NASA’s Design System 2020

Creating and keeping a consistent UI/UX across every touchpoint of your products helps users intuitively navigate, and successfully interact, with different parts of your applications without confusion. It’s your brand.

You need a good brand.

In our process, we have been creating a design system from the ground up. We audited the existing design, then turned it into an orderly system that defines our visual elements and styleguide, which tell our Brand’s story.

We rely on our own [tools cloud platform](https://bit.dev/) to create a system of shared components that brings everyone together in the process. We let components drive the development of our products, in a democratized yet regulated ecosystem. This system gets fast and almost absolute adoption.

I hope this helped you learn a little bit about our process and the possibilities that exist out there to build web applications together in the modern world.

We’ve been helping many really great teams build their own systems in a similar way, and please feel free to [reach out to us and ask anything](https://bit.dev/support)!

Thanks for reading 🍻 🎨 ❤️