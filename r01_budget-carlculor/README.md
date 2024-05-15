# 예산 계산기

## dev note

### ✅ 기능 구현 check list

[x] 지출 항목과 비용을 form에 입력하고 '제출' 버튼을 누르면 아이템이 추가된다.  
[x] 비용을 입력하지 않을 시 디폴트 0으로 기록된다. (추후 수정 가능하니 0원 기록 허용함)  
[x] 아이템이 추가되면 상단에 알림 메세지가 뜬다.  
[x] 아이템의 총 비용을 합해 총지출 내역을 표시한다. (아이템 0개일 경우 기본 상태: 0)  
[x] 지출 목록 아이템의 수정을 선택하면 해당 내용이 form에 붙여넣기 되고, '수정' 버튼을 누르면 정보가 수정된다.  
[x] 이 때 원래 form에 있던 '제출' 버튼이 '수정' 버튼으로 변경된다.  
[x] 수정 중에는 총지출 내역은 표시되지 않는다.  
[x] 수정이 완료되면 상단에 알림 메세지가 뜬다.  
[x] 리스트가 추가되면 하단에 '목록 지우기' 버튼도 함께 표시된다.  
[x] 개별 아이템의 지우기 버튼을 누르면 아이템이 삭제된다.  
[x] '목록 지우기' 버튼을 누르면 리스트가 전부 삭제된다.
[x] 아이템이 삭제되면 상단에 알림 메세지가 뜬다.

---

추가 기능  
[] 로컬 스토리지에 저장

### tailwind 스타일 재사용하기 - @apply 사용법

- `@apply`

```css
.my-style {
  @apply pb-6 pt-4 font-semibold text-gray-800;
}
```

```html
<div class="my-style"></div>
```

react-icons 라이브러리의 아이콘 사용

### 한 객체로 svg 아이콘 관리

사용되는 svg들이 담긴 컴포넌트 만들어서 한 객체로 관리

```js
//svg.js

import { FaPen } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

export const icons = {
  pen: <FaPen />,
  submit: <FaPaperPlane />,
  trash: <FaTrashAlt />,
  wallet: <FaWallet />,
};
```

사용

```jsx
<div className="flex gap-3">
  <button>{icons.pen}</button>
  <button>{icons.trash}</button>
</div>
```

icon 임포트를 한 곳에서 받아서 깔끔하지만
div로 묶어 개별 스타일링 해야한다는 단점이 있음

## 아쉬운점

- 수정시에 input에 값 붙여넣기를 위해 `handleEditBtn` 함수에서는 find로 수정 버튼이 눌린 아이템을 찾고 있다.

```js
const handleEditBtn = (id) => {
  // 단순 value값 붙여넣기, editmode 켜기
  setEditTargetId(id); // handleEditSubmitBtn에 전달 위함
  const editTarget = data.find((item) => item.id === id);
  setNameValue(editTarget.name);
  setCostValue(editTarget.cost);
  setEditMode(true);
  console.log("handleEditBtn", id);
};
```

이렇게 find로 찾은 김에 이걸 이용해서 수정을 바로 진행할까 했으나 리액트는 상태를 직접 수정하는걸 권장하지 않으므로... 🤔 결국 아래와 같이 새 배열을 생성해서 구현하였다.
이 과정에서 editTargetId라는 state가 하나 더 생겼다.

```js
const handleEditSubmitBtn = (e) => {
  e.preventDefault();

  if (nameValue && costValue) {
    const updatedData = data.map((item) => {
      if (item.id === editTargetId) {
        return {
          ...item,
          name: nameValue,
          cost: costValue,
        };
      } else {
        return item;
      }
    });
    setData(updatedData);
    // 생략
  }
};
```

데이터가 많아진다면 과연 효율적인 방법일까? 이 부분은 더 좋은 코드를 찾아보고싶다. 상태를 하나 더 만든 게 약간 찝찝하기도 하고 ~

- 객체 리스트의 구분을 위해서 `uuid` 라이브러리를 사용하였다.
- tailwind + eslint + prettier 충돌때문에 시간을 꽤 많이 썼다. 보일러플레이트를 하나 만들어야겠다... 🤕

## 리팩터링

[ 내용 없음 ]

## © license & reference

- 눈누 : [나눔스퀘어라운드 폰트](https://noonnu.cc/font_page/38)

### 참고하였습니다

- https://developer.comento.kr/post/frontend-tailwind-css-24-04-01

- https://github.com/francoismassart/eslint-plugin-tailwindcss?ref=blog.comento.info

- https://techblog.woowahan.com/15903/
