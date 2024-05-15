import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Notification from "./components/Notification";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [costValue, setCostValue] = useState("");
  const [data, setData] = useState([]);
  const [noticeColor, setNoticeColor] = useState("green");
  const [noticeMessage, setNoticeMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  useEffect(() => {
    console.log("모니터링", costValue, nameValue, data);
  }, [data]);

  // 데이터는 여기서 관리!

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (nameValue && costValue) {
      setData((prev) => [...prev, { name: nameValue, cost: costValue }]);
      setNameValue("");
      setCostValue("");
      setIsVisible(true);
      setNoticeMessage("💸 아이템이 추가되었습니다.");
    }
  };

  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center rounded border">
      <Notification
        isVisible={isVisible}
        color={noticeColor}
        message={noticeMessage}
      />
      <h1 className="text-3xl">예산 계산기</h1>
      <Form
        nameValue={nameValue}
        setNameValue={setNameValue}
        costValue={costValue}
        setCostValue={setCostValue}
        onSubmit={handleSubmitButton}
      />
      <List data={data} />
    </main>
  );
}

export default App;
