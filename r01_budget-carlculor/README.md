# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### © license

- 눈누 : [나눔스퀘어라운드 폰트](https://noonnu.cc/font_page/38)

### tailwind Init에 참고

- https://developer.comento.kr/post/frontend-tailwind-css-24-04-01

- https://github.com/francoismassart/eslint-plugin-tailwindcss?ref=blog.comento.info

- https://techblog.woowahan.com/15903/

## dev note

### 기능 구현 check list

[x] 지출 항목과 비용을 form에 입력하고 '제출' 버튼을 누르면 아이템이 추가된다.  
[x] 비용을 입력하지 않을 시 디폴트 0으로 기록된다. (추후 수정 가능하니 0원 기록 허용함)  
[ ] 아이템이 추가되면 상단에 알림 메세지가 뜬다.  
[ ] 아이템의 총 비용을 합해 총지출 내역을 표시한다. (아이템 0개일 경우 기본 상태: 0)  
[ ] 지출 목록 아이템의 수정을 선택하면 해당 내용이 form에 붙여넣기 되고, '수정' 버튼을 누르면 정보가 수정된다.  
[ ] 이 때 원래 form에 있던 '제출' 버튼이 '수정' 버튼으로 변경된다.  
[ ] 수정 중에는 총지출 내역은 표시되지 않는다.  
[ ] 수정이 완료되면 상단에 알림 메세지가 뜬다.  
[ ] 리스트가 추가되면 하단에 '목록 지우기' 버튼도 함께 표시된다.  
[ ] 개별 아이템의 지우기 버튼을 누르면 아이템이 삭제된다.  
[ ] '목록 지우기' 버튼을 누르면 리스트가 전부 삭제된다.

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
