import React, { useState } from "react";
import Slider from "react-slick";
import MovieItem from "./MovieItem";
import Modal from "../common/Modal/Modal";
import ModalContents from "../common/Modal/ModalContents";

function MovieCategory({ title, movies }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleMovieItem = (id) => {
    console.log(title, id);
    const temp = movies.find((movie) => movie.id === id);
    console.log("찾아짐?ok", temp);
    setModal(true);
    setModalData(temp);
  };

  return (
    <div>
      <p className="text-white">{title}</p>
      <ul className="slider-container mt-3 justify-between">
        <Slider {...settings}>
          {movies.map((movie) => (
            <>
              <MovieItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                src={movie.backdrop_path}
                onClick={handleMovieItem}
              />
            </>
          ))}
        </Slider>
      </ul>
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <ModalContents data={modalData} />
      </Modal>
    </div>
  );
}

export default MovieCategory;
