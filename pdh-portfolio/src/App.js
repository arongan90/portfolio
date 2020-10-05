import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: pink;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>안녕하세요</div>
    </>
  );
}

export default App;
