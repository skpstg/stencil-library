import { newSpecPage } from '@stencil/core/testing';
import { SlCard } from '../sl-card';

describe('sl-card', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card>Card content</sl-card>`,
    });
    expect(page.root).toBeTruthy();
    const card = page.root?.shadowRoot?.querySelector('.card');
    expect(card).toBeTruthy();
    expect(card?.getAttribute('role')).toBe('region');
  });

  it('renders with custom elevation', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card elevation="lg">Content</sl-card>`,
    });
    const card = page.root?.shadowRoot?.querySelector('.card');
    expect(card?.classList.contains('card--elevation-lg')).toBe(true);
  });

  it('renders as interactive', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card interactive>Interactive Card</sl-card>`,
    });
    const card = page.root?.shadowRoot?.querySelector('.card');
    expect(card?.classList.contains('card--interactive')).toBe(true);
  });

  it('renders with aria-label', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card aria-label="Product details">Content</sl-card>`,
    });
    const card = page.root?.shadowRoot?.querySelector('.card');
    expect(card?.getAttribute('aria-label')).toBe('Product details');
  });

  it('renders with custom role', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card role="article">Article content</sl-card>`,
    });
    const card = page.root?.shadowRoot?.querySelector('.card');
    expect(card?.getAttribute('role')).toBe('article');
  });

  it('renders with header slot', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card><div slot="header">Header</div>Body</sl-card>`,
    });
    const header = page.root?.shadowRoot?.querySelector('.card__header');
    expect(header).toBeTruthy();
  });

  it('renders with footer slot', async () => {
    const page = await newSpecPage({
      components: [SlCard],
      html: `<sl-card>Body<div slot="footer">Footer</div></sl-card>`,
    });
    const footer = page.root?.shadowRoot?.querySelector('.card__footer');
    expect(footer).toBeTruthy();
  });

  it('renders all elevations correctly', async () => {
    const elevations = ['none', 'sm', 'md', 'lg', 'xl'];
    for (const elevation of elevations) {
      const page = await newSpecPage({
        components: [SlCard],
        html: `<sl-card elevation="${elevation}">Card</sl-card>`,
      });
      const card = page.root?.shadowRoot?.querySelector('.card');
      expect(card?.classList.contains(`card--elevation-${elevation}`)).toBe(true);
    }
  });
});
