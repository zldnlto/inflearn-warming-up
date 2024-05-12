import { GITHUB_URL, GITHUB_TOKEN } from "./config.js";
import { Octokit } from "https://esm.sh/@octokit/core";

const octokit = new Octokit({ auth: `${GITHUB_TOKEN}` });

const main = document.getElementById("main");

// SEARCH

const searchSection = main.querySelector(".sec-search");
const searchInput = searchSection.querySelector(".search-input");

// RESULT

const resultSection = main.querySelector(".sec-result");

// USER CARD

const userCard = resultSection.querySelector(".user-card");

// 검색 기능

let searchValue;

const handleSearchInput = (e) => {
  searchValue = e.target.value;
  console.log(searchValue);
};

searchInput.addEventListener("keydown", handleSearchInput);

// const url = "https://api.github.com";

if (!GITHUB_TOKEN) {
  throw new Error("git hub token Error.");
}
const response = await octokit.request(`GET /users/${searchValue}`, {
  username: "USERNAME",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

console.log(response);
