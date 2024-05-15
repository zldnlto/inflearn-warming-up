import React, { useEffect, useState } from "react";
import { icons } from "./svg";
import ListItem from "./ListItem";

function List({ data, handleResetBtn, handleEditBtn, handleDeleteBtn }) {
  const [sumCost, setSumCost] = useState(0);

  console.log("data", data);

  const calculateTotalCost = (dataArr) => {
    const totalCost = dataArr.reduce((acc, cur) => acc + Number(cur.cost), 0);
    return totalCost;
  };

  useEffect(() => {
    setSumCost(calculateTotalCost(data));
  }, [data]);

  return (
    <div className="sec-style relative mt-3 w-4/5 min-w-max">
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <ListItem
            name={item.name}
            cost={item.cost}
            key={item.id}
            handleEditBtn={handleEditBtn}
            handleDeleteBtn={handleDeleteBtn}
          />
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
        {sumCost && <span>총지출 : {sumCost}원</span>}
      </span>
    </div>
  );
}

export default List;
