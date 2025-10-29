import { newSpecPage } from '@stencil/core/testing';
import { SlButton } from '../sl-button';

describe('sl-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button>Click me</sl-button>`,
    });
    expect(page.root).toBeTruthy();
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.type).toBe('button');
    expect(button?.hasAttribute('disabled')).toBe(false);
  });

  it('renders with custom variant', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button variant="success">Success</sl-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('button--success')).toBe(true);
  });

  it('renders with custom size', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button size="large">Large Button</sl-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('button--large')).toBe(true);
  });

  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button disabled>Disabled</sl-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.hasAttribute('disabled')).toBe(true);
    expect(button?.getAttribute('aria-disabled')).toBe('true');
    expect(button?.classList.contains('button--disabled')).toBe(true);
  });

  it('renders with aria-label', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button label="Close dialog">X</sl-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.getAttribute('aria-label')).toBe('Close dialog');
  });

  it('renders as full width', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button full-width>Full Width</sl-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('button--full-width')).toBe(true);
  });

  it('renders with submit type', async () => {
    const page = await newSpecPage({
      components: [SlButton],
      html: `<sl-button type="submit">Submit</sl-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.type).toBe('submit');
  });

  it('renders all variants correctly', async () => {
    const variants = ['primary', 'secondary', 'success', 'warning', 'danger'];
    for (const variant of variants) {
      const page = await newSpecPage({
        components: [SlButton],
        html: `<sl-button variant="${variant}">Button</sl-button>`,
      });
      const button = page.root?.shadowRoot?.querySelector('button');
      expect(button?.classList.contains(`button--${variant}`)).toBe(true);
    }
  });

  it('renders all sizes correctly', async () => {
    const sizes = ['small', 'medium', 'large'];
    for (const size of sizes) {
      const page = await newSpecPage({
        components: [SlButton],
        html: `<sl-button size="${size}">Button</sl-button>`,
      });
      const button = page.root?.shadowRoot?.querySelector('button');
      expect(button?.classList.contains(`button--${size}`)).toBe(true);
    }
  });
});
