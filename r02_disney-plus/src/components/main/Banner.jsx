import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original/";

function Banner({ data }) {
  const imageSrc = `${IMG_BASE_URL}${data.backdrop_path}`;

  return (
    <section className="h-4/6">
      <div className="relative h-full">
        <article
          className="box-shadow relative flex h-full bg-cover text-white"
          style={{ backgroundImage: `url(${imageSrc})` }}
        >
          <div className="z-10 flex flex-col justify-center gap-8 px-8">
            <div>
              <h2 className="text-4xl font-bold">{data.title}</h2>
              <p className="text-2xl font-bold">{data.original_title}</p>
            </div>
            <button className="max-w-20 rounded bg-white px-3 py-2 text-sm text-black">
              PLAY
            </button>
            <p className="text-overflow-banner w-1/4 min-w-72 text-balance">
              {data.overview}
            </p>
          </div>
        </article>
        <div className="inset-shadow absolute inset-0"></div>
      </div>
    </section>
  );
}

export default Banner;
