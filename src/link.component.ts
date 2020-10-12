import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import linkStyles from './link.styles';
import template from './link.template';

@customElement('sp-link')
export class Link extends Base {
  public static componentStyles = [linkStyles];

  @property({ type: String }) path = '';
  @property({ type: String }) label = '';
  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) subtle = false;

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-link': Link;
  }
}
