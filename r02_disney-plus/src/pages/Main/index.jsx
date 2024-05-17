import React, { useState, useEffect, Suspense } from "react";
import Banner from "../../components/main/Banner";
import useMovieData from "../../hooks/useMovieData";
import getRandomElement from "../../utils/getRandomElement";
import CompanyList from "../../components/main/CompanyList";
import MovieList from "../../components/main/MovieList";

const key = process.env.REACT_APP_TMDB_KEY;

function Main() {
  const nowPlayingData = useMovieData("nowPlaying");
  const nowPlayingItem = getRandomElement(nowPlayingData);

  const trendingData = useMovieData("trendingNow");
  const topRatedData = useMovieData("topRated");
  const actionMovieData = useMovieData("actionMovies");

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="bg-deepBlue px-8">
        {nowPlayingItem && <Banner data={nowPlayingItem} />}
        <MovieList
          trendingMovies={trendingData}
          topRatedMovies={topRatedData}
          actionMovies={actionMovieData}
        />
      </div>
    </Suspense>
  );
}

export default Main;
