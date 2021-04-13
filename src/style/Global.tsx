import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from 'dlf-ui-kit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    background-image: url(https://i.ibb.co/y8PVSnZ/IMG-20210404-090954-688.jpg);
    background-blend-mode: multiply;
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
