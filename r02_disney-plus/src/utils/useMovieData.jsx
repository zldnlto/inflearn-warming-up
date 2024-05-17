import React, { useEffect, useState } from "react";
import axios from "axios";

const key = process.env.REACT_APP_TMDB_KEY;

const movieAPI = {
  nowPlaying: {
    label: "Now playing",
    endPoint: "/movie/now_playing",
    params: {
      api_key: key,
      language: "ko-KR",
      page: 1,
    },
  },
  trendingNow: {
    label: "Trending now",
    endPoint: "/movie/popular",
    params: {
      api_key: key,
      language: "ko-KR",
      page: 1,
    },
  },
  topRated: {
    label: "Top rated",
    endPoint: "/movie/top_rated",
    params: {
      api_key: key,
      language: "ko-KR",
      page: 1,
    },
  },
};

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
            movieAPI.trendingNow.endPoint,
            movieAPI.trendingNow.params
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
            movieAPI.nowPlaying.endPoint,
            movieAPI.nowPlaying.params
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
            movieAPI.topRated.endPoint,
            movieAPI.topRated.params
          );
          console.log("상위 랭킹", res);
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
