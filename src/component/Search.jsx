import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const Search = () => {
   const [movie ,setmovie]=useState(null);
  const [movieData, setMovieData] = useState(null);
  const [flaga , setflaga]=useState(-1);

  const TMDB_API_KEY = 'fe659372fbb274dea4b77b83b77b8663';
  
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
        console.log({movieData});
        
  
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
  <Box>
    <Box width="100%" margin="0px auto" textAlign="center" >
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </IconButton>

      <Typography variant="h3">Subscribe And Search Recent Movies </Typography>

      <Typography>
        and receive $20 coupon for your first Subscription when you checkout
      </Typography>

      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="50%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Movies.."
          onChange={(e) => setmovie(e.target.value)}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        < SearchIcon  onClick={()=>searchMedia(movie)} />
  
      </Box>
      <Box display="flex" overflow='auto' >
      { movieData?.map((movi, indx) => (
   <Box  >
    <Card sx={{ width: 300, height: 400 ,margin: 1}} >
    <CardActions sx={{ display: 'flex', alignItems: 'center',justifyContent:'space-around' }} >
        <Button size="small" onClick={()=>setflaga(indx)}>Watch</Button>
        <Button size="small">Save</Button>
      </CardActions>
      
   {flaga===indx ?(
    <CardMedia
        component="iframe"
        frameBorder="0"
        allowFullScreen
        style={{ width: '100%', height: '92%', objectFit: 'cover' }}
        src= {movi.qid==='movie'?`https://vidsrc.to/embed/movie/${movi.id}`:`https://vidsrc.to/embed/tv/${movi.id}`}
      />):(<CardMedia
        component="img"
        alt=''
        style={{ width: '100%', height: '92%', objectFit: 'cover' }}
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