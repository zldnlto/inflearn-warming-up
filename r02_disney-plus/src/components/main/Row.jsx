import React from "react";

function Row({ theme, data }) {
  console.log("데이터입니다", data);
  return (
    <>
      <h3>{theme}</h3>
      <p>{data}</p>
    </>
  );
}

export default Row;
