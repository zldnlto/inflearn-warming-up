## Mission2 : 가위 바위 보 앱

![미션2_2](https://github.com/zldnlto/inflearn-warming-up/assets/95897068/7c5b94be-9bfb-4d6b-b0c8-c3f08bb5ea90)

Mission1을 구현하고 난 뒤라 조금 더 수월하게 할 수 있었다. Mission1은 `index.html`에 큰 골격이 되는 코드를 짜두고 기능이 붙어있는 요소들은 동적 렌더링 했다면 Mission2는 모든 html코드를 동적 생성해보기로 했다. (단순 실험)

- DOM을 그리는 작업 코드가 길어져서 `addElementWithId`, `addElementWithClass` 함수로 캡슐화

### 시행착오

`render.js`를 따로 작성하고 `script.js`에 임포트하는 방식으로 함수를 분리하려 했는데 그렇게 하니 라이브서버에서 에러가 터짐

모듈방식으로 작성한 것이기 때문에 `index.html`에 임포트한 script를 `type='module'` 로 변경해야 한다.  
모듈 형식의 프로젝트를 실행하려면 npm 설치가 필요하므로 규모에 맞지 않다고 판단하여 한 파일에 작성하였다

🤔 모든 요소를 동적 생성 해봤는데 어떤 게 장점일지 .. ???
코드 분리 측면에서 `index.html`에 작성 후 집어오는게 효율적으로 보이는 부분이 있다 -> 찾아보기

(교훈) 일일이 변경시키는 작업을 통해 React에서 상태가 변화하면 UI가 자동으로 바뀐다는 게 얼마나 편리한 기능인지 느낌

- 소소한 실수

```html
<body id="root">
  <!-- 요소 생성 -->
  <script src="./script.js"></script>
</body>
```

태그를 최소화하려고 이런식으로 body를 통째로 `id=root`으로 삼고 작성하려 했는데
이런 상태로 appendChild를 실행할 경우 script 뒤쪽에 태그가 붙어서 의도한 대로 작동하지 않았다.

수정 후

```html
<body>
  <div id="root">
    <!-- 요소 생성 -->
  </div>
  <script scr="./script.js"></script>
</body>
```

React에서 요소를 렌더링 할 때 `<body>`를 그대로 쓰지 않고 `<div id='root'></div>` 를 사용하는 이유를 알 것 같다
`<div></div>` 로 렌더링 공간을 따로 분리하는 느낌이구나

### 아쉬운 부분

1. 변수명을 만들려니 rock, scissor, paper인데 버튼은 가위바위보 ...... ㅎ 이것때문에 함수 순서나 resultMatrix 배열 변경이 꽤 있었다. 통일하고 시작하면 좋았을 문제라고 생각한다.

2. html 설계를 잘못했는지 UI 변동상황 발생 시 `display none`으로 일일이 처리를 해줬는데 이게 베스트는 아니라는 생각이 든다.

> active classList 추가로 좀 더 로직을 단순화하면 좋겠지만
> section을 id로 처리해놓아서 active class를 추가해도 css 속성 점수가 밀린다.
> section을 id가 아니라 class로 다운시키고 수정하면 될 듯 하다
