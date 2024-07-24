import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useLatestMovies = () =>{
    const dispatch = useDispatch();
    const getdata = async () => {
        const apiKey = "2fb7b781aa4cc9c9e6833ae131609906"; // Replace with your actual TMDb API key
        let a = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?language=en-US&api_key=${apiKey}`,
          options
        );
        const data = await a.json();
        console.log(data.results);
        dispatch(addNowPlayingMovies(data.results));
      };
      useEffect(() => {
        getdata();
      }, []);
}

export default useLatestMovies;