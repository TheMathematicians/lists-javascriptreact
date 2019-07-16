import React from 'react';
// Ref: https://www.styled-components.com/docs/tooling#babel-macro
import styled, { ThemeProvider } from 'styled-components/macro';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/Theme';

const Wrapper = styled.div`
  color: ${props => props.theme.colors.secondary};
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 5em;
  font-weight: 100;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>L!nk It</Title>

        <GlobalStyle />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
