# stylelint-showcase

Default Stylelint configuration and usage example.

## Requirements

- **Node.js >= 20.18.3**  
  Required to avoid the JSON modules experimental warning during Stylelint usage.
- **pnpm 10.15.1**

## What is used

- **stylelint**  
  Main tool for linting CSS/SCSS code. It reports errors and warnings without automatically fixing anything.

- **stylelint-config-standard-scss**  
  Base rule set for SCSS projects.

- **@stylistic/stylelint-plugin**  
  Restores stylistic rules removed from modern Stylelint core, such as indentation, quotes, whitespace, and similar formatting rules.

- **VS Code Stylelint extension**  
  Displays lint errors and warnings directly in the editor while working.

## Project purpose

This project is a reusable default Stylelint setup for HTML / Sass projects:

- one tool for style linting
- no Prettier
- no auto-formatting
- no auto-fixing
- full manual control over rules

## Install

```bash
pnpm install
```

## Run

```bash
pnpm dev
```

## Run style linting manually

Check all SCSS files:

```bash
pnpm lint:styles
```

Verbose output:

```bash
pnpm lint:styles:verbose
```

## Editor usage

For VS Code, use the extension:

- **Stylelint** (`stylelint.vscode-stylelint`)

The project uses workspace settings from:

```text
.vscode/settings.json
```

These settings provide:

- Stylelint error reporting directly in the editor
- SCSS validation
- no automatic fixing on save

## Note

If you need to bypass linting for a specific part of the code, you can wrap it with Stylelint disable / enable comments, for example:

```scss
/* stylelint-disable */
@font-face {
  font-family: 'Inter';
  src: url('../../fonts/Inter-VariableFont_opsz,wght.woff2') format('woff2'),
       url('../../fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype');
  font-display: swap;
  font-weight: 100 900;
  font-style: normal;
}
/* stylelint-enable */
```
