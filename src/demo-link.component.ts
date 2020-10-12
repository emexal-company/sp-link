import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-link.styles';
import template from './demo-link.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Link } from '@spectrum/sp-link';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-link')
export class DemoLink extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-link': DemoLink;
  }
}
