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

// 기능 구현

let BOOK_LIST = [];
let bookInfo = { id: "", title: "", author: "" };

// 삭제

const handleDeleteBtn = (e) => {
  //DOM 삭제
  const parent = e.target.parentNode;
  console.log(parent);
  parent.remove();

  //DATA에서 삭제 -> 인덱스 이용하는 수밖에 없을듯,,,,,,,
};

// 삭제할 때 notice 출력

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

  const bookItemDeleteBtn = document.createElement("button");
  bookItemDeleteBtn.className = "delete-btn";
  bookItemDeleteBtn.addEventListener("click", handleDeleteBtn);

  bookListItem.append(bookTitle, bookAuthor, bookItemDeleteBtn);

  return bookListItem;
};

const handleTitleInput = (e) => {
  bookInfo.title = e.target.value.trim();
};

const handleAuthorInput = (e) => {
  bookInfo.author = e.target.value.trim();
};

titleInput.addEventListener("keydown", handleTitleInput);

authorInput.addEventListener("keydown", handleAuthorInput);

const generateRandomString = () => {
  return Math.random().toString().split(".")[1].substring(0, 8);
};

console.log(generateRandomString());

const addBookItem = (data) => {
  console.log("addBookItem", data);
  // 아이템을 추가할때 id 부여
  data.id = `${data.title}${data.author}${generateRandomString()}`;
  const bookItem = generateBookListItem(data);
  bookListItems.append(bookItem);
  BOOK_LIST.push({ ...data });

  console.log("booklist", BOOK_LIST);
};

//추가할 때 notice 출력
//추가하고 나서 form 비우기

// bookInfo를 객체에 추가할때 trim 작업 해주기

const handleSubmitBtn = (e) => {
  e.preventDefault();
  if (!bookInfo.title || !bookInfo.author) {
    return;
  }
  addBookItem(bookInfo);
  titleInput.value = "";
  authorInput.value = "";
  bookInfo.title = "";
  bookInfo.author = "";
};

submitBtn.addEventListener("click", handleSubmitBtn);
