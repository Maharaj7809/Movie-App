import React, { useState, useRef } from 'react';
import Carosel from "./Carosel"
import {  useMediaQuery } from "@mui/material";
import Footer from './Footer';
import Search  from './Search';
import {Carousel} from '3d-react-carousal';
import axios from 'axios';

const Home = ({ searchRef,move }) => {
 
 const [btn , sbtn]=useState(null);
  let slides = [];

 if (move) {
  slides = move.map((movi, indx) => {
    return movi.id === btn ? (
      <iframe key={`iframe-${indx}`} src={`https://vidsrc.in/embed/movie?tmdb=${movi.id}`} frameBorder="0" allowFullScreen width={490} height={270}></iframe>
    ) : (
      <img key={`img-${indx}`} src={`https://image.tmdb.org/t/p/w300${movi.poster_path}`} width={490} height={270} alt={`Movie ${indx + 1}`} onClick={() => (sbtn(movi.id))} />
    );
  });
}


 const isNonMobile = useMediaQuery("(min-width:900px)");
 
  return (
    <div>
{/*      <div style={{ height:'42vh' }}>  {isNonMobile?  <Carousel slides={slides} autoplay={true} interval={20000} /> : <Carosel/>} </div> */}
    <Carousel slides={slides} autoplay={true} interval={20000} /> 
      <Search searchRef={searchRef}/>
    
    </div>
  )
}

export default Home
