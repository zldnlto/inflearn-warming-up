const userCard = document.querySelector(".user-card");

const userProfileSection = document.createElement("section");
userProfileSection.className = "section user-profile";

const userProfileTitle = document.createElement("h4");
userProfileTitle.className = "ir";
userProfileTitle.innerText = "유저 기본 정보";
userProfileSection.appendChild(userProfileTitle);

const userProfileImgBox = document.createElement("div");
userProfileImgBox.className = "user-profile-img";

const userInfoBox = document.createElement("div");
userInfoBox.className = "user-info";
userProfileSection.append(userProfileImgBox, userInfoBox);

export const createUserProfileImg = (userData) => {
  userProfileImgBox.innerHTML = `
    <img src=${userData.avatar_url} alt="유저 프로필 사진" />
    <a href="http://github.com/${userData.login}" target="_blank" class="profile-link">View Profile</a>

  `;
};

export function displayUserInfo(userData) {
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
  userCard.append(userProfileSection);
}

const latestReposSection = document.createElement("section");
latestReposSection.className = "section latest-repos";

const latestReposTitle = document.createElement("h4");
latestReposTitle.className = "latest-repos-title";
latestReposTitle.innerText = "Latest Repos";
latestReposSection.appendChild(latestReposTitle);

const latestRepoItems = document.createElement("ul");
latestRepoItems.className = "repo-items";

export function displayUserRepos(latestRepoArr) {
  if (!userProfileSection) {
    return;
  }
  let repoItems = "";

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

  latestRepoItems.innerHTML = repoItems;

  latestReposSection.appendChild(latestRepoItems);
  userCard.appendChild(latestReposSection);
}
