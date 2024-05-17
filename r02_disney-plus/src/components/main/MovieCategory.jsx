import React from "react";
import Slider from "react-slick";
import MovieItem from "./MovieItem";

function MovieCategory({ title, movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  return (
    <div>
      <p className="text-white">{title}</p>
      <ul className="slider-container mt-3 justify-between">
        <Slider {...settings}>
          {movies.map((movie) => (
            <MovieItem
              key={movie.id}
              title={movie.title}
              src={movie.backdrop_path}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}

export default MovieCategory;
