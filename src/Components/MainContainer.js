import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

export default function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  //   console.log(movies);
  if (movies == null) return;
  const mainMovie = movies[0];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="-mt-20">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}
