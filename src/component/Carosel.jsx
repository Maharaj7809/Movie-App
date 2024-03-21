import { Box, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../theme";
import { useState ,useEffect} from "react";
import Button from '@mui/material/Button';
import axios from 'axios';

const MainCarousel = () => {

const [btn, sbtn]=useState(null);

 const [move, setMove] = useState(null);

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

  const isNonMobile = useMediaQuery("(min-width:900px)");
  const heigh = isNonMobile ? "45vh" : "40vh";
  const widt= isNonMobile ? "50vw" : "50vw";
  return (
    <Carousel
     
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
    
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "45",
            color: 'blue',
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "blue",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {move?.map((movi, indx) => (
        <Box key={indx} >
          {movi.id===btn?
           <iframe
         src= {`https://vidsrc.in/embed/movie?tmdb=${movi.id}`}
                frameBorder="0"
                style={{
                  width: widt,
                  height: heigh ,
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}

                allowFullScreen
              ></iframe>
              : <img
            src={`https://image.tmdb.org/t/p/w780${movi.poster_path}`}
            style={{
              width: widt,
              height: heigh ,
              backgroundAttachment: "fixed",
            }}
          />}

          <Box

        style={{ display: movi.id === btn ? 'none' : 'block' }}
            color="white"
           
            padding="8px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "45%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "80px"}
          >
            
        <Button variant="text" onClick={()=>( sbtn(movi.id))} style={{ color: 'white' }}>Watch</Button>

          </Box>

        </Box>

      ))}
    </Carousel>
  );
};

export default MainCarousel;
