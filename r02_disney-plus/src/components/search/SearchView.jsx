import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchValueState } from "../../atoms/search";
import { instance } from "../../api/axios";
import { IMG_BASE_URL } from "../../constants/api";
import MovieItem from "../main/MovieItem";

function SearchView() {
  const [searchResults, setSearchResults] = useState([]);
  const searchValue = useRecoilValue(searchValueState);

  const fetchSearchMovie = async (term) => {
    console.log("🚀  ~ searchTerm:", term);
    try {
      const request = await instance.get(
        `/search/multi?include_adult=false&query=${term}`
      );
      console.log("결과 확인", request.data.results);
      setSearchResults(request.data.results);
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

  return (
    <div>
      <MovieItem />
    </div>
  );
}

export default SearchView;
