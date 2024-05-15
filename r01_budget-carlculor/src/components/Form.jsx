import React, { useCallback } from "react";
import { icons } from "./svg";

function Form({
  nameValue,
  setNameValue,
  costValue,
  setCostValue,
  onSubmit,
  editMode,
  onEditSubmit,
}) {
  const handleNameChange = useCallback((e) => {
    setNameValue(e.target.value);
  }, []);

  // useRef로 리팩터링해서 DOM 직접 조작 -> focus시에 ""으로

  const handleCostChange = useCallback((e) => {
    const trimedCost = e.target.value.replace(/^0+/, "");
    setCostValue(trimedCost);
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
            value={nameValue}
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
            className="input-style"
            value={costValue}
            onChange={handleCostChange}
          />
        </div>
      </fieldset>
      {editMode ? (
        <button
          type="button"
          className="btn-with-icon mt-4"
          onClick={onEditSubmit}
        >
          <span className="mt-1">{icons.pen}</span>
          <span>수정</span>
        </button>
      ) : (
        <button type="submit" className="btn-with-icon mt-4" onClick={onSubmit}>
          <span className="mt-0.5">{icons.submit}</span>
          <span>제출</span>
        </button>
      )}
    </form>
  );
}

export default Form;
