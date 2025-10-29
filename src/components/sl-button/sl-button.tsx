import { Component, Prop, h, Host } from '@stencil/core';

/**
 * @slot - The button's content
 */
@Component({
  tag: 'sl-button',
  styleUrl: 'sl-button.css',
  shadow: true,
})
export class SlButton {
  /**
   * The button's variant style
   */
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';

  /**
   * The button's size
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Disables the button
   */
  @Prop() disabled = false;

  /**
   * The button's type
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Makes the button full width
   */
  @Prop() fullWidth = false;

  /**
   * Accessible label for the button (used when content is icon-only)
   */
  @Prop() ariaLabel?: string;

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          class={{
            button: true,
            [`button--${this.variant}`]: true,
            [`button--${this.size}`]: true,
            'button--full-width': this.fullWidth,
            'button--disabled': this.disabled,
          }}
          aria-label={this.ariaLabel}
          aria-disabled={this.disabled ? 'true' : 'false'}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
