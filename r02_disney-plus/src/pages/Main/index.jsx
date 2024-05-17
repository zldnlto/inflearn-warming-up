import axios from "axios";
import React, { useState, useEffect } from "react";
import Banner from "../../components/main/Banner";
import useMovieData from "../../utils/useMovieData";

function Main() {
  const trendingData = useMovieData("trendingNow");
  const nowPlayingData = useMovieData("nowPlaying");

  console.log(trendingData, "트렌드");

  console.log(nowPlayingData, "데이터 확인");

  return (
    <div className="px-8">
      <Banner />
    </div>
  );
}

export default Main;
