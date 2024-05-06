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
userScore.innerText = 0; //임시

const computerScoreBox = addElementWithClass("div", "player", "computer");

const computerName = document.createElement("span");
computerName.innerText = "컴퓨터";
const computerScore = addElementWithClass("span", "score");
computerScore.innerText = 0; //임시

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
remainigPoint.innerText = 10;

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
resultText.innerText = "컴퓨터 승리"; //변경

const restartBtn = addElementWithClass("button", "restart-btn");
const restartBtnText = document.createElement("span");
restartBtnText.innerText = "재도전";
restartBtn.appendChild(restartBtnText);

resultSection.appendChild(resultHeading);
// resultSection.appendChild(resultText);
// resultSection.appendChild(restartBtn);

// const userScore = scoreSection.querySelector(".user");
// const computerScore = scoreSection.querySelector(".computer");

// console.log(userScore, computerScore);
