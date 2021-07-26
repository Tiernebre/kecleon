# @tiernebre/kecleon

![Release Workflow](https://github.com/Tiernebre/kecleon/workflows/Release/badge.svg)
[![npm version](https://badge.fury.io/js/%40tiernebre%2Fkecleon.svg)](https://www.npmjs.com/package/@tiernebre/kecleon)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

My own personal design system / front-end toolkit that I utilize for my
software projects.

My goal was to build a library of components that I can use
for all of my personal projects without needing to be concerned
about specific CSS frameworks.

Kecleon is built on top of [Bulma](https://bulma.io/) for the CSS
styling, but I've iterated on the Bulma CSS with some of my personal
preferences and have also composed higher level components out of
the awesome ones that Bulma provides out of the box.

## Philosophies

Because this is my personal design system, there are some philosophies
that I've taken over my years of developing front-end web applications
and UIs that this I want this design system to truly show:

- Accessibility is important, not only for increasing the audience of
  your applications but also means your code is much higher quality.
- A mobile-first design approach, with general screen size responsiveness
  always being a consideration and feature of any component.
- Atomic Design translates very well to React based components, and
  lends to scalable and re-usable designs.

## Technologies Used

React is absolutely the way to go and is my preferred choice for a
front-end component library.

TypeScript support, so every component is statically typed and has
linter and static analysis checks to ensure quality is maintained
over time.

I'm using Storybook as a way to serve the components to be easier
to build and develop. Eventually I plan on publicly hosting an
up-to-date Storybook instance that demoes my components live!

Bulma is the CSS framework that drives Kecleon. Currently I am
relying heavily on Bulma's wonderful styles out of the box. Consumers
of Kecleon do not need to worry about Bulma, which makes it flexible
in the future say if new XYZ styling framework comes out and
I prefer that one more.

## Installing

If you wish to use kecleon in your project, all you need to do
is add it as a dependency, such as below:

```sh
yarn add @tiernebre/kecleon

# or if you use NPM

npm install @tiernebre/kecleon
```

## Developing

### Getting Started

#### Prerequisites

- Yarn

#### Steps

1. Install dependencies:

```sh
yarn install
```

2. Start up a local Storybook server that lets you develop the components without
   needing to link to another project:

```sh
yarn start
```

## License

This project is [MIT Licensed](./LICENSE).
