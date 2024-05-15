import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
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

  const [editMode, setEditMode] = useState(false);

  const [editTargetId, setEditTargetId] = useState("");

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

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    if (nameValue && costValue) {
      setData((prev) => [
        ...prev,
        { id: uuidv4(), name: nameValue, cost: costValue },
      ]);
      setNameValue("");
      setCostValue("");

      setNoticeColor("green");
      setNoticeMessage("💸 아이템이 추가되었습니다.");
      setIsVisible(true);
    }
  };

  const handleResetBtn = () => {
    setData([]);
    setNoticeColor("red");
    setNoticeMessage("🔥 아이템이 모두 삭제되었습니다.");
    setIsVisible(true);
  };

  const handleDeleteBtn = (id) => {
    console.log("🤔 handleDelete", id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);

    setNoticeColor("red");
    setNoticeMessage("🔥 아이템이 삭제되었습니다.");
    setIsVisible(true);
  };

  const handleEditSubmitBtn = (e) => {
    e.preventDefault();

    console.log("🦭 handleEditSubmitBtn");
    if (nameValue && costValue) {
      const updatedData = data.map((item) => {
        if (item.id === editTargetId) {
          return {
            ...item,
            name: nameValue,
            cost: costValue,
          };
        } else {
          return item;
        }
      });
      setData(updatedData);
      setEditMode(false);
      setNameValue("");
      setCostValue("");
      setNoticeMessage("✅ 아이템이 수정되었습니다.");
      setIsVisible(true);
    }
  };

  const handleEditBtn = (id) => {
    // 단순 value값 붙여넣기, editmode 켜기
    setEditTargetId(id); // handleEditSubmitBtn에 전달 위함
    const editTarget = data.find((item) => item.id === id);
    console.log(editTarget);
    setNameValue(editTarget.name);
    setCostValue(editTarget.cost);
    setEditMode(true);
    console.log("handleEditBtn", id);
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
        onSubmit={handleSubmitBtn}
        onEditSubmit={handleEditSubmitBtn}
        editMode={editMode}
      />
      {data.length ? (
        <List
          data={data}
          handleResetBtn={handleResetBtn}
          handleEditBtn={handleEditBtn}
          handleDeleteBtn={handleDeleteBtn}
          editMode={editMode}
        />
      ) : null}
    </main>
  );
}

export default App;
