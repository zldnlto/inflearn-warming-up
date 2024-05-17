import React from "react";
import Button from "../common/Button";

function Banner() {
  return (
    <section className="h-screen">
      <article className="flex h-4/5 bg-blue-950 text-white">
        <div className="flex flex-col justify-center gap-8 px-8">
          <h2 className="text-4xl font-bold ">위시</h2>
          <button className="max-w-20 rounded bg-white px-3 py-2 text-sm text-black">
            PLAY
          </button>
          <p className="w-1/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            molestiae eius, et nostrum deserunt quia, saepe error alias
            voluptates quisquam voluptas neque quibusdam, aut nisi esse! Ipsa
            provident dolor voluptate.
          </p>
        </div>
      </article>
    </section>
  );
}

export default Banner;
