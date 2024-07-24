import React, { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

export default function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);
  const dispatch = useDispatch();
  const getdata = async () => {
    const apiKey = "2fb7b781aa4cc9c9e6833ae131609906";
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?&api_key=${apiKey}`,
      options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo());
    // console.log(json);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      {console.log(trailerVideo?.key)}
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
