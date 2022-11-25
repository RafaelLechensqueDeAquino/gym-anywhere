import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Shop from './pages/shop';
import MyBag from './pages/myBag';
import GlobalStyle from './styles/globals';
import Hook from './hook';

function App() {
  return (
    <Hook>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/myBag" element={<MyBag />} />
      </Routes>
    </Hook>
  );
}

export default App;
