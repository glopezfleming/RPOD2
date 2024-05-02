import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component = {Home} path = "/" exact/>
        <Route component = {NasaPhoto} path = "/nasaphoto"/>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
