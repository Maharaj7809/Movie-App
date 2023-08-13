import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';




const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMode, setSearchMode] = useState('movie'); 

  const handleSearch = () => {
    onSearch(searchTerm, searchMode);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={`Search ${searchMode === 'movie' ? 'movies' : 'TV serials'}`}
       
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    
      <select value={searchMode} onChange={(e) => setSearchMode(e.target.value)}>
        <option value="movie">Movies</option>
        <option value="tv">TV Serials</option>
      </select>


      <button onClick={handleSearch}>Search</button>
    </div>

     
  );
};

const App = () => {
  const [movieData, setMovieData] = useState(null);
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
    <div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <Typography variant="h4" >movie search </Typography>
        <SearchBar onSearch={searchMedia} />
      </div>
      
      {!movieData && (
        <div>
          {move?.map((movi, indx) => (
            <div key={indx} style={{display:'flex',alignItems:'center',justifyContent:'space-around',margin:'20px'}}>
              <iframe
         src= {`https://vidsrc.in/embed/movie?tmdb=${movi.id}`}
                frameBorder="0"
                style={{ width: '80vw', height: '80vh'}}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}



      {movieData && (
        <div>
          {movieData.map((movi, indx) => (
            <div key={indx} style={{display:'flex',alignItems:'center',justifyContent:'space-around',margin:'20px'}}>
              <iframe
         src= {movi.qid=='movie'?`https://vidsrc.in/embed/movie?imdb=${movi.id}`:`https://vidsrc.in/embed/tv?imdb=${movi.id}`}
                frameBorder="0"
                style={{ width: '80vw', height: '80vh'}}
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
