
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState,useEffect, useRef } from 'react';

const App = () => {
  const searchRef = useRef(null);

  return (
    <div className="app">
    <BrowserRouter>
      <Navbar searchRef={searchRef}/>
      <Routes>
        <Route path="/" element={<Home searchRef={searchRef} />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
};



export default App;
