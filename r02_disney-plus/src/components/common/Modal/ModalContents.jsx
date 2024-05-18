import React, { useEffect, useState } from "react";

const key = process.env.REACT_APP_TMDB_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  },
};
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function ModalContents({ data }) {
  // TODO : 장르 출력하기
  //   const [genresData, setGenresData] = useState([]);
  //   const [genreNameArr, setGenreNameArr] = useState([]);

  //   useEffect(() => {
  //     const fetchGenres = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://api.themoviedb.org/3/genre/movie/list?language=ko",
  //           options
  //         );
  //         const data = await response.json();
  //         setGenresData(data.genres);
  //         setGenreNameArr(data.genre_ids);
  //         console.log(data, "이거"); // 콘솔에 출력
  //       } catch (err) {
  //         console.error(err);
  //       }
  //     };

  //     fetchGenres();
  //   }, []);

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = `${IMAGE_URL}${data.backdrop_path}`;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [IMAGE_URL, data.backdrop_path]);

  console.log("모달 컨텐츠", data, data.genre_ids);

  //  이미지 로딩 처리 필요
  return (
    <div className="flex h-full flex-col bg-deepBlue ">
      <div className="bg-slate-200">
        {!isImageLoaded ? (
          <div className="h-64 animate-pulse bg-gray-300">
            이미지 로딩 중...
          </div> // Placeholder
        ) : (
          <img
            src={`${IMAGE_URL}${data.backdrop_path}`}
            alt="영화 이미지"
            className=""
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-6 text-white">
        <p className="text-sm">100% for you {data.release_date}</p>
        <p className="text-2xl font-bold tracking-wider">{data.title}</p>
        <p>평점: {data.vote_average}</p>
        <p className="text-sm tracking-wider">{data.overview}</p>
      </div>
    </div>
  );
}

export default ModalContents;
