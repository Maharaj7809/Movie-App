import React from 'react'
import Carosel from "./Carosel"
import {  useMediaQuery } from "@mui/material";
import Footer from './Footer';
import Search  from './Search';
import {Carousel} from '3d-react-carousal';
import axios from 'axios';

const Home = ({ searchRef,move }) => {

let slides = [];

 if (move) {
   slides = move.map((movi, indx) => (
     <iframe
       key={`iframe-${indx}`}
       src={`https://vidsrc.in/embed/movie?tmdb=${movi.id}`}
       frameBorder="0"
       allowFullScreen
       width={460}
       height={270}
     ></iframe>
   ));
 }
 
  
  const isNonMobile = useMediaQuery("(min-width:1200px)");
  return (
    <div>
     {isNonMobile? <Carosel/>: <Carousel slides={slides} autoplay={true} interval={20000} />}
      <Search searchRef={searchRef}/>
    
    </div>
  )
}

export default Home
