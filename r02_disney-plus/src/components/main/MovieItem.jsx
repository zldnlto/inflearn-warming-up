import React from "react";
import { v4 as uuidv4 } from "uuid";
const IMAGE_URL = "https://image.tmdb.org/t/p/w300/";

function MovieItem({ title, src }) {
  return (
    <li key={uuidv4()}>
      <img src={`${IMAGE_URL}${src}`} alt="" className="w-50 h-40" />
      <span className="text-white">{title}</span>
    </li>
  );
}

export default MovieItem;
