import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieVideo = (movieId) => {
  const dispatch = useDispatch();
  const getdata = async () => {
    const apiKey = "2fb7b781aa4cc9c9e6833ae131609906";
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/+${movieId}+/videos?&api_key=${apiKey}`,
      options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
    // console.log(json);
  };

  useEffect(() => {
    getdata();
  }, []);
};

export default useMovieVideo;
