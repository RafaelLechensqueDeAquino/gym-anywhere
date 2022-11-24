import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Shop from './pages/shop';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
