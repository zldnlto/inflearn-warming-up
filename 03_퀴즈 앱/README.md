# 퀴즈 앱

문제와 정답은 아래와 같은 데이터 구조로 설계

```json
    {
      "question": "2+2",
      "correct_answer": "4",
      "incorrect_answers": ["8"]
    },
```

선택지 개수에 따라 버튼이 자동으로 렌더링 된다

피셔-예이츠 셔플(Fishcer-Yates shuffle) 알고리즘 활용

```js
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 무작위로 index 값 생성 (0 이상 i 미만)
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
```

### ⓒ license

- [눈누](https://noonnu.cc/font_page/1369) : 프리젠테이션
