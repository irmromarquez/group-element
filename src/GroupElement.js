import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './GroupElement-styles.js';
import 'input-element/input-element';
import 'button-element/button-element';

import bootstrap from "./styles/bootstrap";
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<group-element></group-element>
```

##styling-doc

@customElement group-element
*/
export class GroupElement extends LitElement {
  static get is() {
    return 'group-element';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('group-element-shared-styles'),
      bootstrap
    ];
  }

  static get properties() {
    return {
        groupIdentifier: { type: String, attribute: "group-identifier" },
        groupValues: { type: Array },
        inputValue: { type: String, attribute: "input-value" },
    };
}

constructor() {
    super();
    this.groupValues = [];
    this.inputValue = '';
}

getButtonElements() {
    return this.shadowRoot.querySelectorAll("button-element");
}

getButtonSelected(name) {
    return this.shadowRoot.querySelector("#" + name);
}

render() {
    return html`
        <div class="bg-light p-3 mb-3">
            <input-element
                .value="${this.inputValue}"
                .identifier="${this.groupIdentifier}"
                class="d-flex justify-content-center"
            ></input-element>
            <div class="d-flex justify-content-center">
                ${this.groupValues.map(
                    (element) =>
                        html` <button-element
                            id=${element}
                            .name=${element}
                            .identifier="${this.groupIdentifier}"
                        ></button-element>`
                )}
            </div>
        </div>
    `;
}

  
}
