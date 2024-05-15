import { icons } from "./components/svg";


function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center rounded border">
      {/* <p>아이템이 삭제되었습니다.</p> */}
      <h1 className="text-3xl">예산 계산기</h1>
      <form className="sec-style w-4/5 min-w-max">
        <fieldset className="flex justify-between gap-x-2 ">
          <legend className="mb-1 font-bold">지출 내역 입력</legend>
          <div className="flex w-1/2 flex-col">
            <label htmlor="category" className="text-green-800">
              지출 항목
            </label>
            <input type="text" id="category" placeholder="예) 렌트비" className="input-style" />
          </div>
          <div className="flex w-1/2 flex-col">
            <label htmlFor="cost" className="text-green-800">
              비용
            </label>
            <input type="number" id="cost" defaultValue={0} className="input-style" />
          </div>
        </fieldset>
        <button type="sbmit" className="btn-with-icon  mt-2">
          <span class="mt-0.5">{icons.submit}</span>
          <span>제출</span>
        </button>
      </form>
      <div className="sec-style relative mt-3 w-4/5 min-w-max">
        <button className="btn-with-icon">
          <span class="mt-1">{icons.pen}</span>
          <span>수정</span>
        </button>
        <ul className="flex flex-col gap-2">
          <li className="item-style">
            <span>교통비</span>
            <span className="text-center">400</span>
            <div className="flex gap-3">
              <button>
                {icons.pen}
              </button>
              <button>
                {icons.trash}
              </button>
            </div>
          </li>
          <li className="item-style">
            <span>식비</span>
            <span className="text-center">1200</span>
            <div className="flex gap-3">
              <button>
                {icons.pen}
              </button>
              <button>
                {icons.trash}
              </button>
            </div>
          </li>
        </ul>
        <button className="btn-with-icon mt-2">
          <span class="mt-0.5">{icons.trash}</span>
          <span>목록 지우기</span>
        </button>
        <span className="absolute -bottom-8 right-1 flex gap-2">
          <span class="mt-1">{icons.wallet}</span>
          <span>총지출 : 1600원</span>
        </span>
      </div>
    </div>
  );
}

export default App;
