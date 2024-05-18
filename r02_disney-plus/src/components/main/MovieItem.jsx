import React from "react";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

function MovieItem({ id, src, onClick }) {
  return (
    <li
      className="w-52 flex-col px-0 transition-transform duration-200 hover:scale-110 "
      onClick={() => onClick(id)}
    >
      <img
        src={`${IMAGE_URL}${src}`}
        alt=""
        className="h-full w-full transition-transform duration-200 "
      />
      {/* <span className="truncate text-white">{title}</span> */}
    </li>
  );
}

export default MovieItem;
