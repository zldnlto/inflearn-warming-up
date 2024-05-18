import React from "react";
import MovieCategory from "./MovieCategory";

function MovieList({
  trendingMovies,
  topRatedMovies,
  actionMovies,
  comedyMovies,
  horrorMovies,
}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <section className="mt-32 flex flex-col gap-6 px-12 pb-28">
      <MovieCategory title="Trending Movies" movies={trendingMovies} />
      <MovieCategory title="Top Rated Movies" movies={topRatedMovies} />
      <MovieCategory title="Action Movies" movies={actionMovies} />
      <MovieCategory title="Comedy Movies" movies={comedyMovies} />
      <MovieCategory title="Horror Movies" movies={horrorMovies} />
    </section>
  );
}

// <section className="">
//   <div>
//     <p className=" text-white">Trending Movies</p>
//     <ul className="slider-container mt-3">
//       <Slider {...settings}>
//         {trendingMovies.map((v) => (
//           <MovieItem title={v.title} src={v.backdrop_path} />
//         ))}
//       </Slider>
//     </ul>
//   </div>
//   <div>
//     <p className=" text-white">Top Rated Movies</p>
//     <ul className="slider-container mt-3">
//       <Slider {...settings}>
//         {topRatedMovies.map((v) => (
//           <MovieItem title={v.title} src={v.backdrop_path} />
//         ))}
//       </Slider>
//     </ul>
//   </div>
//   <div>
//     <p className=" text-white">Action Movies</p>
//     <ul className="slider-container mt-3">
//       <Slider {...settings}>
//         {actionMovies.map((v) => (
//           <MovieItem title={v.title} src={v.backdrop_path} />
//         ))}
//       </Slider>
//     </ul>
//   </div>
// </section>
// }

export default MovieList;
