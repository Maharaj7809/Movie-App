import { Box, InputBase, Divider, Typography, IconButton,useMediaQuery } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import React, { useState, useRef, useEffect } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
const Search = ({ searchRef }) => {
   const [movie ,setmovie]=useState('openhaimer');
  const [movieData, setMovieData] = useState(null);
  const [flaga , setflaga]=useState(-1);
  const [praveen , swati]=useState(null);
  const isNonMobile = useMediaQuery("(min-width:900px)");

   
  useEffect(()=>{
      searchMedia(movie);
  },[])
          

  const searchMedia = async (searchTerm) => {
   
      const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: searchTerm},
        headers: {
          'X-RapidAPI-Key': 'fa298c37ecmshf8475f9a26b815bp1c4721jsn5038cd0991b3',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
      };
      
    
      try {
        const response = await axios.request(options);
        setMovieData(response.data.d);
      

      } catch (error) {
        console.error(error);
      }
    };
  
  return (
  <Box ref={searchRef}>
    <Box width="100%" margin="0px auto" textAlign="center" >
      



      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width= {isNonMobile ? "50%" : '65%'}
        backgroundColor="#F2F2F2"
      >
           
        <InputBase
          sx={{ ml: 1, flex: 1 , fontSize: isNonMobile ? 'inherit' : '16px'}}
          placeholder="Search Movies.."
        
          onChange={(e) => setmovie(e.target.value)}
        />
  

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      
      
  { 
      (!movieData && praveen)  ?<CircularProgress size={20} />:<SearchIcon  onClick={()=>( searchMedia(movie),swati(movie) ,setMovieData(null))}/> 
        }
  
        
      </Box>
      <Box display= "flex" overflow='auto'  flexDirection={isNonMobile ? 'row' : 'column'} alignItems={isNonMobile ? 'flex-start' : 'center'}>
      { movieData?.map((movi, indx) => (
   <Box  >
    <Card sx={{  width: isNonMobile ? 260: '90vw',  height: isNonMobile ? 300: '40vh' ,margin: 1, transition: "transform 0.2s ease-in-out","&:hover": {
      transform: "translateY(-10px)", 
    }}} >
       
   {flaga===indx ?(
    <CardMedia
       onClick={()=>setflaga(indx)}
        component="iframe"
        frameBorder="0"
        allowFullScreen
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        src= {movi.qid==='movie'?`https://vidsrc.to/embed/movie/${movi.id}`:`https://vidsrc.to/embed/tv/${movi.id}`}
      />):(<CardMedia
         onClick={()=>setflaga(indx)}
        component="img"
        alt=''
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        image= {`${movi?.i?.imageUrl}`}
      />)
   }

    </Card>
    </Box>
    
       ))}
       </Box>
    </Box>
   </Box> 
  );
};




export default Search;
