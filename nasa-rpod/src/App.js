
import './App.css';
import React from 'react';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="nasaphoto" element={<NasaPhoto />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
