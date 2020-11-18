import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route } from 'react-router-dom';
import Home from './components/Main/Home';
import Geist from './components/ProjectLink/GeistProject/Geist';
import FoodFesta from './components/ProjectLink/FoodFestaProject/FoodFesta';
import PortFolio from './components/ProjectLink/PortFolioProject/PortFolio';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    width: 100%;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
      <Route path="/geist" component={Geist} />
      <Route path="/foodfesta" component={FoodFesta} />
      <Route path="/portfolio" component={PortFolio} />
    </>
  );
}

export default App;
