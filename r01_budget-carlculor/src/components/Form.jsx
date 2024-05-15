
import React from "react";
import { icons } from "./svg";

function Form() {
  return (
    <form className="sec-style w-4/5 min-w-max">
      <fieldset className="flex justify-between gap-x-2">
        <legend className="mb-1 font-bold">지출 내역 입력</legend>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="category" className="text-green-800">
            지출 항목
          </label>
          <input type="text" id="category" placeholder="예) 렌트비" className="input-style" />
        </div>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="cost" className="text-green-800">
            비용
          </label>
          <input type="number" id="cost" defaultValue={0} className="input-style " />
        </div>
      </fieldset>
      <button type="submit" className="btn-with-icon  mt-2">
        <span className="mt-0.5">{icons.submit}</span>
        <span>제출</span>
      </button>
    </form>
  );
}

export default Form