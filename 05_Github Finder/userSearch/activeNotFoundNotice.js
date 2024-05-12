const searchTitle = document.querySelector(".search-title");

export const activeNotFoundNotice = (active) => {
  const existingNotice = document.querySelector(".notice");
  if (existingNotice) {
    existingNotice.remove();
  }

  const NOTICE_MSG = `<p class="notice ${active}">User not found!</p>`;
  searchTitle.insertAdjacentHTML("afterend", NOTICE_MSG);
};
