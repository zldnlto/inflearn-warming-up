import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Row from "./Row";
import MultipleItems from "../common/MultipleItems";
import Slider from "react-slick";
import MovieItem from "./MovieItem";

function MovieList({ trendingMovies, topRatedMovies, actionMovies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <section className="">
      <div>
        <p className=" text-white">Trending Movies</p>
        <ul className="slider-container mt-3">
          <Slider {...settings}>
            {trendingMovies.map((v) => (
              <MovieItem title={v.title} src={v.backdrop_path} />
            ))}
          </Slider>
        </ul>
      </div>
      <div>
        <p className=" text-white">Top Rated Movies</p>
        <ul className="slider-container mt-3">
          <Slider {...settings}>
            {topRatedMovies.map((v) => (
              <MovieItem title={v.title} src={v.backdrop_path} />
            ))}
          </Slider>
        </ul>
      </div>
      <div>
        <p className=" text-white">Action Movies</p>
        <ul className="slider-container mt-3">
          <Slider {...settings}>
            {actionMovies.map((v) => (
              <MovieItem title={v.title} src={v.backdrop_path} />
            ))}
          </Slider>
        </ul>
      </div>
    </section>
  );
}

export default MovieList;
