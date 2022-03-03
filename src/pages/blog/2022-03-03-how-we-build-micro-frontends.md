---
templateKey: blog-post
title: How We Build Micro Frontends
date: 2022-03-03T08:28:33.265Z
description: At Bit, we build tools for over 100,000 developers working with
  components. Our tools help developers build, reuse, and collaborate on
  independent components to speed up development and improve application
  quality.
featuredimage: /img/0_zfyhf4zvurcndllg.png
tags:
  - micro-frontends
  - reactjs
  - javascript
---
At **[Bit](https://bit.dev/),** we build tools for over 100,000 developers working with components. Our tools help developers build, reuse, and collaborate on [independent components](https://blog.bitsrc.io/independent-components-the-webs-new-building-blocks-59c893ef0f65) to speed up development and improve application quality.

Since day one we’ve been dogfooding our own tools, while letting components drive our architecture and development process. A great advantage of this is the ability to enjoy the benefits of **Micro Front-Ends**.

[![](https://miro.medium.com/max/1400/1*QFx1dOyZXj2Un-rxOmAxgA.png)](https://bit.dev/)

Author of Module Federation on the future of MFEs

By splitting the front-end monolith into smaller codebases, front-end teams can enjoy similar benefits to those of microservices: maintainable codebases, autonomous teams, independent releases, and incremental upgrades.

Micro frontends are usually thought of as a composition of independent frontends that happens at *runtime,* either on the server or on the client-side.

While runtime integrations have their benefits (smaller payloads for example) but they’re not, by any means, the only way to achieve “*a composition of independently* deliverable *frontend applications”* (to quote [Cam Jackson](https://martinfowler.com/articles/micro-frontends.html)).

This new way of building and collaborating on frontend apps, is, in our view, the core element of micro frontends.

With the **right component model** and **the right tools**, any team can adopt a modular approach to building web applications, and enjoy these benefits.

For us, composing frontend apps in build-time brings the best of both worlds — the safety and robustness of “traditional monoliths” and the simplicity and scalability of micro frontends. For that, we use [Bit](https://github.com/teambit/bit), an open-source library that helps in making each component completely independent, and our [cloud platform](https://bit.dev/) that lets teams efficiently collaborate and integrate together.

![](https://miro.medium.com/max/1400/0*GcjR8XphlcBBPrFf)

Right model, right tools

In this article, I’ll show how we, at Bit, are building micro-frontends. I’ll explain how it helped us achieve goals such as **decoupled codebases**, **fully-autonomous teams**, **independent incremental upgrades**, and **near 100% modular code reuse**. I hope you’ll find this shared knowledge useful.

# First, a live example

If you head over to the [Bit.dev’s homepage](https://bit.dev/), you’ll notice something strange happening every time you hover over a component.

## [The shared component cloud](https://bit.dev/)

### [Bit is a scalable and collaborative way to build and reuse components. It's everything you need from local development…](https://bit.dev/)

[bit.dev](https://bit.dev/)

Once the mouse enters a component, a highlight turns on, indicating the component’s name, independent version, and scope in which it is published and exposed. As you scroll, you’ll notice that the entire page is made of components that are independently built, versioned, and shared by different teams, in different codebases, using different build processes, and are all integrated together into one cohesive-feeling product.

What you see there is a real demonstration of how our team is using modern component-driven technologies like React and Bit to build micro front-ends.

On this page, you will see two sets of components, developed by two teams. One is the “[base-ui](https://bit.dev/teambit/base-ui)” set of components, owned by our front-end infrastructure team. The second set is “[evangelist](https://bit.dev/teambit/evangelist)’”, owned by our marketing team.

Components from both sets are integrated together to quickly compose the homepage you look at, as well as other pages like the [Enterprise Page](https://bit.dev/enterprise) or [Support Page](https://bit.dev/support-plans), and even to compose more applications.

[![](https://miro.medium.com/max/1400/1*An6nWfQhA8zKwdLK-vWcZA.png)](https://bit.dev/support-plans)

Now we can very quickly compose more pages

If you click on the scopes of the components you’ll be able to see our codebase architecture and our organizational structure with your own eyes.

[![](https://miro.medium.com/max/1400/1*ZjvjXrT31IRDvlx7wTr75g.png)](https://bit.dev/enterprise)

Creating a new website will take hours and not weeks

One scope of components is called “**[base-ui](https://bit.dev/teambit/base-ui)**”. This is the most basic component design system of Bit.dev, that contains basic elements like “paragraph” for example. It is owned by the frontend infrastructure team and developed in its [own decoupled codebase](https://github.com/teambit/base-ui). All these components are published and shared on Bit.dev. There, they can be easily discovered and integrated into new projects by any other team that needs them. And, the team building base-ui can keep incrementally sending updates to specific components.

[![](https://miro.medium.com/max/1400/0*N4KeUwZ84invBIUd)](https://bit.dev/teambit/base-ui)

base-ui: Bit.dev’s basic component design system

The second scope is called “**[evangelist](https://bit.dev/teambit/evangelist)**”. This is our concrete marketing-oriented system of components, used to build the marketing pages on our applications. It is autonomously owned by the marketing team and developed in a [decoupled codebase](https://github.com/teambit/evangelist). All of these components are published and shared on Bit.dev, and are maintained by the marketing team.

[![](https://miro.medium.com/max/1400/0*p7X4A_52ZbTLdpZm)](https://bit.dev/teambit/evangelist)

Evangelist: Bit.dev’s marketing component system

In this example, the marketing team was decoupled from the team building the Bit.dev web platform. This team works in a different codebase, releases changes through its own decoupled build pipeline, and can constantly deliver incremental upgrades.

Each team builds its components, with the flexibility to split vertical ownership by features etc, in their own smaller and decoupled codebase. They use [Bit](https://github.com/teambit/bit) to independently version, build, test, package, and publish each of their components. They use the [bit.dev](https://bit.dev/) platform to host and expose components to other teams, so they can integrate and collaborate.

Every team at Bit enjoys a similar workflow. All teams work together to share and integrate components with each other, without stepping on each other’s toes. Close to 100% of the components written in our codebase are shared and reused, including not only front-end components, but also many other aspects of our system, such as “Search” features, “Playground” features, and even certain fullstack features that include both frontend and backend functionalities. We find this to be of great value.

KPIs and benchmarking we took for ourselves and for other teams show a variety of positive things happening when adopting this component-driven design. For example, the number of releases can go up by as much as 30X(!), the time spent on integrations is cut by over 50%, the composition of new features becomes a matter of hours or days, and even on-boarding new developers can become a simple matter of hours instead of weeks. You can hear more about this change and what it can do for a fast-growing start-up first-handed at this great episode of the [HeavyBit JAMStack podcast](https://www.heavybit.com/library/podcasts/jamstack-radio/ep-59-the-component-marketplace-with-alexander-karan-of-climateclever/).

# So what are micro front-ends, really?

In recent years, microservices allowed backend architectures to scale through loosely coupled codebases, each responsible for its own business logic and exposes an API, each independently deployable, and each owned and maintained by a different team.

[![](https://miro.medium.com/max/1400/1*mkiuaAcrITD3AEJ3_CILpQ.png)](https://martinfowler.com/articles/micro-frontends.html)

Source: This wonderful article by Cam Jackson

This paradigm provides great advantages to help accelerate, scale, and make the development process more efficient.

The idea of micro front-ends is to bring the same advantages to the modern development workflow. It means breaking down monolithic projects into smaller, more manageable pieces, which are independently developed and owned by respective teams, with the power to build and ship simultaneously.

This concept can provide [great advantages](https://martinfowler.com/articles/micro-frontends.html) like simple, decoupled codebases, autonomous teams, independent releases, and incremental upgrades. The development process is greatly accelerated, scaled, and made more efficient.

## So why is this possible now, but not before?

Up until recently, most web applications were still being built as single monolithic projects. GatsbyJS’s Founder Kyle Mathews put it well saying that *“Websites today are still made the same way they were 20 years ago, with a cumbersome monolithic approach to building sites, storing data, and delivering content. It’s time for a new way to build the web.”*

Yet today, components are the standard primitive of the modern web. Only now these modular and reusable pieces are reaching their true capacity as the building blocks of our web applications, enabling the modular decomposition of the traditional monoliths. Now, to tap into this opportunity, there’s a need for a shared infrastructure that facilitates modular component-driven design for teams building web applications together.

This is where new tools like [Bit](https://bit.dev/) come in, to provide the necessary toolset required to adopt and enjoy component-driven development at the architectural and organizational level, and fulfill these potential benefits.

[![](https://miro.medium.com/max/1198/1*YGORloY3KnSa4UYeVktklA.png)](https://bit.dev/)

Author of Module Federation

Bit lets developers decouple the development, reuse, and release of independent components so that they can be efficiently developed, reused, and integrated to compose different applications. This makes Bit a powerful tool for use-cases such as design-systems and shared components, but also for building micro front-ends.

At Bit we’ve been working with micro front-ends since day one. That’s how we designed and battle-tested our own tools, so that they can help other teams build better with components. Today, our tools help over 100,000 developers enjoy similar benefits.

In this article, I’ll share how our own team is building micro front-ends with components. I’ll show and explain how we are able to split web development into decoupled and maintainable codebases, make it easy to replace or integrate new features and technologies, free teams to independently build and release changes to production without stumbling on each other’s toes, achieve up to 100% component reuse, and build both a scalable architecture and organization structure that smoothly grows as we do.

# Our shared component infrastructure

[![](https://miro.medium.com/max/1400/0*ZdcnZvj2w--JSqal)](https://bit.dev/)

Naturally, different teams use different stacks and tools to build their technologies.

For the development of our web platform and websites we chose [React](https://reactjs.org/). With the release of features like Hooks and Context-API, React became a great choice for us to develop modern applications from smaller, independent, and reusable pieces.

For a shard infrastructure that supports component-driven micro front-ends, we used [Bit’s open-source](https://github.com/teambit/bit) tools and [cloud platform](https://bit.dev/).

Apart from dogfooding our product on a daily basis, Bit provides us with a few necessary features for adopting our micro front-ends architecture:

1. [Our OSS tools](https://github.com/teambit/bit) let us develop many modular components in any given codebase, with a modular workspace that helps us build with [independent components](https://blog.bitsrc.io/independent-components-the-webs-new-building-blocks-59c893ef0f65). Components can be independently developed, rendered, built, tested, versioned, published, and even go through CI without being coupled to any specific project.

![](https://miro.medium.com/max/1400/0*PydiC_g5cdwRtkvt)

In addition, Bit provides two more critical features: First, it provides universal control over the dependency graph of all components. It automatically resolves each component’s dependencies, and lets you know exactly what should change whenever there’s a change to any dependency. Second, it provides 0-config reusable and customizable development environments so that components can go through their own build pipeline in separation from any larger project, and these changes can be built across the entire dependency graph of components.

This sounds like a lot, and it is, but Bit actually makes it quite simple to build independent components that can be developed and released on their own.

![](https://miro.medium.com/max/942/0*XYA-r_yyeGlqkvQQ)

2. Our [cloud platform](https://bit.dev/) provides teams (including ourselves) with a collaboration hub where everyone can publish components, easily document them (bit automates this process), discover and install them. This lets our teams share and reuse close to 100% of the components we build.

![](https://miro.medium.com/max/1314/0*svFCRFQDsvxJcAMy)

To make sure each frontend gets its own independent and fast build process, Bit also provides a unique **CI/CD process** that is **100% component-driven**, which means that different teams can safely integrate changes without having to wait, fight over master, or break anything. Developers can continuously and safely propagate changes to components across all impacted applications.

Instead of building every monolithic project in one build process that all teams have to go through, the component-driven CI splits the build process so that it only runs on the components that actually changed, and propagates the changes infinity up their dependency graph, to build every impacted component, on every page, in every app.

![](https://miro.medium.com/max/1400/0*s9T4NmDAvHOwVCG7)

This lets us free the release pipeline of different teams from each other, so that each team can independently and continuously release changes and updates to production. It also means about 50X faster builds, since not everything is built. And, we can pinpoint issues and bugs down to specific components.

Successful changes can be automatically translated into pull-requests that are automatically sent to all relevant projects, so that their maintainers can safely adopt the changes and make sure their applications are always up to date with the latest versions. Bit.dev also provides us with an overview of all components in our different projects, so that we can monitor and regulate exactly who’s using which component in what version.

# Our process

[Conways’ Law](https://en.wikipedia.org/wiki/Conway%27s_law) states that there’s a strong correlation between software architecture and the organizational structure. That is very true when building micro front-ends, as the main goal is to make the organization more efficient. Decoupling codebases, enabling integrations, or splitting the release pipeline, are all ways to build better software as well as autonomous agile teams.

## Autonomous teams

[![](https://miro.medium.com/max/2000/1*u7RfskQEPpjBkws9GjS2iQ.png)](https://bit.dev/teambit/evangelist)

![](https://miro.medium.com/max/2048/1*-yYvif27WMYBDeb_jZzaKg.png)

A small team empowered to make decisions and relentlessly drive toward their goals will deliver results and insights much more quickly than a larger group. After all, who knows the product’s users and problems better than the team who owns it, right?

Thanks to the flexibility of our component-driven architecture, we were able to assign team ownership and a much more dynamic, vertical and context-relevant way. Instead of having a “front-end team” for bit.dev and a “marketing website team” work together on a monolithic app, we completely separated these teams in every way.

To start with, a few developers are considered the “front-end infrastructure team” and are reporting directly to maintain the bit.dev platform’s basic set of components. On this team there’s also a designer, a product manager and a few more stakeholders. They build, release, and update their features independently from other teams that use them.

The “Component Search” team, responsible for the complex search feature on bit.dev, is made of a few developers (both front and back), one NLP researcher, and a product manager. It exposes components for other teams to integrate into their products.

The “Component Discovery” team includes a few developers, a part-time designer, and a part-time product manager, to build the set of components used to document, visualize, and interact with the components shared on the bit.dev platform. In fact, thanks to Bit, the same documentation components are used both in Bit’s local development workspace, as well as in the cloud platform, are all built by this team.

A few more developers were assigned to the marketing team to build the marketing set of components, along with a few marketers and a designer, and these components are used to compose our marketing website as well as a few more applications.

The customer success team, with its own developers, builds and maintains its own set of components that implement different user interactions used across the Bit.dev platform, and even in additional websites and applications we build.

And so the list goes on, while each feature becomes a team autonomously responsible for building and shipping components, for other teams to integrate and use as well.

## Simple, decoupled codebases

Decoupling codebases makes features easier to develop, test, maintain, replace, or upgrade. We wanted to be continuously able to add new technologies and features.

Each of our teams works in a completely different and decoupled codebase. It develops, tests, and maintains its features without the limitations and pains of working inside a comlex monolith with other teams.

The source-code for each feature or product is naturally much smaller and simpler than that of the entire application, which makes eah codebase much easier to evelop, test, and maintain without the limitations and pains of working together inside a monolith.

If you look back at the “base-ui” and “evangelist” examples on the [bit.dev ](https://bit.dev/)homepage, you’ll notice that each set of components is developed in a different codebase. Both sets are decoupled from each other, and are integrated together to create different pages, features, and applications.

Since all codebases are decoupled from each other, and each is composed mostly if not entirely out of components, it also becomes much (much) easier to gradually refactor parts of our applications, so that we can quickly and safely add or replace technologies.

Over time, having to clearly define what code belongs in each codebase, is a great way to better understand the architecture we’re building, and the role of each part inside it.

## Independent release pipelines

We are able to split and decouple the release pipeline of different teams from each other, so that every team can independently build and release changes to multiple applications, without waiting for versions to bloat or fighting over master branches.

![](https://miro.medium.com/max/1070/0*9cxt1vAhhJXyTOnv)

As mentioned above, through Bit and Bit.dev we are able to assign a custom yet standardized build pipeline for every team’s set of components. So despite being built separately, all components can go through the same tasks and tools.

Then, the (50X faster) component-driven CI process on Bit.dev (in Beta) maps and builds changes up the propagating dependency graph of all dependent components across every single page and every single application.

Put into simple words, every team can make a change to any component, independently build these changes, and learn if and how it breaks other components and other teams across all relevant applications.

If all is well, the changes are automatically translated into a Pull-Request that is sent to all relevant projects, so that their owners can update their components. They even get notifications and reminders via Slack. In the Bit.dev “Projects” feature (another one of our teams), we can view and monitor who adopted which PR and where.

So instead of messing with cumbersome iframes or finding alternative solutions, we rely on build-time integrations that do not couple our release processes together. For now, this works amazingly well for us, and our component-driven CI will be out of Beta within weeks, so feel free to take a test drive when it’s out too. In the future, we do have a plan to go all the way and enable component-driven deployments to applications.

## More incremental upgrades

Now that our codebase is built from decoupled smaller codebases, which are built with modular components that are independently versioned, we have gained a very useful ability to easily add, replace, hotfix, or even rollback a single component or feature.

![](https://miro.medium.com/max/1338/0*lF_o2wF1YnKN5nWv)

Teams can make case-by-case decisions, rapidly change and deliver upgrades and features, and treat refactoring as a gradual on-going process that can be done one piece at a time. Also, our entire software become more resilient, as it becomes almost impossible for developers to break things outside the scope of their components.

One thing that we especially enjoy, is the ability to respond fast to user requests. When a developer asks for a new component build environment that support a certain Stencil version, for example, we can create and add it in a few hours instead of weeks. And, since much of Bit is open-source, we can make it easy for people to extend or replace any part of their toolset on their own. This makes our entire team much more efficient.

## Infinite component reuse and collaboration

[![](https://miro.medium.com/max/1400/1*JLkB6aSk-U2VaotgidO2Vg.gif)](https://bit.dev/)

We publish all our components to Bit.dev. There all our teams share, discover, collaborate, and reuse components with each other in fun and effective way.

Added features such as visual component documentation, a smart component search, and even live simulations all help to make all our components discoverable so that we don’t have to maintain any additional documentation websites, registries or tools.

This collaborative system makes it easier for developers to share code, suggest feedback, and ensure consistency. We especially enjoy the fact that it helps new developers who join the team cut their learning curve, as they can find and start using existing components so that they can hit the ground running and start building.

It’s also a useful way for us to improve collaboration between developers and other stakeholders like our designers and product who can now see all our components.

![](https://miro.medium.com/max/1400/0*waYQD_Ilpdx5jqqg)

# Conclusion

Some say micro front-ends is nothing but a “good component model”. For us, it was a good component model as much as it was a better way to build our own team, improve the way we work, build better modular software, and deliver it faster and more often.

For larger organizations, independent team delivery is a true game-changer in their ability to build and ship successful web applications. So is the ability to standardize component development, and allow teams to share and collaborate with each other.

For [smaller teams](https://www.heavybit.com/library/podcasts/jamstack-radio/ep-59-the-component-marketplace-with-alexander-karan-of-climateclever/), adopting a flexible and scalable architecture will improve their ability to grow, rapidly add new features, onboard new people, and focus on core technology and innovation instead of on less important things.

I hope you’ll find something in the idea of component-driven micro front-ends that can be useful for you, and thanks for reading!