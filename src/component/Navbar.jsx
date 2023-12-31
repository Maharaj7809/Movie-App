import { Badge, Box, IconButton ,useMediaQuery} from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../theme";
import React, { useRef } from 'react';

function Navbar({ searchRef }) {
 
  const isNonMobile = useMediaQuery("(min-width:800px)");
  

  const handleSearchClick = () => {
   
    searchRef.current.scrollIntoView({ behavior: 'smooth' });
    searchRef.current.querySelector('input').focus();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="50px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      // position="fixed"
      position='sticky'
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
        {isNonMobile? 'MOVIE AMAZING': 'MOVIE'}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}  onClick={handleSearchClick}>
            <SearchOutlined  />
          </IconButton>
          
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
