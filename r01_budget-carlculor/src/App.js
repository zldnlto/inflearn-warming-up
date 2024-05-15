import { FaWaze } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';

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
          <FaPaperPlane size="14" className="mt-0.5 " />
          제출
        </button>
      </form>
      <div className="sec-style relative mt-3 w-4/5 min-w-max">
        <button className="btn-with-icon">
          <FaPen size="13" className="mt-1" />
          수정
        </button>
        <ul className="flex flex-col gap-2">
          <li className="item-style">
            <span>교통비</span>
            <span className="text-center">400</span>
            <div className="flex gap-3">
              <button>
                <FaPen size="13" />
              </button>
              <button>
                <FaTrashAlt size="13" />
              </button>
            </div>
          </li>
          <li className="item-style">
            <span>식비</span>
            <span className="text-center">1200</span>
            <div className="flex gap-3">
              <button>
                <FaPen size="13" />
              </button>
              <button>
                <FaTrashAlt size="13" />
              </button>
            </div>
          </li>
        </ul>
        <button className="btn-with-icon mt-2">
          <FaTrashAlt size="16" className="mt-0.5" />
          목록 지우기
        </button>
        <span className="absolute -bottom-8 right-1 flex gap-2">
          <FaWallet className="mt-1" />
          총지출 : 1600원
        </span>
      </div>
    </div>
  );
}

export default App;
