// CONSTANT

let COMPUTER_SCORE = 0;
let USER_SCORE = 0;
let REMAINING_POINT = 10;

let USER_PICK = 0;
let COMPUTER_PICK = 0;

// DOM

const addElementWithId = (element, id) => {
  const newElement = document.createElement(element);
  newElement.id = id;
  return newElement;
};
const addElementWithClass = (element, ...classNames) => {
  const newElement = document.createElement(element);
  newElement.classList.add(...classNames);
  return newElement;
};

const root = document.getElementById("root");

// 얼개 짜기

const header = addElementWithId("header", "header");
const main = addElementWithId("main", "main");
const scoreSection = addElementWithId("section", "score");
const selectSection = addElementWithId("section", "select");
const resultSection = addElementWithId("section", "result");

root.appendChild(header);
root.appendChild(main);

// HEADER

const heading = addElementWithClass("h1", "ir");
heading.innerHTML = "가위바위보 게임 앱";

const mainImage = addElementWithClass("img", "main-image");
mainImage.setAttribute("src", "./assets/zzangkenman.webp");
mainImage.setAttribute("alt", "가위바위보 머신 이미지");

header.appendChild(mainImage);

// MAIN
main.appendChild(scoreSection);
main.appendChild(selectSection);
main.appendChild(resultSection);

// MAIN _ SCORE SECTION

const scoreHeading = addElementWithClass("h2", "ir");
scoreHeading.innerHTML = "플레이어와 스코어";

// MAIN _  SELECT SECTION

const userScoreBox = addElementWithClass("div", "player", "user");
const userName = document.createElement("span");
userName.innerText = "플레이어";
const userScore = addElementWithClass("span", "score");
userScore.innerText = USER_SCORE; //임시

const computerScoreBox = addElementWithClass("div", "player", "computer");

const computerName = document.createElement("span");
computerName.innerText = "컴퓨터";
const computerScore = addElementWithClass("span", "score");
computerScore.innerText = COMPUTER_SCORE; //임시

// 고민 -> append 작업을 아래와 같이 따로 분리해야할지 구역별로 모아놓는게 좋을지  생성 / 붙이기 작업 분리 아니면 section별로 분리?

userScoreBox.appendChild(userName);
userScoreBox.appendChild(userScore);

computerScoreBox.appendChild(computerName);
computerScoreBox.appendChild(computerScore);

scoreSection.appendChild(userScoreBox);
scoreSection.appendChild(computerScoreBox);

// MAIN _  RESULT SECTION

const selectHeading = addElementWithClass("h2", "ir");
selectHeading.innerHTML = "가위 바위 보 선택";

const selectText = document.createElement("span");
selectText.innerText = "선택하기";

const remainingBox = addElementWithClass("div", "remaining");

const remainigText = document.createElement("span");
remainigText.innerText = `남은 횟수 : `;

const remainigPoint = document.createElement("span");
remainigPoint.innerText = REMAINING_POINT;

const rcpBtnBox = addElementWithClass("div", "rcp-btns");

const selectBtnScissors = addElementWithClass("button", "select-btn");
selectBtnScissors.innerText = "가위";

const selectBtnRock = addElementWithClass("button", "select-btn");
selectBtnRock.innerText = "바위";

const selectBtnPaper = addElementWithClass("button", "select-btn");
selectBtnPaper.innerText = "보";

remainingBox.appendChild(remainigText);
remainingBox.appendChild(remainigPoint);

rcpBtnBox.appendChild(selectBtnScissors);
rcpBtnBox.appendChild(selectBtnRock);
rcpBtnBox.appendChild(selectBtnPaper);

selectSection.appendChild(selectHeading);
selectSection.appendChild(selectText);
selectSection.appendChild(remainingBox);
selectSection.appendChild(rcpBtnBox);

// MAIN _  RESULT SECTION

const resultHeading = addElementWithClass("h2", "ir");
resultHeading.innerHTML = "결과";

const resultText = document.createElement("div");
resultText.innerText = ""; //변경

