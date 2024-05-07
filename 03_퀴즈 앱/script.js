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
const nextBtn = document.createElement("button");
nextBtn.classList.add("btn", "option-btn");
nextBtn.innerText = "Next";

// 재시작 버튼 hidden 디폴트임
const restartBtn = document.createElement("button");
restartBtn.classList.add("btn", "option-btn", "hidden");
restartBtn.innerText = "Restart";

quizSection.append(nextBtn, restartBtn);

//기능

// 도전횟수
let LIFE_POINT = 2;

const activeRestartBtn = () => {
  lifePoint.innerText = "☠️";
  nextBtn.classList.add("hidden");
  restartBtn.classList.remove("hidden");
};

const drawLifePointEmoji = (LP) => {
  console.log(LP);
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

const lifePoint = document.createElement("span");
lifePoint.classList.add("life-point");
lifePoint.innerText = drawLifePointEmoji(LIFE_POINT);
quizSection.append(lifePoint);

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
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

// Next버튼 눌렀을 때 해제하는 기능도 추가하기
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

const handleAnswerBtn = (e) => {
  if (e.target.id === "correct") {
    container.classList.add("correct");
    e.target.classList.add("correct");
  } else {
    // 오답 경우
    container.classList.add("incorrect");
    e.target.classList.add("incorrect");

    const correctAnswer = Array.from(answerBtnWrapper.children).find(
      (v) => v.id === "correct"
    );
    correctAnswer.classList.add("correct");
    //얘랑 중복코드
    LIFE_POINT = LIFE_POINT - 1;
    drawLifePointEmoji(LIFE_POINT);
  }
  const btns = Array.from(answerBtnWrapper.children);
  btns.forEach((btn) => {
    if (!(btn.id || btn.classList.contains("incorrect"))) {
      btn.setAttribute("disabled", true);
    }
  });
};

const handleNextBtn = () => {
  // 정답 안 고르고 Next 선택해도 생명 까임
  const btns = Array.from(answerBtnWrapper.children);

  const isSelectedBtn = btns.filter(
    (v) => v.classList.contains("incorrect") || v.classList.contains("correct")
  );
  if (isSelectedBtn.length === 0) {
    LIFE_POINT = LIFE_POINT - 1;
    drawLifePointEmoji(LIFE_POINT);
  }

  console.log("Next");
  while (answerBtnWrapper.firstChild) {
    answerBtnWrapper.removeChild(answerBtnWrapper.firstChild);
  }
  container.classList.remove("correct", "incorrect");
  displayQuizData(quizData);
};

nextBtn.addEventListener("click", handleNextBtn);

// Next까지 구현 완료, 정답이나 오답 선택하고 나서 다른 버튼 비활성화 시키기 ..
// 문제은행중에 해당 문제 제거 기능 (선택)

// answer 선택하고 정답 오답 결과 표출되면 Next 버튼 focus 상태 되도록
