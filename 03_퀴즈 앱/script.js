// DOM

const quizSection = document.querySelector(".quiz-wrapper");

const questionText = document.createElement("p");
questionText.classList.add("question");
quizSection.appendChild(questionText);

const answerBtnWrapper = document.createElement("div");
answerBtnWrapper.classList.add("btn-wrapper");

// const answerBtn1 = document.createElement("button");
// answerBtn1.classList.add("btn", "answer-btn");
// answerBtn1.innerText = "선택지1"; // 수정

// const answerBtn2 = document.createElement("button");
// answerBtn2.classList.add("btn", "answer-btn");
// answerBtn2.innerText = "선택지2"; //수정

// const answerBtn3 = document.createElement("button");
// answerBtn3.classList.add("btn", "answer-btn");
// answerBtn3.innerText = "선택지3"; //수정

// answerBtnWrapper.append(answerBtn1, answerBtn2, answerBtn3);
quizSection.appendChild(answerBtnWrapper);

// option 버튼
const optionBtn = document.createElement("button");
optionBtn.classList.add("btn", "option-btn");
optionBtn.innerText = "Next";

quizSection.append(optionBtn);

//기능

// data 랜덤으로 불러와서 문제, 선택지에 뿌려줌 (랜덤으로)
// 오답 생성은 어떻게 ?

const LIFE_POINT = 2; // 도전횟수

let quizData;

const init = async () => {
  const res = await fetch("./data.json");
  if (!res.ok) {
    throw new Error("error");
  }
  const data = await res.json();
  quizData = data.quiz;

  displayQuizData(quizData);
};

init();

const selectRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

const displayQuizData = (data) => {
  console.log(data, "dpdata");
  // data에서 문제 랜덤 뽑기
  const quizItem = selectRandomItem(data);
  console.log(quizItem);
  questionText.innerText = quizItem.question;

  // 버튼 생성

  // 오답 처리
};
