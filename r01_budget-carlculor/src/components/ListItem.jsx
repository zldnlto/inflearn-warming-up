import React from "react";
import { icons } from "./svg";

function ListItem({ name, cost }) {
  return (
    <li className="item-style">
      <span>{name}</span>
      <span className="text-center">{cost}</span>
      <div className="flex gap-3">
        <button type="button">{icons.pen}</button>
        <button type="button"> {icons.trash}</button>
      </div>
    </li>
  );
}

export default ListItem;
