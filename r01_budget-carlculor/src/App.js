function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <p>아이템이 삭제되었습니다.</p>
      <h1 className="">예산 계산기</h1>
      <form>
        <label for="category">지출 항목</label>
        <input type="text" id="category" />
        <label for="cost">비용</label>
        <input type="number" id="cost" />
        
        <input value="제출" type="submit" className="" />
      </form>

      <div>
        <ul>
          <li>
            <span>교통비</span>
            <span>400</span>
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
          <li>
            <span>식비</span>
            <span>1200</span>
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </li>
        </ul>
        <div>목록 지우기</div>
      </div>
      <span>총지출 : 1600원</span>
    </div>
  );
}

export default App;
