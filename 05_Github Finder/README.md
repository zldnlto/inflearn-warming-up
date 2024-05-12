# Github Finder

- GitHub API (Octokit) 을 사용한 GitHub Finder

https://developer.github.com/v3/search/#search-users

https://api.github.com/users/사용자이름 으로 요청하면 아래 같이 Github user 정보가 들어있는 JSON을 줍니다.

## 코드 & 트러블 슈팅

### 코드

- DOM 생성 : 비슷한 기능이지만, `innerHTML` 을 이용하는 만큼 템플릿이 길어지면 코드가 복잡해질 우려가 있어 section별로 함수를 쪼갰다.

- repo를 create_at 속성 순으로 불러오기

- 추가하기 ) 시연 영상을 토대로 실시간 검색 기능을 구현했지만 키를 입력할 때마다 계속해서 데이터가 불러와지는 것은 성능 이슈를 불러일으킬 가능성이 있다고 생각했다. id만 검색한다면 그나마 괜찮지만 해당 id에 딸린 repo들도 모두 불러들이기 때문에 데이터가 상당히 많이 불러와지게 된다. (id + repo) -> 쓰로틀링 기능 도입 필요

- latestRepos는 최대 10개를 보여준다. (해당 레포지토리로 링크)

### 트러블 슈팅

```js
const handleSearchInput = async (e) => {
  const value = e.target.value;
  try {
    const userData = await findUserInfo(value);
    console.log(userData);
    createUserProfileImg(userData);
  } catch (error) {
    console.error("ERROR", error);
  }
};

searchInput.addEventListener("keyup", handleSearchInput);
//keydown -> keyup
```

`handleSearchInput` 기능 구현 중, 의도와는 다르게 반응이 한 글자씩 밀리는 에러가 있었다. (ex. 'zldnlto'를 입력하면 'zldnlto'의 검색 결과가 나와야 하는데 마지막 글자가 누락된 'zldnlt'의 결과가 나옴)  
이벤트 핸들러를 `keydown` 이벤트에 붙여서 이런 결과가 생긴 것인데, 이 경우 입력 필드의 값이 변경되기 전에 업데이트가 된다. 키가 놓이면 그 때 입력된 값을 인식하도록 keyup으로 변경해주니 의도한 대로 동작한다.

환경 변수 설정 이슈 -
React 에서는 환경변수를 `.env`에 등록하여 `process.env.VAR` 과 같이 불러와 사용하였는데 vanilla js에서는 이와 같은 방법이 적용되지 않았다.

-> `config.js` 에 환경변수를 작성해주고 불러와 사용해준다.

```js
export const GITHUB_URL = "GITHUB URL";
export const GITHUB_TOKEN = "GITHUB TOKEN";
```

## 참고 사이트

트러블 슈팅 - 환경변수

https://www.freecodecamp.org/news/how-to-use-environment-variables-in-vanillajs/

https://stackoverflow.com/questions/64825953/how-to-access-environment-variables-with-vanilla-javascript

### ⓒ license

- [Google Fonts](https://fonts.google.com/specimen/Nanum+Gothic/about?query=nanum) : Nanum Gothic

- [Fontawesome](https://fontawesome.com/) 아이콘 폰트 사용 - `/assets` 의 모든 아이콘 svg

```

```
