import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchValueState } from "../../atoms/search";
import { instance } from "../../api/axios";
import { IMG_BASE_URL } from "../../constants/api";
import MovieItem from "../main/MovieItem";
import Modal from "../common/Modal/Modal";
import ModalContents from "../common/Modal/ModalContents";

function SearchView() {
  const [searchResults, setSearchResults] = useState([]);
  const searchValue = useRecoilValue(searchValueState);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const fetchSearchMovie = async (term) => {
    console.log("🚀  ~ searchTerm:", term);
    try {
      const request = await instance.get(
        `/search/multi?include_adult=false&query=${term}`
      );
      console.log("결과 확인", request.data.results);
      const exceptPersonData = request.data.results.filter(
        (v) => v.media_type !== "person"
      );
      setSearchResults(exceptPersonData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    console.log(searchValue, "😷");
    if (searchValue.length < 2) {
      return;
    }

    fetchSearchMovie(searchValue);
  }, [searchValue]);

  const handleMovieItem = (id) => {
    console.log(id);
    console.log(searchResults);
    const clickedItem = searchResults.find((movie) => movie.id === id);
    setModal(true);
    setModalData(clickedItem);
  };

  return (
    <>
      <ul className="flex min-h-screen flex-wrap justify-between gap-3 bg-deepBlue p-6">
        {searchResults.map((item) => (
          <MovieItem
            id={item.id}
            src={item.backdrop_path}
            onClick={handleMovieItem}
          />
        ))}
      </ul>
      <Modal openModal={modal} closeModal={() => setModal(false)}>
        <ModalContents data={modalData} />
      </Modal>
    </>
  );
}

export default SearchView;
