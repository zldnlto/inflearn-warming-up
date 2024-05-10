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

const generateBookListItem = (bookInfo) => {
  console.log(bookInfo);
  const bookListItem = document.createElement("li");
  bookListItem.className = "book-list-item";
  const bookTitle = document.createElement("span");
  bookTitle.className = "title-item";
  bookTitle.innerText = bookInfo.title;

  const bookAuthor = document.createElement("span");
  bookAuthor.className = "author-item";
  bookAuthor.innerText = bookInfo.author;

  const bookItemDeleteBtnBox = document.createElement("span");
  const bookItemDeleteBtn = document.createElement("button");
  bookItemDeleteBtn.className = "delete-btn";
  bookItemDeleteBtnBox.appendChild(bookItemDeleteBtn);

  //deleteBtn 이벤트리스너 달기

  bookListItem.append(bookTitle, bookAuthor, bookItemDeleteBtnBox);

  return bookListItem;
  //append는 따로해야함   bookListItems.append(bookListItem);
};

let bookInfo = { title: "", author: "" };

const handleTitleInput = (e) => {
  bookInfo.title = e.target.value;
};

const handleAuthorInput = (e) => {
  bookInfo.author = e.target.value;
};

titleInput.addEventListener("keydown", handleTitleInput);

authorInput.addEventListener("keydown", handleAuthorInput);

const addBookItem = (data) => {
  console.log("addBookItem");
  const bookItem = generateBookListItem(data);
  bookListItems.append(bookItem);
  //구현
};

//추가할 때 notice 출력
//추가하고 나서 form 비우기

const handleSubmitBtn = (e) => {
  e.preventDefault();
  addBookItem(bookInfo);

  //비우기 작업
  titleInput.value = "";
  authorInput.value = "";
  bookInfo.title = "";
  bookInfo.author = "";
  console.log(bookInfo);
};

submitBtn.addEventListener("click", handleSubmitBtn);

//삭제
//삭제할 때 notice 출력
