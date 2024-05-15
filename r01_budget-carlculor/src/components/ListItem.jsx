import React from "react";
import { icons } from "./svg";

function ListItem({ name, cost }) {
  return (
    <li className="item-style">
      <span className="w-1/3">{name}</span>
      <span className="w-1/6 text-left">{cost}</span>
      <div className="flex gap-3">
        <button type="button">{icons.pen}</button>
        <button type="button"> {icons.trash}</button>
      </div>
    </li>
  );
}

export default ListItem;
