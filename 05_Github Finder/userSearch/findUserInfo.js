import { Octokit } from "https://esm.sh/@octokit/core";
import { GITHUB_TOKEN } from "../config.js";
export const octokit = new Octokit({ auth: `${GITHUB_TOKEN}` });
import { RequestError } from "https://esm.sh/@octokit/request-error";
import { activeNotFoundNotice } from "./activeNotFoundNotice.js";

if (!GITHUB_TOKEN) {
  throw new Error("git hub token Error.");
}

export const findUserInfo = async (userId) => {
  try {
    const response = await octokit.request(`GET /users/${userId}`, {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    activeNotFoundNotice("");
    return response.data;
  } catch (error) {
    console.log(error.status, "하잇");
    if (error.status === 404) {
      activeNotFoundNotice("active");
    } else {
      throw error;
    }
  }
};
