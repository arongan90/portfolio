import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Work from './components/ProjectLink/Work';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: nanum-gothic;
    width: 100%;
    margin: 0;
    position: relative;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
      <Route path="/geist" component={Work} />
    </>
  );
}

export default App;
