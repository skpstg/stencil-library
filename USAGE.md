# Usage Examples

## Vanilla JavaScript / HTML

### Using CDN (Lazy Loading)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stencil Components Demo</title>
  <script type="module" src="https://unpkg.com/stencil-components/dist/stencil-components/stencil-components.esm.js"></script>
</head>
<body>
  <sl-button variant="primary">Click me</sl-button>
  <sl-card elevation="md">
    <div slot="header">Welcome</div>
    <p>This is a demo of Stencil components.</p>
  </sl-card>
</body>
</html>
```

### Using NPM Package

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Stencil Components Demo</title>
</head>
<body>
  <sl-button id="myButton" variant="success">Click me</sl-button>
  
  <script type="module">
    import { defineCustomElements } from './node_modules/stencil-components/loader/index.js';
    
    defineCustomElements();
    
    // Add event listener
    document.getElementById('myButton').addEventListener('click', () => {
      alert('Button clicked!');
    });
  </script>
</body>
</html>
```

## React

### Installation

```bash
npm install stencil-components
```

### Setup (in your app's entry point)

```tsx
// src/index.tsx or src/main.tsx
import { defineCustomElements } from 'stencil-components/loader';

defineCustomElements();
```

### Usage in Components

```tsx
import React from 'react';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="app">
      <h1>Stencil Components in React</h1>
      
      <sl-button 
        variant="primary" 
        size="large"
        onClick={handleClick}
      >
        Click me
      </sl-button>

      <sl-card elevation="lg" interactive>
        <div slot="header">
          <h2>Product Card</h2>
        </div>
        <p>This is a product description.</p>
        <div slot="footer">
          <sl-button variant="success" size="small">
            Buy Now
          </sl-button>
        </div>
      </sl-card>
    </div>
  );
}

export default App;
```

### TypeScript Support

For proper TypeScript support in React, add to your `react-app-env.d.ts` or create a `custom-elements.d.ts`:

```typescript
declare namespace JSX {
  interface IntrinsicElements {
    'sl-button': any;
    'sl-card': any;
  }
}
```

## Vue 3

### Setup (in main.ts or main.js)

```typescript
import { createApp } from 'vue';
import App from './App.vue';
import { defineCustomElements } from 'stencil-components/loader';

const app = createApp(App);

// Tell Vue to ignore custom elements
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('sl-');

defineCustomElements();

app.mount('#app');
```

### Usage in Components

```vue
<template>
  <div class="app">
    <h1>Stencil Components in Vue</h1>
    
    <sl-button 
      variant="primary" 
      size="large"
      @click="handleClick"
    >
      Click me
    </sl-button>

    <sl-card elevation="lg" :interactive="true">
      <div slot="header">
        <h2>{{ cardTitle }}</h2>
      </div>
      <p>{{ cardContent }}</p>
      <div slot="footer">
        <sl-button variant="success" size="small">
          Buy Now
        </sl-button>
      </div>
    </sl-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cardTitle = ref('Product Card');
const cardContent = ref('This is a product description.');

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Angular

### Setup (in app.module.ts)

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { defineCustomElements } from 'stencil-components/loader';

defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Usage in Components

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>Stencil Components in Angular</h1>
      
      <sl-button 
        variant="primary" 
        size="large"
        (click)="handleClick()"
      >
        Click me
      </sl-button>

      <sl-card elevation="lg" [interactive]="true">
        <div slot="header">
          <h2>{{ cardTitle }}</h2>
        </div>
        <p>{{ cardContent }}</p>
        <div slot="footer">
          <sl-button variant="success" size="small">
            Buy Now
          </sl-button>
        </div>
      </sl-card>
    </div>
  `
})
export class AppComponent {
  cardTitle = 'Product Card';
  cardContent = 'This is a product description.';

  handleClick() {
    console.log('Button clicked!');
  }
}
```

## Svelte

### Setup (in main.js)

```javascript
import App from './App.svelte';
import { defineCustomElements } from 'stencil-components/loader';

defineCustomElements();

const app = new App({
  target: document.getElementById('app')
});

export default app;
```

### Usage in Components

```svelte
<script>
  let cardTitle = 'Product Card';
  let cardContent = 'This is a product description.';

  function handleClick() {
    console.log('Button clicked!');
  }
</script>

<div class="app">
  <h1>Stencil Components in Svelte</h1>
  
  <sl-button 
    variant="primary" 
    size="large"
    on:click={handleClick}
  >
    Click me
  </sl-button>

  <sl-card elevation="lg" interactive={true}>
    <div slot="header">
      <h2>{cardTitle}</h2>
    </div>
    <p>{cardContent}</p>
    <div slot="footer">
      <sl-button variant="success" size="small">
        Buy Now
      </sl-button>
    </div>
  </sl-card>
</div>
```

## Custom Elements (Standalone)

For bundlers that support custom elements natively:

```javascript
import { SlButton, SlCard } from 'stencil-components/dist/components';

// Components are automatically registered
// Now you can use them in your HTML
```

## Framework-Agnostic Event Handling

All components emit standard DOM events. You can listen to them in any framework:

```javascript
// Vanilla JS
document.querySelector('sl-button').addEventListener('click', (e) => {
  console.log('Clicked!', e);
});

// React
<sl-button onClick={(e) => console.log('Clicked!', e)}>Click</sl-button>

// Vue
<sl-button @click="(e) => console.log('Clicked!', e)">Click</sl-button>

// Angular
<sl-button (click)="handleClick($event)">Click</sl-button>

// Svelte
<sl-button on:click={(e) => console.log('Clicked!', e)}>Click</sl-button>
```

## Theming in Different Frameworks

Since the library uses CSS custom properties, theming works the same way across all frameworks:

```css
/* Global theme customization */
:root {
  --sl-color-primary: #ff6b6b;
  --sl-color-primary-hover: #ee5a52;
  --sl-spacing-md: 1.5rem;
  --sl-border-radius-md: 0.5rem;
}

/* Dark mode */
.dark-theme {
  --sl-color-background: #1a1a1a;
  --sl-color-text-primary: #f0f0f0;
  --sl-color-border: #333333;
}
```

Apply to any framework's component:

```html
<!-- React, Vue, Angular, Svelte, or vanilla HTML -->
<div class="dark-theme">
  <sl-button variant="primary">Themed Button</sl-button>
</div>
```
