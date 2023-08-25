import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>
  )
};



export default App;
