
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Navbar from "./component/Navbar";
import Home from "./component/Home"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { useState,useEffect, useRef } from 'react';
import axios from 'axios';

const App = () => {
  const searchRef = useRef(null);
const [move, setMove] = useState([]);
 
 const TMDB_API_KEY = 'fe659372fbb274dea4b77b83b77b8663';
 
 const getItem=async()=>{
   const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`;
   try {
     const response = await axios.get(apiUrl);
     const popularMovies = response.data.results;
     setMove(popularMovies);
     console.log(popularMovies);
   } catch (error) {
     console.error('An error occurred:', error);
   }
 }
 
   useEffect(() => {
     getItem();
 
   }, []); 

  return (
    <div className="app">
    <BrowserRouter>
      <Navbar searchRef={searchRef}/>
      <Routes>
        <Route path="/" element={<Home searchRef={searchRef}  move={move}/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
};



export default App;
