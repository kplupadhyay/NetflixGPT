import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Ensure movies is defined and is an array
  if (!movies || !Array.isArray(movies)) {
    return null; // or handle error condition appropriately
  }

  return (
    <div className="">
      <h1 className="text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
