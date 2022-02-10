import React from "react";
import {createGlobalStyle} from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script';
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} /> 
          <Route path='/' component={Home}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
