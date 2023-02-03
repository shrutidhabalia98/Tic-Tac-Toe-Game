import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Redirect from './Components/Redirect';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/:code' element={<Redirect />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
