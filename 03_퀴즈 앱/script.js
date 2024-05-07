// DOM

const container = document.querySelector(".container");

const quizSection = document.querySelector(".quiz-wrapper");

const questionText = document.createElement("p");
questionText.classList.add("question");
quizSection.appendChild(questionText);

const answerBtnWrapper = document.createElement("div");
answerBtnWrapper.classList.add("btn-wrapper");

quizSection.appendChild(answerBtnWrapper);

// option 버튼
const optionBtn = document.createElement("button");
optionBtn.classList.add("btn", "option-btn");
optionBtn.innerText = "Next";

quizSection.append(optionBtn);

//기능

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
      btn.id = "correct";
    }
    btn.addEventListener("click", handleAnswerBtn);
    btn.innerText = item;
    btnArr.push(btn);
  });
  shuffle(btnArr);
  answerBtnWrapper.append(...btnArr);
};

handleAnswerBtn = (e) => {
  if (e.target.id === "correct") {
    container.classList.add("correct");
    e.target.classList.add("correct");
  } else {
    container.classList.add("incorrect");
    e.target.classList.add("incorrect");

    const correctAnswer = Array.from(answerBtnWrapper.children).find(
      (v) => v.id === "correct"
    );
    correctAnswer.classList.add("correct");
  }
};

handleNextBtn = () => {
  console.log("Next");
};

optionBtn.addEventListener("click", handleNextBtn);
