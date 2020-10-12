import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export default function template() {
    const classes = {
        'spectrum-Link--quiet': this.quiet,
        'is-disabled': this.disabled,
        'spectrum-Link--subtle': this.subtle
    };
    return html `
    <a href="${this.path}" class="spectrum-Link ${classMap(classes)}">${this.label}</a>
    `;
}
//# sourceMappingURL=link.template.js.map