const MenuList = [
  { name: "All", id: "All" },
  { name: "🍳 Breakfast", id: "Breakfast" },
  { name: "🍔 Lunch", id: "Lunch" },
  { name: "🥤 Shakes", id: "Shakes" },
  { name: "🥘 Dinner", id: "Diner" },
];

const fetchData = async () => {
  const res = await fetch("./data.json");
  if (!res.ok) {
    throw new Error("error");
  }
  return res.json();
};

const btnList = document.querySelector(".filter-btn-list");

// const li = document.createElement("li");
// li.className = "filter-btn";
// li.innerText = "🍳 Breakfast";
// returnbtnList.appendChild(li);

const addMenuItem = (content) => {
  const newElement = document.createElement("li");
  newElement.className = "filter-btn";
  newElement.id = content.id;
  if (content.name) {
    newElement.innerText = content.name;
  }
  btnList.appendChild(newElement);
  return newElement;
};

const handleFilterBtn = (e) => {
  console.log("이벤트", e.target.id);
  //filter 로직 구현
};

MenuList.forEach((menuItem) => {
  addMenuItem(menuItem);

  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
  console.log("필터버튼", filterBtns);
  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", (e) => handleFilterBtn(e));
  });
});

// 이렇게 돌 것 없이 MenuItem 생성할 때 이벤트 리스너 달면 되는 것 아닌가?

fetchData()
  .then((res) => {
    console.log(res.foods);
    return res.foods;
  })
  .then((data) => {
    console.log(data);
    let newChild = "";
    data.forEach((v) => {
      const menuItem = `<li class="card">
          <figure class="card-content">
            <img
              src="./assets/${v.image}"
              alt="${v.name}"
              class="card-cover"
            />
            <figcaption class="card-text">
              <div class="card-title">
                <strong>${v.name}</strong>
                <div class="price">${v.price}원</div>
              </div>
              <span class="hr"></span>
              <p class="card-info">
              ${v.description}
              </p>
            </figcaption>
          </figure>
        </li>`;
      newChild += menuItem;
    });
    return newChild;
  })
  .then((newChild) => {
    const cardList = document.querySelector(".cards");
    cardList.innerHTML = newChild;
  })
  .catch((error) => {
    console.error("data fetching error", error);
  });
