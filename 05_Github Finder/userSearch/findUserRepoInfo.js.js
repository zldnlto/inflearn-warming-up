import { Octokit } from "https://esm.sh/@octokit/core";
import { GITHUB_TOKEN } from "../config.js";
export const octokit = new Octokit({ auth: `${GITHUB_TOKEN}` });

export async function findUserRepoInfo(userId) {
  try {
    const response = await octokit.request(`GET /users/${userId}/repos`, {
      username: "USERNAME",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const repoData = response.data;
    repoData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    return repoData.splice(0, 5);
  } catch (error) {
    throw error;
  }
}
