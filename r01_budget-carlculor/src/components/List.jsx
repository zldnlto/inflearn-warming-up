import React from "react";
import { v4 as uuidv4 } from "uuid";
import { icons } from "./svg";
import ListItem from "./ListItem";

function List({ data }) {
  console.log("data", data);
  const handleResetBtn = () => {
    console.log("handleResetBtn");
  };
  return (
    <div className="sec-style relative mt-3 w-4/5 min-w-max">
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <ListItem name={item.name} cost={item.cost} key={uuidv4()} />
        ))}
      </ul>
      <button
        type="button"
        className="btn-with-icon mt-4"
        onClick={handleResetBtn}
      >
        <span className="mt-0.5">{icons.trash}</span>
        <span>목록 지우기</span>
      </button>
      <span className="absolute -bottom-8 right-1 flex gap-2">
        <span className="mt-1">{icons.wallet}</span>
        <span>총지출 : 1600원</span>
      </span>
    </div>
  );
}

export default List;