const restartBtn = addElementWithClass("button", "restart-btn");
const restartBtnText = document.createElement("span");
restartBtnText.innerText = "재도전";
restartBtn.appendChild(restartBtnText);

resultSection.appendChild(resultHeading);
resultSection.appendChild(resultText);

resultSection.appendChild(restartBtn);

// 로직 구현

const resultMatric = [
  [0, -1, 1], // rock
  [1, 0, -1], // scissors
  [-1, 1, 0], // paper
];

handleRestartBtn = () => {
  console.log("restart");
  COMPUTER_SCORE = 0;
  USER_SCORE = 0;
  REMAINING_POINT = 10;

  // 아쉬운 부분
  userScore.innerText = USER_SCORE;
  computerScore.innerText = COMPUTER_SCORE;
  resultText.style.display = "block";
  remainingBox.style.display = "block";
  rcpBtnBox.style.display = "block";
  selectText.innerText = "";
  restartBtn.style.display = "none";
};

const generateComputerPick = () => {
  return Math.floor(Math.random() * 3); // 0, 1, 2
};

const calculateScore = (USER_PICK, COMPUTER_PICK) => {
  const result = resultMatric[USER_PICK][COMPUTER_PICK];
  if (result > 0) {
    USER_SCORE += 1;
    resultText.innerText = "유저 승리";
  } else if (result < 0) {
    COMPUTER_SCORE += 1;
    resultText.innerText = "컴퓨터 승리";
  } else resultText.innerText = "비겼어요";
  return;
};

const calculateResult = () => {
  const temp = USER_SCORE - COMPUTER_SCORE;

  if (temp === 0) {
    return "무승부";
  } else if (temp > 0) {
    return "게임에서 이겼습니다.";
  } else {
    return "게임에서 졌습니다.";
  }
};

const resultRender = (USER_SCORE, COMPUTER_SCORE) => {
  REMAINING_POINT -= 1;
  remainigPoint.innerText = REMAINING_POINT;
  userScore.innerText = USER_SCORE;
  computerScore.innerText = COMPUTER_SCORE;

  if (REMAINING_POINT === 0) {
    // 아쉬운 부분
    resultText.innerText = "";
    remainingBox.style.display = "none";
    rcpBtnBox.style.display = "none";
    selectText.innerText = calculateResult();
    selectText.style.fontSize = "3.5rem";
    restartBtn.style.display = "block";
    return;
  }
};

const handleSiccorsBtn = () => {
  USER_PICK = 1;
  COMPUTER_PICK = generateComputerPick();

  calculateScore(USER_PICK, COMPUTER_PICK);
  resultRender(USER_SCORE, COMPUTER_SCORE);

  console.log("가위", "유저 / 컴퓨터", USER_PICK, COMPUTER_PICK);
  console.log(USER_SCORE, COMPUTER_SCORE);
  return USER_PICK;
};

const handleRockBtn = () => {
  USER_PICK = 0;
  COMPUTER_PICK = generateComputerPick();

  calculateScore(USER_PICK, COMPUTER_PICK);
  resultRender(USER_SCORE, COMPUTER_SCORE);

  console.log("바위", "유저 / 컴퓨터", USER_PICK, COMPUTER_PICK);
  return USER_PICK;
};

const handlePaperBtn = () => {
  USER_PICK = 2;
  COMPUTER_PICK = generateComputerPick();

  calculateScore(USER_PICK, COMPUTER_PICK);
  resultRender(USER_SCORE, COMPUTER_SCORE);

  console.log("보", "유저 / 컴퓨터", USER_PICK, COMPUTER_PICK);
  return USER_PICK;
};

selectBtnScissors.addEventListener("click", handleSiccorsBtn);
selectBtnRock.addEventListener("click", handleRockBtn);
selectBtnPaper.addEventListener("click", handlePaperBtn);

restartBtn.addEventListener("click", handleRestartBtn);

// 렌더링 시점 고민하게 된다
