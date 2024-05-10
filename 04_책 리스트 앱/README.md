# 책 리스트 앱

## className vs classList 사용성 차이

```js
element.className = "className";
element.classList.add("className");
```

프로젝트를 몇 번 거치며 사용해본 결과
`className = ""`은 DOM을 생성하면서 바로 클래스를 붙여줄 때, `classList.add()`는 active나 hidden 등의 클래스 추가로 화면을 조작할 때 사용하는 식으로 구분해주면 가독성 측면에서 용이할 것 같다.

### 객체 안에서 같은 값 찾기

객체배열 `BOOK_LIST` 생성하여 책 데이터를 관리하고 있다.

```js
const BOOK_LIST = [{id = "",title: "책제목", author: "김작가" }]
```

#### 데이터 삭제를 위한 id값 생성

id는 난수 생성 후 `작가이름+책제목+난수` 형식으로 붙여주었다. 난수만 붙이면 될 수도 있는데 작가이름+책제목은 왠지 나중에 sort할때 도움되지 않을까 싶은 불확실한 기우 ..ㅎ

```js
{id = ""title: "책제목", author: "김작가" }

const generateRandomString = () => {
  return Math.random().toString().split(".")[1].substring(0, 8);
};

const addBookItem = (data) => {
  data.id = `${data.title}${data.author}${generateRandomString()}`;
  const bookItem = generateBookListItem(data);
  bookListItems.append(bookItem);
  BOOK_LIST.push({ ...data });
};
```

findIndex로 id값이 같은 배열 요소 찾고 splice 메서드 이용하여 삭제

```js
const handleDeleteBtn = (e) => {
  const parent = e.target.parentNode;
  const id = parent.id;
  const index = BOOK_LIST.findIndex((v) => v.id === id);
  BOOK_LIST.splice(index, 1);
  parent.remove();

  noticeTimeout("책이 삭제되었습니다.");
};
```

#### setTimeout 사용하여 notice 구현

```js
const noticeTimeout = (msg) => {
  notice.classList.add("active");
  notice.innerText = msg;
  setTimeout(() => {
    notice.classList.remove("active");
  }, 2000);
};
```

삭제, 추가 등의 안내 메세지를 인자로 받아서 notice 메세지가 담긴 엘리먼트를 일정 시간동안 active한다.

### soruce

- 웨이브 파도체
  (https://noonnu.cc/font_page/1370)

- `/assets` 의 모든 아이콘 svg  
  fontawesome (https://fontawesome.com/)
