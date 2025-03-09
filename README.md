# diabolo-notifications

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
- [PLaywright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).
- [Vitest](https://marketplace.visualstudio.com/items?itemName=vitest.explorer).

## Requirements

- Node
- pnpm
- git

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

End to end tests are run on webcomponents build.

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
pnpm build:lib

# Runs the end-to-end tests
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Build web components

```sh
pnpm build:lib
```

### Check web components locally

```sh
pnpm serve:lib
```

and go to demo.html on your navigator

## Getting generated libs

Two artifacts are built: dist and dist-lib.

- dist contains built Vue project
- dist-lib contains built webcomponents project

You can get theses artifacts in github action by running the build action.

## Web components

the demo.html file demonstrates an example of how to use the notifications web component.
This webcomponent has two attributes :

- namespace: defines the namespace which will be use for data isolation.
- creation: when set to "false" the notification component will not display the creation button. The default value is "true".

## Possible improvements

- Provide additional CSS file with css variables to allow webcomponent customization.
- Enhance desgin, add CSS transitions, manage responsive.
- unit tests for the creation component.
- Use Conventional Commits and set git hooks pre-commit.
