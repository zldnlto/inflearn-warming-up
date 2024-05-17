import React from "react";
import { v4 as uuidv4 } from "uuid";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

function MovieItem({ src }) {
  return (
    <li
      key={uuidv4()}
      className="w-52 flex-col px-0 transition-transform duration-200 hover:scale-110 "
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
