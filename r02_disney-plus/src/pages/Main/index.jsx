import axios from "axios";
import React, { useState, useEffect, Suspense } from "react";
import Banner from "../../components/main/Banner";
import useMovieData from "../../utils/useMovieData";
import getRandomElement from "../../utils/getRandomElement";

function Main() {
  const trendingData = useMovieData("trendingNow");
  const nowPlayingData = useMovieData("nowPlaying");

  console.log(trendingData, "트렌드");
  console.log(nowPlayingData, "데이터 확인");
  const trendingNow = getRandomElement(trendingData);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div className="h-screen px-8">
        {trendingNow && <Banner data={trendingNow} />}
      </div>
    </Suspense>
  );
}

export default Main;
