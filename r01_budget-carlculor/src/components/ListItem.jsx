import React from "react";
import { icons } from "./svg";

function ListItem({ name, cost, handleEditBtn, handleDeleteBtn }) {
  return (
    <li className="item-style">
      <span className="w-1/3">{name}</span>
      <span className="w-1/6 text-left">{cost}</span>
      <div className="flex gap-3">
        <button type="button" onClick={handleEditBtn}>
          {icons.pen}
        </button>
        <button type="button" onClick={handleDeleteBtn}>
          {icons.trash}
        </button>
      </div>
    </li>
  );
}

export default ListItem;
