export const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

const key = process.env.REACT_APP_TMDB_KEY;

export const MOVIE_ENDPOINTS = {
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
  actionMovies: {
    label: "Action Movies",
    endPoint: "/discover/movie",
    params: {
      api_key: key,
      with_genres: "99",
    },
  },
};
