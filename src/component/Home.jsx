import React from 'react'
import Carosel from "./Carosel"
import {  useMediaQuery } from "@mui/material";
import Footer from './Footer';
import Search  from './Search';

const Home = ({ searchRef }) => {
  
  const isNonMobile = useMediaQuery("(min-width:1200px)");
  return (
    <div>
      <Carosel/>
      <Search searchRef={searchRef}/>
    
    </div>
  )
}

export default Home
