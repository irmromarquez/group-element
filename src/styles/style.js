import { css } from "lit-element";

export default css`
:host * {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

:host button {
  background-color: var(--primary-color, #29434e);
  display: inline-block;
  border: none;
  color: var(--text-color, #fff);
  font-family: var(--font-family, sans-serif);
  font-size: 17px;
  padding: 1em 1em;
  text-decoration: none;
}

:host button:hover {
  background-color: var(--secondary-color, #546e7a);
}

:host button:active {
  position: relative;
  top: 1px;
}

:host input {
  width: var(--input-width, 100vw);
}

:host .selected {
  -webkit-box-shadow: inset 0px -5px 0px 0px var(--third-color, #819ca9);
          box-shadow: inset 0px -5px 0px 0px var(--third-color, #819ca9);
}
`;
