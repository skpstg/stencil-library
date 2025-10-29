[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Stencil Component Library

> A modern, accessible web component library built with StencilJS

This is a production-ready web component library built with StencilJS, featuring TypeScript support, global theming capabilities, accessibility standards compliance, and excellent developer experience.

## ✨ Features

- **TypeScript First**: Written in TypeScript for type safety and better developer experience
- **Global Theming**: CSS custom properties for easy theming and customization
- **Accessible**: Complies with WCAG accessibility standards (ARIA attributes, keyboard navigation)
- **Platform Agnostic**: Works with vanilla JavaScript, React, Vue, Angular, and other frameworks
- **High Test Coverage**: >90% test coverage with comprehensive unit tests
- **Developer Experience**: ESLint, Prettier, and modern tooling configured
- **Shadow DOM**: Encapsulated styles with Shadow DOM support
- **Tree Shakeable**: Optimized build outputs for minimal bundle sizes

## 🚀 Getting Started

### Installation

```bash
npm install stencil-components
```

### Usage

#### Vanilla JavaScript / HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="https://unpkg.com/stencil-components/dist/stencil-components/stencil-components.esm.js"></script>
  </head>
  <body>
    <sl-button variant="primary">Click me</sl-button>
    <sl-card elevation="md">
      <div slot="header">Card Title</div>
      Card content goes here
    </sl-card>
  </body>
</html>
```

#### React

```tsx
import { defineCustomElements } from 'stencil-components/loader';

// Call this once in your app's entry point
defineCustomElements();

function App() {
  return (
    <div>
      <sl-button variant="success">Success</sl-button>
      <sl-card interactive>
        <div slot="header">Product Card</div>
        <p>Product description</p>
      </sl-card>
    </div>
  );
}
```

#### Vue

```vue
<template>
  <div>
    <sl-button variant="primary">Click me</sl-button>
    <sl-card elevation="lg">
      <div slot="header">Card Title</div>
      Card content
    </sl-card>
  </div>
</template>

<script>
import { defineCustomElements } from 'stencil-components/loader';

defineCustomElements();
</script>
```

## 📦 Components

### Button (`<sl-button>`)

An accessible button component with multiple variants and sizes.

**Props:**
- `variant`: `'primary' | 'secondary' | 'success' | 'warning' | 'danger'` (default: `'primary'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)
- `fullWidth`: `boolean` (default: `false`)
- `label`: `string` (optional - accessible label for icon-only buttons)

**Example:**
```html
<sl-button variant="primary" size="large">Large Primary Button</sl-button>
<sl-button variant="danger" disabled>Disabled Danger Button</sl-button>
<sl-button full-width>Full Width Button</sl-button>
<sl-button label="Close">×</sl-button>
```

### Card (`<sl-card>`)

A flexible card component with header, body, and footer slots.

**Props:**
- `elevation`: `'none' | 'sm' | 'md' | 'lg' | 'xl'` (default: `'md'`)
- `interactive`: `boolean` (default: `false`)
- `label`: `string` (optional - accessible label for the card)
- `role`: `string` (default: `'region'`)

**Slots:**
- `header`: Card header content
- (default): Card body content
- `footer`: Card footer content

**Example:**
```html
<sl-card elevation="lg" interactive>
  <div slot="header"><h3>Card Title</h3></div>
  <p>This is the card content.</p>
  <div slot="footer">
    <sl-button size="small">Action</sl-button>
  </div>
</sl-card>
```

## 🎨 Theming

The library uses CSS custom properties for theming. You can customize the appearance by overriding these variables:

```css
:root {
  /* Primary Colors */
  --sl-color-primary: #0070f3;
  --sl-color-primary-hover: #0051cc;
  
  /* Spacing */
  --sl-spacing-sm: 0.5rem;
  --sl-spacing-md: 1rem;
  --sl-spacing-lg: 1.5rem;
  
  /* Border Radius */
  --sl-border-radius-sm: 0.25rem;
  --sl-border-radius-md: 0.375rem;
  
  /* Shadows */
  --sl-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  /* And many more... */
}
```

### Dark Mode

Components support dark mode through the `theme` attribute:

```html
<div theme="dark">
  <sl-button>Button in dark mode</sl-button>
</div>
```

## ♿ Accessibility

All components are built with accessibility in mind:

- **ARIA Attributes**: Proper ARIA roles, labels, and states
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Visible focus indicators
- **Screen Reader Support**: Semantic HTML and ARIA labels

## 🧪 Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

### Run Tests

```bash
npm test
```

### Run Tests with Coverage

```bash
npm test -- --coverage
```

### Lint Code

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

### Build for Production

```bash
npm run build
```

## 📊 Test Coverage

The library maintains >90% test coverage across all components:

```
-------------------------|---------|----------|---------|---------|
File                     | % Stmts | % Branch | % Funcs | % Lines |
-------------------------|---------|----------|---------|---------|
All files                |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|
```

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. All tests pass (`npm test`)
2. Code is linted (`npm run lint`)
3. Code is formatted (`npm run format`)
4. Test coverage remains above 90%

## 📄 License

MIT

## 🔗 Resources

- [StencilJS Documentation](https://stenciljs.com/docs)
- [Web Components Standard](https://www.webcomponents.org/)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
