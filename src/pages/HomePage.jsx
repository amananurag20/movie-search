import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading, setError, setSearchResults } from "../utils/movieSlice";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { searchResults = [], loading = false, error = null } = useSelector(
    (state) => state.movies || {}
  );

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const fetchMovies = async (query) => {
    dispatch(setLoading(true));
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=59c7b0c`);
      const data = await response.json();

      if (data.Response === "True") {
        dispatch(setSearchResults(data.Search));
        dispatch(setError(null));
      } else {
        dispatch(setSearchResults([]));
        dispatch(setError(data.Error));
      }
    } catch (error) {
      dispatch(setError("An error occurred while fetching movies."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchMovies("popular");
  }, []);

  const handleSearch = (query) => {
    fetchMovies(query);
  };

  return (
    <div className="min-h-screen py-8 bg-black text-gray-300">
      <h1 className="text-4xl font-bold text-center mb-6">Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center">{error}</div>}
      {searchResults.length > 0 && !loading && !error ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {searchResults.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onClick={() => handleMovieClick(movie.imdbID)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center col-span-full text-gray-400">
          Start searching for movies to display results here.
        </div>
      )}
    </div>
  );
};

export default HomePage;    