// DOM

const container = document.querySelector(".container");

const quizSection = document.querySelector(".quiz-wrapper");

const questionText = document.createElement("p");
questionText.classList.add("question");
quizSection.appendChild(questionText);

const answerBtnWrapper = document.createElement("div");
answerBtnWrapper.classList.add("btn-wrapper");

quizSection.appendChild(answerBtnWrapper);

const lifePoint = document.createElement("span");
lifePoint.classList.add("life-point");

const nextBtn = document.createElement("button");
nextBtn.classList.add("btn", "option-btn");
nextBtn.innerText = "Next";

const restartBtn = document.createElement("button");
restartBtn.classList.add("btn", "option-btn", "hidden");
restartBtn.innerText = "Restart";

quizSection.append(nextBtn, restartBtn);

//기능

const dataFetch = async () => {
  const res = await fetch("./data.json");
  if (!res.ok) {
    throw new Error("error");
  }
  const data = await res.json();
  return data;
};

const init = async () => {
  const res = await dataFetch();
  quizData = [...res.quiz];
  displayQuizData(quizData);
};

init();

let LIFE_POINT = 2;

const activeRestartBtn = () => {
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
  lifePoint.innerText = "☠️";
};

const drawLifePointEmoji = (LP) => {
  let lifePointEmoji = "";
  if (LP === 0) {
    activeRestartBtn();
  } else {
    for (let i = 0; i < LP; i++) {
      lifePointEmoji += "❤️ ";
    }
    lifePoint.innerText = lifePointEmoji;
  }
  return lifePointEmoji;
};

lifePoint.innerText = drawLifePointEmoji(LIFE_POINT);
quizSection.append(lifePoint);

let quizData;

const selectRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomItem = arr[randomIndex];
  return randomItem;
};

const displayQuizData = (data) => {
  const quizItem = selectRandomItem(data);
  questionText.innerText = quizItem.question;
  addAnswerBtn(quizItem);
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const addAnswerBtn = (quizItem) => {
  const correct = quizItem.correct_answer;
  const incorrect = quizItem.incorrect_answers;

  const choices = [correct, ...incorrect];
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

const handleAnswerBtn = (e) => {
  if (LIFE_POINT && e.target.id === "correct") {
    container.classList.add("correct");
    e.target.classList.add("correct");
  } else if (LIFE_POINT && e.target.id !== "correct") {
    container.classList.add("incorrect");
    e.target.classList.add("incorrect");

    const correctAnswer = Array.from(answerBtnWrapper.children).find(
      (v) => v.id === "correct"
    );
    correctAnswer.classList.add("correct");
    LIFE_POINT = LIFE_POINT - 1;
  }

  const btns = Array.from(answerBtnWrapper.children);
  btns.forEach((btn) => {
    if (!(btn.id || btn.classList.contains("incorrect"))) {
      btn.setAttribute("disabled", true);
    }
  });
};

const handleNextBtn = () => {
  drawLifePointEmoji(LIFE_POINT);
  container.classList.remove("correct", "incorrect");

  const btns = Array.from(answerBtnWrapper.children);

  const noSelected = btns.filter(
    (v) => v.classList.contains("incorrect") || v.classList.contains("correct")
  );

  if (noSelected.length === 0) {
    LIFE_POINT = LIFE_POINT - 1;
    drawLifePointEmoji(LIFE_POINT);
  }
  answerBtnWrapper.innerHTML = "";
  displayQuizData(quizData);
};

const handleRestartBtn = async () => {
  questionText.innerText = "";
  answerBtnWrapper.innerHTML = "";
  displayQuizData(quizData);
  LIFE_POINT = 2;
  lifePoint.innerText = drawLifePointEmoji(LIFE_POINT);
  nextBtn.classList.remove("hidden");
  restartBtn.classList.add("hidden");
  container.classList.remove("incorrect");
};

nextBtn.addEventListener("click", handleNextBtn);
restartBtn.addEventListener("click", handleRestartBtn);

// TO_DO
// answer 선택하고 정답 오답 결과 표출되면 Next 버튼 focus 상태 되도록
