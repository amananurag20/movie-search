import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import appStore from './utils/appStore';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './components/MovieDetails';
import { setLoading, setError, setSearchResults } from './utils/movieSlice';

const App = () => {

  // const dispatch = useDispatch();

  // const fetchInitialMovies = async () => {
  //   dispatch(setLoading(true));
  //   try {
      
  //     const response = await fetch(`https://www.omdbapi.com/?s=popular&apikey=59c7b0c`);
  //     const data = await response.json();
  //     if (data.Response === "True") {
  //       dispatch(setSearchResults(data.Search));
  //       dispatch(setError(null));
  //     } else {
  //       dispatch(setSearchResults([]));
  //       dispatch(setError(data.Error));
  //     }
  //   } catch (error) {
  //     dispatch(setError("An error occurred while fetching movies."));
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  // useEffect(() => {
  //   fetchInitialMovies(); // Load popular movies on app start
  // }, []);
  return (
    
      <BrowserRouter>
        <div>
          <h1>Movie Search App</h1>
          
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movie/:id" element={<MovieDetailsPage/>} />
          </Routes>
        </div>
      </BrowserRouter>
   
  );
};

export default App;
