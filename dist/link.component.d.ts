import { Base } from '@spectrum/sp-base';
export declare class Link extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    path: string;
    label: string;
    quiet: boolean;
    disabled: boolean;
    subtle: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-link': Link;
    }
}
