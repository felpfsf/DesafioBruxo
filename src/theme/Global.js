import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: ${({ theme }) => theme.text};
    font-size: ${({ theme }) => theme.normal};
    
    width: 100%;

    background-color: ${({ theme }) => theme.background};
  }
`
