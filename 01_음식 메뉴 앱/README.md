## Mission1 : 음식 메뉴 앱

![미션1_2](https://github.com/zldnlto/inflearn-warming-up/assets/95897068/59935e10-43d3-4232-97e9-87102ee72f49)

- 음식 데이터 `data.json` 생성, 페칭하여 API 불러오기 모사
- `index.html`에는 큰 줄기의 요소만 생성, 주요 기능이 있는 카테고리 버튼과 카드는 동적 생성
- HTML validator 통과, 카드 부분에 `<figure>`, `<figcatpion>` 태그를 활용하는 등 시멘틱 태그 준수 노력
- 아쉬운 점 : `renderCard` 함수를 만들어서 html 요소를 동적으로 생성하고 있는데, vanilla javascript로 요소를 동적 생성하여 구현할 때 렌더링 과정이 반복되는걸 생각하면 이 함수는 메뉴라는 한정적인 기능을 상정하고 만들어서 추상화의 정도가 낮은 점이 아쉽다. 프로젝트 규모가 커진다면 Card만 렌더링 할 수 있게 하는 것이 아닌 `render`함수를 만들어 사용하는 것이 합리적일 듯하다.
- 궁금한 점 : Card 컴포넌트를 생성할 때 li태그 이하의 자식 요소들이 많은 점을 고려하여 `innerHTML`로 덩어리 템플릿을 찍어내는 방식으로 구현하였는데 `document.createElement`로 생성하고 클래스나 Attribute를 각기 붙여가는 방식으로 구현하는 것과 어떤 차이가 있는지 .. 메이저하게 선호되는 방식이 있는지 궁금하다 (취향 차이라고는 들었던 것 같다)
