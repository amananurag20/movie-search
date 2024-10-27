import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, loading, error } = useSelector(
    (state) => state.movieDetails
  );

    useEffect(() => {
      dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 bg-black text-gray-300">
      <h1 className="text-4xl font-bold">{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p>{movieDetails.Plot}</p>
      <p>
        <strong>Director:</strong> {movieDetails.Director}
      </p>
      <p>
        <strong>Rating:</strong> {movieDetails.Rating}
      </p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDetails;
