
import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw"; // Você pode criar essa função para converter pixels para viewport width (vw)

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
    /* Centraliza vertical e horizontalmente */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

