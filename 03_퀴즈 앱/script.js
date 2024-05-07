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
  addAnswerBtn(quizItem);

  // 오답 처리
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const addAnswerBtn = (quizItem) => {
  console.log(quizItem);
  const correct = quizItem.correct_answer;
  const incorrect = quizItem.incorrect_answers;

  const choices = [correct, ...incorrect];
  console.log(choices, "choices");
  const btnArr = [];

  choices.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.classList.add("btn", "answer-btn");
    if (index === 0) {
      btn.id === "correct";
    }
    btn.innerText = item; // 수정
    btnArr.push(btn);
  });
  shuffle(btnArr);
  answerBtnWrapper.append(...btnArr);
};
