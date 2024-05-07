// DOM

const quizSection = document.querySelector(".quiz-wrapper");

const question = document.createElement("p");
question.classList.add("question");
question.innerText = "문제 4+4"; //수정
quizSection.appendChild(question);

const answerBtnWrapper = document.createElement("div");
answerBtnWrapper.classList.add("btn-wrapper");

const answerBtn1 = document.createElement("button");
answerBtn1.classList.add("btn", "answer-btn");
answerBtn1.innerText = "선택지1"; // 수정

const answerBtn2 = document.createElement("button");
answerBtn2.classList.add("btn", "answer-btn");
answerBtn2.innerText = "선택지2"; //수정

const answerBtn3 = document.createElement("button");
answerBtn3.classList.add("btn", "answer-btn");
answerBtn3.innerText = "선택지3"; //수정

answerBtnWrapper.append(answerBtn1, answerBtn2, answerBtn3);
quizSection.appendChild(answerBtnWrapper);

// option 버튼
const optionBtn = document.createElement("button");
optionBtn.classList.add("btn", "option-btn");
optionBtn.innerText = "Next";

quizSection.append(optionBtn);
