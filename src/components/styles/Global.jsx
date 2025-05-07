import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`

  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    background: white;
    color: hsl(192, 100%, 9%);
    font-family: sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    /* opacity: 0.6; */
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }
`


export default GlobalStyles