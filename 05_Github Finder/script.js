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
const userProfileSection = document.createElement("section");

const userProfileTitle = document.createElement("h4");
userProfileTitle.className = "ir";
userProfileTitle.innerText = "유저 기본 정보";
userProfileSection.appendChild(userProfileTitle);

userProfileSection.className = "section user-profile";
const userProfileImgBox = document.createElement("div");
userProfileImgBox.className = "user-profile-img";

const userInfoBox = document.createElement("div");
userInfoBox.className = "user-info";
userProfileSection.append(userProfileImgBox, userInfoBox);

// L-REPOS
const latestReposSection = document.createElement("section");
latestReposSection.className = "section latest-repos";

const latestReposTitle = document.createElement("h4");
latestReposTitle.className = "latest-repos-title";
latestReposTitle.innerText = "Latest Repos";
latestReposSection.appendChild(latestReposTitle);

const latestRepoItems = document.createElement("ul");
latestRepoItems.className = "repo-items";

// 검색 기능
// 쓰로틀링 기능 도입 필요
// data가 여러개 불러와지는데 일단 제일 첫번째 유저만 출력하도록 기능 구현

const handleSearchInput = async (e) => {
  const value = e.target.value;
  if (value.length <= 2) {
    return;
  }
  try {
    const userData = await findUserInfo(value);
    if (!userData) {
      return;
    }
    createUserProfileImg(userData);
    createUserInfo(userData);
    userCard.appendChild(userProfileSection);
    console.log(userData.repos_url);

    const latestRepoArr = await findUserRepoInfo(userData.login);
    const latestRepoItem = createRepoItems(latestRepoArr);
    latestRepoItems.innerHTML = latestRepoItem;
    latestReposSection.appendChild(latestRepoItems);
    userCard.appendChild(latestReposSection);
  } catch (error) {
    console.error("ERROR", error);
  }
};

searchInput.addEventListener("keyup", handleSearchInput);

//에러처리 보완 필요 if(response.status 부분)
const findUserInfo = async (userId) => {
  try {
    const response = await octokit.request(`GET /users/${userId}`, {
      username: "USERNAME",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error / findUserInfo err");
  }
};

const findUserRepoInfo = async (userId) => {
  const response = await octokit.request(`GET /users/${userId}/repos`, {
    username: "USERNAME",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  const repoData = response.data;
  repoData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  const userLatestRepos = repoData.splice(0, 5);
  return userLatestRepos;
};

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
		    <span>${userData.public_gists}</span>
	    </li>
	    <li class="followers badge">Followers: 
		    <span>${userData.followers}</span>
	    </li>
	    <li class="followings badge">Following: 
		    <span>${userData.following}</span>
	    </li>
    </ul>
    <p class="username">${userData.login}</p>
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
		    Member Since: 
		    <span class="join-date">${joinDate}</span>
	    </li>
    </ul>
  `;
};

const createRepoItems = (latestRepoArr) => {
  let repoItems = "";

  console.log(latestRepoArr);
  if (latestRepoArr.length) {
    latestRepoArr.forEach((item) => {
      const repoItem = `
      <li class="repo-item">
        <a href="${item.url}" class="repo-title">${item.name}</a>
        <div class="repo-stats">
          <span class="repo-stars badge">stars: ${item.stargazers_count}</span>
          <span class="repo-watchers badge">watchers: ${item.watchers_count}</span>
          <span class="repo-forks badge">forks: ${item.forks}</span>
       </div>
      </li>`;
      repoItems += repoItem;
    });
  }
  return repoItems;
};

// 레포지토리 <a></a> 태그로 수정 후 링크 연동하기 (_target)
