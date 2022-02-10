import React, { useState } from "react";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

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
  const [theme, setTheme] = useState(LightTheme)
  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === 'light' ? DarkTheme : LightTheme)
    }}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} /> 
          <Route path='/' element={<Home />}/> 
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
