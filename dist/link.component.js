import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import linkStyles from './link.styles';
import template from './link.template';
let Link = class Link extends Base {
    constructor() {
        super(...arguments);
        this.path = '';
        this.label = '';
        this.quiet = false;
        this.disabled = false;
        this.subtle = false;
    }
    render() {
        return template.call(this);
    }
};
Link.componentStyles = [linkStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Link.prototype, "path", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Link.prototype, "label", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Link.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Link.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Link.prototype, "subtle", void 0);
Link = __decorate([
    customElement('sp-link')
], Link);
export { Link };
//# sourceMappingURL=link.component.js.map