# Hi there, thanks for checking out my website 👋

Check it out in production here: [blaketarter.com](https://blaketarter.com)

This website was built with [Next](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). It's intentionally over-engineered for a simple one-page website. I like to use my personal website as a playground for new technologies or new ideas. Sometimes simply to show off stuff that I know how to do.

There is a suite of tests that run in GitHub Actions (and can be ran locally) including:

- Unit tests using [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/)
- Linting with [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/)
- Type checking with [TypeScript](https://www.typescriptlang.org/)

The site can be exported as a static site that should run as expected and look fine even with JavaScript disabled in the browser.
To build and run the site in dev mode you can run `npm run dev`. You can also build the production version with `npm run build` and then start it with `npm run start`.

A few of the features that were built custom into this site are:

- A light/dark theme based on the OS `prefers-color-scheme`
- CSS variables used to define theme that change based on `@media` queries
- On-scroll fade-in animations for elements that respects `prefers-reduced-motion`
- On-scroll parallax effects that also respects `prefers-reduced-motion`
- A complicated `Typer` component that shows off usage of hooks (including `useTransition`)
