import { html } from 'lit-element';
import { DemoLink } from './demo-link.component';

import '@spectrum/sp-link';
import '@spectrum/sp-container';

export default function template(this: DemoLink) {
  return html`
  <sp-container>
  <sp-rule medium label="Standard"></sp-rule>
  <sp-demo width="200">
<pre><sp-link path="/link" label="link label"></sp-link></pre>
  </sp-demo>
  <sp-rule medium label="Quiet"></sp-rule>
  <sp-demo width="200">
<pre><sp-link path="/link" label="link label" quiet></sp-link></pre>
  </sp-demo>
  <sp-rule medium label="Disabled"></sp-rule>
  <sp-demo width="200">
<pre><sp-link path="/link" label="link label" disabled></sp-link></pre>
  </sp-demo>
  <sp-rule medium label="Subtle"></sp-rule>
  <sp-demo width="200">
<pre><sp-link path="/link" label="link label" subtle></sp-link></pre>
  </sp-demo>
  </sp-container> 
  `;
}
