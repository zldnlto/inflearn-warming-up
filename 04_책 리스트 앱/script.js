// DOM

const main = document.getElementById("main");

//FORM_SECTION

const formSection = main.querySelector("#form-section");
const bookForm = formSection.querySelector(".book-form");
const titleInput = bookForm.querySelector(".title-input");
const authorInput = bookForm.querySelector(".author-input");

const submitBtn = bookForm.querySelector(".submit-btn");

// BOOK_LIST_SECTION
const bookListSection = main.querySelector("#book-list-section");

const bookListItems = bookListSection.querySelector(".book-list-items");

// item DOM 생성
const bookListItem = document.createElement("li");
bookListItem.className = "book-list-item";
const bookTitle = document.createElement("span");
bookTitle.className = "title-item";
bookTitle.innerText = "책이름1";

const bookAuthor = document.createElement("span");
bookAuthor.className = "author-item";
bookAuthor.innerText = "저자명";

const bookItemDeleteBtnBox = document.createElement("span");
const bookItemDeleteBtn = document.createElement("button");
bookItemDeleteBtn.className = "delete-btn";
bookItemDeleteBtnBox.appendChild(bookItemDeleteBtn);

bookListItem.append(bookTitle, bookAuthor, bookItemDeleteBtnBox);

bookListItems.append(bookListItem);

//삭제
//삭제할 때 notice 출력
