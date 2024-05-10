// DOM

const main = document.getElementById("main");

const notice = document.createElement("p");
notice.className = "notice";

//FORM_SECTION

const formSection = main.querySelector("#form-section");
const bookForm = formSection.querySelector(".book-form");
const titleInput = bookForm.querySelector(".title-input");
const authorInput = bookForm.querySelector(".author-input");

const submitBtn = bookForm.querySelector(".submit-btn");

// BOOK_LIST_SECTION
const bookListSection = main.querySelector("#book-list-section");

const bookListItems = bookListSection.querySelector(".book-list-items");

main.insertBefore(notice, formSection);

// 기능 구현

let BOOK_LIST = [];
let bookInfo = { id: "", title: "", author: "" };

const noticeTimeout = (msg) => {
  notice.classList.add("active");
  notice.innerText = msg;
  setTimeout(() => {
    notice.classList.remove("active");
  }, 2000);
};

const handleDeleteBtn = (e) => {
  const parent = e.target.parentNode;
  const id = parent.id;
  const index = BOOK_LIST.findIndex((v) => v.id === id);
  BOOK_LIST.splice(index, 1);
  parent.remove();

  noticeTimeout("책이 삭제되었습니다.");
};

const generateRandomString = () => {
  return Math.random().toString().split(".")[1].substring(0, 8);
};

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

  bookListItem.id = bookInfo.id;
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

const addBookItem = (data) => {
  data.id = `${data.title}${data.author}${generateRandomString()}`;
  const bookItem = generateBookListItem(data);
  bookListItems.append(bookItem);
  BOOK_LIST.push({ ...data });

  noticeTimeout("책이 추가되었습니다.");
};

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
