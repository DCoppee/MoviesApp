import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '/src/pages/Home';
import Discover from '/src/pages/Discover';
import Login from '/src/pages/Login';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;