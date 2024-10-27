import React from 'react';

const MovieCard = ({ movie, onClick }) => {
    console.log(movie)
  return (
    <div
      className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg"
      onClick={onClick}
    >
      <img src={movie.Poster} alt={movie.Title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-xl font-bold mt-2">{movie.Title}</h2>
      <p className="text-gray-400">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
