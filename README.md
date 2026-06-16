# select2-tailwindcss-theme

[![GitHub](https://img.shields.io/github/v/release/erimicel/select2-tailwindcss-theme?style=flat-square)](https://github.com/erimicel/select2-tailwindcss-theme)
[![npm version](https://img.shields.io/npm/v/select2-tailwindcss-theme?style=flat-square)](https://www.npmjs.com/package/select2-tailwindcss-theme)
[![npm](https://img.shields.io/npm/dm/select2-tailwindcss-theme?label=npm&style=flat-square)](https://www.npmjs.com/package/select2-tailwindcss-theme)
[![jsdelivr](https://data.jsdelivr.com/v1/package/gh/erimicel/select2-tailwindcss-theme/badge)](https://www.jsdelivr.com/package/gh/erimicel/select2-tailwindcss-theme)
[![License](https://img.shields.io/github/license/erimicel/select2-tailwindcss-theme?style=flat-square)](LICENSE)

[Select2](https://github.com/select2/select2) v4 theme for [TailwindCSS v3.4](https://tailwindcss.com/), inspired by [select2-bootstrap4-theme](https://github.com/ttskch/select2-bootstrap4-theme)

## Live demo

https://erimicel.github.io/select2-tailwindcss-theme/

## Repo and live demo for tailwindcss v4 theme

Demo: https://erimicel.github.io/select2-tailwindcss-v4-theme/

Repo: https://github.com/erimicel/select2-tailwindcss-v4-theme

## Features

- Single & multiple select
- Searchable dropdowns and AJAX / remote data
- Tags (dynamic option creation)
- Option groups (`<optgroup>`)
- Clearable selects (`allowClear`)
- Disabled selects and disabled options
- Validation / error states (`.is-invalid`, `:invalid`, `.field_with_errors`)
- Input groups (`.input-group`)
- Dark mode (`darkMode: "selector"`)
- RTL support (`dir="rtl"`)

## 📦 Installation

### CDN

```html
<!-- Latest -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/erimicel/select2-tailwindcss-theme/dist/select2-tailwindcss-theme-plain.min.css"
/>

<!-- Different version change (x.x.x) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/erimicel/select2-tailwindcss-theme@x.x.x/dist/select2-tailwindcss-theme-plain.min.css"
/>
```

Install the package and ensure you have TailwindCSS installed in your project:

```bash
# npm
$ npm install select2-tailwindcss-theme

# yarn
$ yarn add select2-tailwindcss-theme
```

## Usage

Initialize Select2 with the `tailwindcss-3` theme:

```js
$("select").select2({
  theme: "tailwindcss-3",
});
```

The stylesheet ships in two flavors — pick the one that matches your setup:

| File | When to use |
| --- | --- |
| `select2-tailwindcss-theme-plain.min.css` | **Standalone** — pre-compiled, drop-in CSS. No Tailwind build required (this is also what the CDN serves). |
| `select2-tailwindcss-theme.css` / `.min.css` | **With Tailwind in your build** — these contain `@apply` directives that your Tailwind/PostCSS pipeline resolves at build time. |

### Standalone (no Tailwind build)

Import the pre-compiled stylesheet directly:

```js
import "select2-tailwindcss-theme/dist/select2-tailwindcss-theme-plain.min.css";
```

### With tailwindcss config

Import the source stylesheet and let your Tailwind build resolve it:

```js
import "select2-tailwindcss-theme/dist/select2-tailwindcss-theme.css"; // Regular version
// OR
import "select2-tailwindcss-theme/dist/select2-tailwindcss-theme.min.css"; // Minified version
```

Update your Tailwind configuration to include the package in the content array:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/select2-tailwindcss-theme/dist/*.css", // Include the package
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Enable dark mode by `dark` class toggle:

```js
// tailwind.config.js
module.exports = {
  // The selector strategy replaced the class strategy in Tailwind CSS v3.4.1.
  darkMode: "selector",
};
```

### States & layouts

The theme also styles a few common states and layouts:

```html
<!-- Validation / error state: add .is-invalid to the <select> (or use :invalid / Rails .field_with_errors) -->
<select class="is-invalid"> ... </select>

<!-- Input group: wrap a flex row with .input-group -->
<div class="flex input-group">
  <span> ... </span>
  <select> ... </select>
</div>

<!-- RTL: set dir="rtl" on the select -->
<select dir="rtl"> ... </select>
```

## Development

```bash
git clone https://github.com/erimicel/select2-tailwindcss-theme.git
cd select2-tailwindcss-theme
npm install
```

Modify the SCSS file in src/.scss. Build the CSS:

```bash
npm run build:all   # Build all files and update demo as-well
```

## Contributing

Contributions, issues, and feature requests are welcome! Fork the repository, create a new branch, commit your changes, push to your branch, and open a pull request:

```bash
git checkout -b feature-branch-name
git commit -m 'Add some feature'
git push origin feature-branch-name
```

If you find this package helpful, please ⭐ the repository on GitHub!
