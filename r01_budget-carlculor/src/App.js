import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [nameValue, setNameValue] = useState("");
  const [costValue, setCostValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("모니터링", costValue, nameValue, data);
  }, [data]);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (nameValue && costValue) {
      setData((prev) => [...prev, { name: nameValue, cost: costValue }]);
      setNameValue("");
      setCostValue("");
    }
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center rounded border ">
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
