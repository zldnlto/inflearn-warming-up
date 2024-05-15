import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("모니터링", data);
  }, [data]);

  const handleSubmitButton = (e) => {
    e.preventDefault();
    console.log(data);
    console.log("하이");
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center rounded border ">
      <h1 className="text-3xl">예산 계산기</h1>
      <Form setData={setData} onSubmit={handleSubmitButton} />
      <List data={data} />
    </main>
  );
}

export default App;
