import React, { useCallback } from "react";
import { icons } from "./svg";

function Form({ setData, onSubmit }) {
  const handleNameChange = useCallback((e) => {
    const newName = e.target.value;
    setData((prev) => ({
      ...prev,
      name: newName,
    }));
  }, []);

  // useRef로 리팩터링해서 DOM 직접 조작 -> focus시에 ""으로
  const handleCostChange = useCallback((e) => {
    const newCost = e.target.value.replace(/^0+/, "");
    setData((prev) => ({
      ...prev,
      cost: newCost,
    }));
  }, []);

  return (
    <form className="sec-style w-4/5 min-w-max">
      <fieldset className="flex justify-between gap-x-2">
        <legend className="mb-1 font-bold">지출 내역 입력</legend>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="category" className="text-green-800">
            지출 항목
          </label>
          <input
            type="text"
            id="category"
            placeholder="예) 렌트비"
            className="input-style"
            onChange={handleNameChange}
          />
        </div>
        <div className="flex w-1/2 flex-col">
          <label htmlFor="cost" className="text-green-800">
            비용
          </label>
          <input
            type="number"
            id="cost"
            defaultValue={0}
            className="input-style"
            onChange={handleCostChange}
          />
        </div>
      </fieldset>
      <button type="submit" className="btn-with-icon mt-4" onClick={onSubmit}>
        <span className="mt-0.5">{icons.submit}</span>
        <span>제출</span>
      </button>
    </form>
  );
}

export default Form;
