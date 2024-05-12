import { GITHUB_URL, GITHUB_TOKEN } from "./config.js";
import { Octokit } from "https://esm.sh/@octokit/core";

if (!GITHUB_TOKEN) {
  throw new Error("git hub token Error.");
}

const octokit = new Octokit({ auth: `${GITHUB_TOKEN}` });

const main = document.getElementById("main");

// SEARCH

const searchSection = main.querySelector(".sec-search");
const searchInput = searchSection.querySelector(".search-input");

// RESULT

const resultSection = main.querySelector(".sec-result");

// USER CARD

const userCard = resultSection.querySelector(".user-card");
const userProfileSection = userCard.querySelector(".user-profile");
const userProfileImgBox = userProfileSection.querySelector(".user-profile-img");
const userInfoBox = userProfileSection.querySelector(".user-info");

const latestReposSection = userCard.querySelector(".latest-repos");
const latestRepoItems = latestReposSection.querySelector(".repo-items");

// 검색 기능

const handleSearchInput = async (e) => {
  const value = e.target.value;
  if (value.length <= 2) {
    return;
  }
  try {
    const userData = await findUserInfo(value);
    createUserProfileImg(userData);
    createUserInfo(userData);
    console.log(userData, "있음?");
  } catch (error) {
    console.error("ERROR", error);
  }
};

searchInput.addEventListener("keyup", handleSearchInput);

// const url = "https://api.github.com";

//에러처리 보완 필요 if(response.status 부분)
const findUserInfo = async (userId) => {
  try {
    const response = await octokit.request(`GET /users/${userId}`, {
      username: "USERNAME",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (response.status === 404) {
      console.log("User not found");
      // 이후 에러 처리 로직을 추가 -> notice 출력
      return;
    }

    // console.log("💿 data", response.data);
    return response.data;
  } catch (error) {
    console.error("Error");
  }
};

// data가 여러개 불러와지는데 일단 제일 첫번째 유저만 출력하도록 기능 구현

// userProfileImgBox

const createUserProfileImg = (userData) => {
  userProfileImgBox.innerHTML = `
    <img src=${userData.avatar_url} alt="유저 프로필 사진" />
    <a href="http://github.com/${userData.login}" target="_blank" class="profile-link">View Profile</a>

  `;
};

const createUserInfo = (userData) => {
  console.log(userData);
  const joinDate = userData.created_at.substring(0, 10).replaceAll("-", "/");
  userInfoBox.innerHTML = `
             <ul class="user-stats-list">
                <li class="public-repos badge">
                  Public Repos: <span>${userData.public_repos}</span>
                </li>
                <li class="gists badge">Public Gists: 
                <span>${userData.public_gists}</span></li>
                <li class="followers badge">Followers: <span>${userData.followers}</span></li>
                <li class="followings badge">Following: <span>${userData.following}</span></li>
              </ul>
              <ul class="user-details-list">
                <li class="user-detail company">
                  Company: <span class="company">${userData.company}</span>
                </li>
                <li class="user-detail">
                  Website/Blog:
                  <a href=${userData.blog} class="website-link">${userData.blog}</a>
                </li>
                <li class="user-detail location">
                  Location:
                  <span class="location">${userData.location}</span>
                </li>
                <li class="user-detail join-date">
                  Member Since: <span class="join-date">${joinDate}</span>
                </li>
              </ul>
  `;
};

// const createRepoItems = (userData) => {
//   const newRepoItem = `
//               <li class="repo-item">
//                 <span class="repo-title">react-deploy-test</span>
//                 <div class="repo-stats">
//                   <span class="repo-stars badge">stars: ${userData.stats}</span>
//                   <span class="repo-watchers badge">watchers: 2</span>
//                   <span class="repo-forks badge">forks: undefined</span>
//                 </div>
//               </li>`;
// };
