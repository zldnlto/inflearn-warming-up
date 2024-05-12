import { GITHUB_TOKEN } from "./config.js";
import { Octokit } from "https://esm.sh/@octokit/core";
import throttle from "./utils/throttle.js";
import { findUserInfo } from "./userSearch/findUserInfo.js";
import { findUserRepoInfo } from "./userSearch/findUserRepoInfo.js.js";
import { activeNotFoundNotice } from "./userSearch/activeNotFoundNotice.js";
import {
  createUserProfileImg,
  displayUserInfo,
  displayUserRepos,
} from "./userSearch/display.js";

const main = document.getElementById("main");

// SEARCH

const searchSection = main.querySelector(".sec-search");
const searchInput = searchSection.querySelector(".search-input");

// NOTICE

const noticeMsg = document.createElement("p");
noticeMsg.className = "notice";
console.log(noticeMsg);

// RESULT

const resultSection = main.querySelector(".sec-result");

// USER CARD

const userCard = resultSection.querySelector(".user-card");
const userProfileSection = document.createElement("section");

// 쓰로틀링 기능 도입 필요
// 레포지토리 <a></a> 태그로 수정 후 링크 연동하기 (_target)

const throttledHandleSearchInput = throttle(async (e) => {
  const value = e.target.value;

  if (value === "") {
    activeNotFoundNotice("");
    userCard.innerHTML = "";
  }
  if (value.length <= 2) {
    return;
  }
  try {
    const userData = await findUserInfo(value);

    createUserProfileImg(userData);
    displayUserInfo(userData);

    const latestRepoArr = await findUserRepoInfo(userData.login);
    displayUserRepos(latestRepoArr);
  } catch (error) {
    console.error("ERROR");
  }
}, 800);

searchInput.addEventListener("keyup", throttledHandleSearchInput);
