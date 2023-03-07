import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '/src/pages/Home';
import Discover from '/src/pages/Discover';
import Details from '/src/pages/Details';
import Info from './Info';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Home />} />
          <Route path="/movie/:id" component={Info} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;