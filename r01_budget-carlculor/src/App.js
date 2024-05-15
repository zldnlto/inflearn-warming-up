import React from 'react';
import Form from './components/Form';
import { icons } from './components/svg';

function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center rounded border ">
      {/* <p>아이템이 삭제되었습니다.</p> */}
      <h1 className="text-3xl">예산 계산기</h1>
      <Form />
      <div className="sec-style relative mt-3 w-4/5 min-w-max">
        <button type="button" className="btn-with-icon">
          <span className="mt-1">{icons.pen}</span>
          <span>수정</span>
        </button>
        {/* ul에 font-bold 와 order 삭제  */}
        <ul className="flex flex-col gap-2">
          <li className="item-style">
            <span>교통비</span>
            <span className="text-center">400</span>
            <div className="flex gap-3">
              <button type="button">{icons.pen}</button>
              <button type="button"> {icons.trash}</button>
            </div>
          </li>
          <div className="mx-3 flex border text-center">하잇</div>
          <li className="item-style">
            <span>식비</span>
            <span className="text-center">1200</span>
            <div className="flex gap-3">
              <button type="button">{icons.pen}</button>
              <button type="button">{icons.trash}</button>
            </div>
          </li>
        </ul>
        <button type="button" className="btn-with-icon mt-2">
          <span className="mt-0.5">{icons.trash}</span>
          <span>목록 지우기</span>
        </button>
        <span className="absolute -bottom-8 right-1 flex gap-2">
          <span className="mt-1">{icons.wallet}</span>
          <span>총지출 : 1600원</span>
        </span>
      </div>
    </div>
  );
}

export default App;
