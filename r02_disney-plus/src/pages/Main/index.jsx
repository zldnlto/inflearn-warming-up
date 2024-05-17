import React, { useState, useEffect, Suspense } from "react";
import Banner from "../../components/main/Banner";
import useMovieData from "../../hooks/useMovieData";
import getRandomElement from "../../utils/getRandomElement";
import CompanyList from "../../components/main/CompanyList";
import MovieList from "../../components/main/MovieList";

const key = process.env.REACT_APP_TMDB_KEY;

function Main() {
  const trendingData = useMovieData("trendingNow");
  const nowPlayingData = useMovieData("nowPlaying");

  console.log(trendingData, "트렌드");
  console.log(nowPlayingData, "데이터 확인");
  const trendingNow = getRandomElement(trendingData);

  const action = useMovieData("actionMovies");

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="h-screen bg-deepBlue px-8">
        {trendingNow && <Banner data={trendingNow} />}
        <CompanyList />
        <MovieList />
      </div>
    </Suspense>
  );
}

export default Main;
