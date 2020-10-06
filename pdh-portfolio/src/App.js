import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: #717a88;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
}

export default App;
