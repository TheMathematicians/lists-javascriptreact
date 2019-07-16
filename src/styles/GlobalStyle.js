import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.primary};
    min-height: 100vh;
    font-family: 'Segoe UI', Frutiger, 'Frutiger Linotype', 'Dejavu Sans', 'Helvetica Neue', Arial, sans-serif; ;
  }

  #root {
    min-height: 100%;
  }
`;
