import { Component, Prop, h, Host } from '@stencil/core';

/**
 * @slot - The card's main content
 * @slot header - The card's header content
 * @slot footer - The card's footer content
 */
@Component({
  tag: 'sl-card',
  styleUrl: 'sl-card.css',
  shadow: true,
})
export class SlCard {
  /**
   * Adds elevation shadow to the card
   */
  @Prop() elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Makes the card interactive (adds hover effect)
   */
  @Prop() interactive = false;

  /**
   * Accessible label for the card region
   */
  @Prop() label?: string;

  /**
   * ARIA role for the card
   */
  @Prop() role: string = 'region';

  render() {
    return (
      <Host>
        <div
          class={{
            card: true,
            [`card--elevation-${this.elevation}`]: true,
            'card--interactive': this.interactive,
          }}
          role={this.role}
          aria-label={this.label}
        >
          <div class="card__header">
            <slot name="header"></slot>
          </div>
          <div class="card__body">
            <slot></slot>
          </div>
          <div class="card__footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
