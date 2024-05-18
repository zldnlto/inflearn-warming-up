import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchValueState } from "../../atoms/search";

function SearchBar() {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="검색어를 입력하세요."
      value={searchValue}
      onChange={handleSearch}
      class="rounded px-2 py-1 text-sm text-black"
    />
  );
}

export default SearchBar;
