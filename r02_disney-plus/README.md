# 디즈니 플러스 앱

- TMDB API
- Google Login API
  @react-oauth/google
  axios 사용

## 기능 TodoList

### 로그인

[x] 로그아웃 상태일 경우 로그인 페이지  
[x] 구글 로그인 기능.구글 로그인을 진행해야 메인 페이지가 보임
[x] 로그아웃 기능

### 데이터 불러오기

[ ] 영화 DB 받아와서 정렬하고, 캐러셀 추가  
[ ] 영화 썸네일 클릭시 모달 열리며 영화의 detail 정보가 뜸  
[ ] 모달은 background나 x 버튼을 누르면 해제된다.
[ ] 메인 페이지의 헤더 부분 접근 때마다 랜덤 출력

### 서치 기능

[ ] 실시간 검색 기능 + debounce

### note

```jsx
function Header() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const userInfo = useRecoilValue(userInfoState);

  console.log("userInfo", userInfo);
  return (
    <>
      <header>
        <h1>
          <img src={disneyLogo} alt="디즈니 플러스 로고" className="h-full" />
        </h1>
        {isLoggedIn ? <Profile src={userInfo.picture} /> : <LoginBtn />}
      </header>
    </>
  );
}

export default Header;
```

상단 헤더에 isLoggedIn의 상태에 따라 로그인 상태면 유저의 프로필 사진, 아니면 로그인 버튼을 그리는 로직을 짰는데
페이지에서 컴포넌트를 넘겨주는게 좀 더 안정적일것같아서 코드를 수정함

#### useMovieData

아래와 같이 type을 넘겨주어 데이터 사용 가능

```js
const trendingData = useMovieData("trendingNow");
const nowPlayingData = useMovieData("nowPlaying");
```

재사용 -> hook 만들어보자 생각을 했는데
문제는 하위 컴포넌트에서 불러오기가 안 되어서 리팩터링 할 예정 (ㅠㅠ)

Main페이지 컴포넌트에 useMovieData를 이용해 데이터를 불러오고 내려주고 있지만 MovieList로 데이터 불러오기를 위임하는 것이 괜찮은 설계같다.

### license ©

API : TMDB API

폰트 : 눈누 - 나눔스퀘어 네오

- `<createBrowserRoute>`
  https://velog.io/@adultlee/createBrowserRouter%EB%A5%BC-%ED%86%B5%ED%95%9C-Router%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80

assets 디즈니 로고 이미지 출처  
https://press.disneyplus.com/about/logos
