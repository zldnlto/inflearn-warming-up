import { useEffect, useState } from "react";
import axios from "axios";
import { MOVIE_ENDPOINTS } from "../constants/api";

const key = process.env.REACT_APP_TMDB_KEY;

function useMovieData(type) {
  const [data, setData] = useState([]);

  const getTMDBData = async (endpoint, params = {}) => {
    const url = `https://api.themoviedb.org/3${endpoint}`;
    const response = await axios.get(url, { params });
    return response.data;
  };

  const fetchData = async () => {
    switch (type) {
      case "trendingNow":
        try {
          const res = await getTMDBData(
            MOVIE_ENDPOINTS.trendingNow.endPoint,
            MOVIE_ENDPOINTS.trendingNow.params
          );
          console.log("지금 트렌드 영화", res);
          setData(res.results);
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
        break;
      case "nowPlaying":
        try {
          const res = await getTMDBData(
            MOVIE_ENDPOINTS.nowPlaying.endPoint,
            MOVIE_ENDPOINTS.nowPlaying.params
          );
          console.log("현재 상영작", res);
          setData(res.results);
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
        break;
      case "topRated":
        try {
          const res = await getTMDBData(
            MOVIE_ENDPOINTS.topRated.endPoint,
            MOVIE_ENDPOINTS.topRated.params
          );
          console.log("상위 랭킹", res);
          setData(res.results);
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
        break;
      case "actionMovies":
        try {
          const res = await getTMDBData(
            MOVIE_ENDPOINTS.actionMovies.endPoint,
            MOVIE_ENDPOINTS.actionMovies.params
          );
          console.log("액션영화", res);
          setData(res.results);
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
        break;
      case "comedyMovies":
        try {
          const res = await getTMDBData(
            MOVIE_ENDPOINTS.comedyMovies.endPoint,
            MOVIE_ENDPOINTS.comedyMovies.params
          );
          console.log("코미디 영화", res);
          setData(res.results);
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
        break;
      case "horrorMovies":
        try {
          const res = await getTMDBData(
            MOVIE_ENDPOINTS.horrorMovies.endPoint,
            MOVIE_ENDPOINTS.horrorMovies.params
          );
          console.log("호러 영화", res);
          setData(res.results);
        } catch (error) {
          console.error("Error fetching trending movies:", error);
        }
        break;
      default:
        console.log("잘못된 타입입니다.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return data;
}

export default useMovieData;
