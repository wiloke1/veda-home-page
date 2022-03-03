---
templateKey: blog-post
title: Autonomous Teams and the Composable Enterprise
date: 2022-03-03T08:26:29.923Z
description: The appeal of autonomous teams comes from their ability to be more
  agile, creative, and responsive — and therefore more competitive and
  innovative.
featuredimage: /img/0_oi_4hhwvivuy4xwj.jpg
tags:
  - Enterprise
  - Software
  - Development
  - Startup
  - Programming
  - JavaScript
---
The appeal of autonomous teams comes from their ability to be more agile, creative, and responsive — and therefore more competitive and innovative.

By enabling teams to independently own specific business responsibilities, an [enterprise becomes more composable](https://blog.bitsrc.io/the-composable-enterprise-a-guide-609443ae1282). In a Composable Enterprise, the software architecture enables rapid composition of customized applications using modular components, built and shipped by autonomous teams.

[Gartner](https://www.gartner.com/smarterwithgartner/adapt-business-applications-to-deliver-agility-and-innovation) predicts that this evolution of architecture will gradually become the new standard, enabling continuous delivery while improving performance and reducing costs:

> “The dynamic experience of the composable business will become the prevailing architecture, integration and delivery model for software innovation”

This article explores why it’s challenging to empower teams to be more autonomous, and how component-driven software can be a powerful tool in the composable enterprise transformation.

# Autonomous teams are good for business

Businesses today expect their teams to have increasing autonomy to drive innovation and business results through:

1. **Faster delivery** — Autonomous teams deliver faster by removing unnecessary processes, reliances and dependencies on other teams and shared resources, making them more efficient and effective.
2. **Market intimacy** — An autonomous team owning a very specific business responsibility becomes intimately knowledgeable of its customers and users, making it better equipped to deliver a tailored experience.
3. **Better response —** An autonomous team can spot subtle changes in the market earlier, and respond faster with with the necessary changes to maintain a competitive edge.
4. **Greater resilience** — Interdependencies may introduce points of failure, in which a single team may compromise the ability for the organization to meet its goals. Autonomous teams work like independent cells, making the system more resilient.
5. **Greater scalability** — Having loosely-coupled, autonomous teams owning specific business responsibilities makes it easier to add additional teams, and manage them. Just like with software systems, a modular and distributed organization is easier to scale.

Enterprises often struggle to accelerate development due to team structure and software architecture. As a result, continuous [delivery of business value is restricted when autonomy is low](https://www.oreilly.com/library/view/designing-autonomous-teams/9781491994320/ch01.html).

According to [Conway’s Law](https://en.wikipedia.org/wiki/Conway%27s_law), software architecture mirrors that of the organization that built it. A composable enterprise will develop composable applications. Monolithic software and autonomous teams don’t go together.

# Why enterprises struggle with autonomous teams

A successful autonomous team needs to be able to move fast without waiting for other teams or shared resources. You can think of this using the following metric:

> How much of their time does a team spend waiting for resources or other teams?

Ideally, we would want that to be zero. However, some interdependencies are necessary and serve a purpose, so we would want teams to have zero time wasted, but as long as the organizational standards are met.

![](https://miro.medium.com/max/60/1*QxEaXEa0u7G6Rg-utlTt3w.jpeg?q=20)

![](https://miro.medium.com/max/1360/1*QxEaXEa0u7G6Rg-utlTt3w.jpeg)

Waiting for other teams is an indication that the team is not autonomous

We can break team interdependencies into two: **Horizontal** and **Vertical**:

* **Horizontal coupling** occurs between different development teams as part of their collaboration on a specific project: Sharing the codebase, version and CI/CD pipeline. Legacy tools couple teams over shared resources, creating a web monolith limiting each team’s ability to build and ship independently.
* **Vertical coupling** occurs between a development team and a centralized enterprise team serving as a control function, such as security, compliance, quality assurance, or design. Existing processes maintain consistency across an enterprise’s software, but consume time and resources as overhead.

Having many different teams working on the same application means they’re competing for resources (codebase, version, pipeline), slowing down delivery.

Having many different apps pose another challenge as teams create overlapping efforts and **duplicate code**. Developing the same features in multiple applications wastes time and resources in the short-term, and creates a growing tech debt and inconsistency in the long-term.

![](https://miro.medium.com/max/60/1*ttDnRb-ywz4Lus7MTwLEuQ.png?q=20)

![](https://miro.medium.com/max/1400/1*ttDnRb-ywz4Lus7MTwLEuQ.png)

So how can we move from highly-coupled teams to loosely-coupled teams within the same application? How can teams own business responsibilities independently while maintaining standards and consistency?

This is where decoupled software components make all the difference — they enable teams to build and ship code independently, and have each component integrated and used in multiple applications to maintain consistency.

Using components, ageing monoliths can be replaced by composed apps.

**Goodbye Monolith, Hello Composable Enterprise.**

# From autonomous teams to the composable enterprise

> “We want our teams and services to be tightly aligned, but loosely coupled” — Dianne Marsh, Director of Engineering, Cloud Tools, Netflix

Components essentially become building blocks for composing enterprise applications since they each serve a specific business responsibility. Having teams that can independently build and ship those components is what ultimately enables the composable enterprise.

![](https://miro.medium.com/max/60/1*UTt3UJ0lNaK9-sGv8txf1w.png?q=20)

![](https://miro.medium.com/max/1400/1*UTt3UJ0lNaK9-sGv8txf1w.png)

Transitioning to the Composable Enterprise requires autonomous teams and software component

Utilizing [component-driven software](https://bit.dev/) for the transition to a composable enterprise requires several factors:

1. **Separate codebase, version and pipeline** — Composing applications in a scalable, efficient and consistent way hinges on having components that are decoupled and ready to be integrated. To accomplish this, each component must be independently developed in its own codebase, and then independently built, tested, versioned, and released to production.
2. **Collaboration and integration** — To effectively compose applications, teams must be able to collaborate on each other’s components and continuously integrate them. This includes the discovery of existing components, their documentation, and the ability to visualize dependencies to understand and the company-wide component flow.
3. **Democratization of governance** — Components gives enterprises a way to standardize development, such as customizable development templates, dev environments, and build pipelines. These can be used to define and control the way components are developed, tested, published, shared, integrated and documented by each team individually across projects.

![](https://miro.medium.com/max/60/1*C5X5WTihXmCq7zEPgF1spQ.jpeg?q=20)

![](https://miro.medium.com/max/1400/1*C5X5WTihXmCq7zEPgF1spQ.jpeg)

As autonomous teams build components, they can serve them to the organization to build apps together

Using a platform for component-driven software, such as [Bit](https://bit.dev/), can go a long way towards the composable enterprise. With Bit, autonomous teams can build components and serve them for the organization’s software ‘production line’, helping developers to create, compose and collaborate on components and build apps together — while giving the enterprise tools to govern and standardize development.

Moving to component-driven software creates a **Component Economy** across the enterprise. This is more than just having a [component marketplace](https://blog.bitsrc.io/building-a-component-marketplace-for-your-team-31257314c56c) for development and product teams to discover components and drive adoption.

In the **Component Economy**, every component serves the entire enterprise, and creates exponential compounded value — Reusing components saves development time and resources, prevents duplication of code, speeds up delivery, reduces maintenance of the codebase, improves performance, enhances consistency and enables faster onboarding for new developers

Moreover, reusing components enables the enterprise to view every business responsibility in an isolated way, and make better informed ‘build vs. buy’ decisions: Should we build a component for messaging, or use Twilio as a component? Should we build a component for payments, or use Stripe?

This enables the organization to only consume the components it needs from 3rd party, and integrate them seamlessly into its applications. Every piece of software becomes interchangeable — and outsourceable if needed.

# Conclusion

Autonomous teams drive better business results, by moving faster, being closer to the market, and responding better to changes in market dynamics.

But team autonomy is not only a structural or cultural trait. It’s tightly related to the enterprise software architecture: A modular architecture empowers autonomous teams to independently develop and ship components. A monolithic architecture is restricting them from delivering business value.

Lowering the interdependencies teams have on each other — either vertically or horizontally — is key to realizing the benefits of the composable enterprise, replacing ageing monoliths with rapidly composed applications.

[Component-driven software](https://bit.dev/) can help enterprises make the transition to become composable: Have autonomous teams create versioned components independently in their own codebase, towards collaborating and composing apps together — all while standardizing the development process.

Feel free to comment and suggest your own ideas on how to make the transition into a Composable Enterprise, and bring the Component Economy to your organization.