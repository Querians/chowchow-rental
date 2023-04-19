# Chowchow Online Rental

## Preparation

We strict to use yarn for this project. So if you haven't installed yarn, you can follow this [link](https://www.hostinger.com/tutorials/how-to-install-yarn). If you do not sure that having yarn yet or not, you can check by the code below.

```bash
yarn --version
```

### Clone repository

```bash
git clone https://github.com/Querians/chowchow-rental
```

### Installation

Install all packages.

```bash
yarn install
```

## Usage

### Develop All Front-end Page

```bash
yarn dev
```

### Develop Only Customer Page (Store)

You can access customer page is in path '**[apps/frontend](apps/frontend)**'.

```bash
yarn dev:frontend
```

### Develop Only Staff Page (Admin)

You can access staff page is in path '**[apps/admin](apps/admin)**'.

```bash
yarn dev:admin
```

## Create UI Components

1. Create file {component_name}.jsx in [packages/shared/ui/components](packages/shared/ui/components)
2. Export Component in [packages/shared/ui/index.js](packages/shared/ui/index.js)
3. Import to use in pages

## Front-End UI Packages & Framework

- [Next.js](https://nextjs.org/docs/getting-started)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Flowbite](https://flowbite.com/docs/forms/input-field/)
- [Flowbite-React](https://flowbite-react.com/)
- [React Icons](https://react-icons.github.io/react-icons)
- [Jōtai](https://jotai.org)
  - [tutorial](https://egghead.io/courses/manage-application-state-with-jotai-atoms-2c3a29f0)

## Format Code

Please always format before commit code.

```bash
yarn lint
yarn format
```

## Recommend Extension for VScode

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
