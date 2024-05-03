const MenuList = [
  { name: "All", id: "All" },
  { name: "🍳 Breakfast", id: "Breakfast" },
  { name: "🍔 Lunch", id: "Lunch" },
  { name: "🥤 Shakes", id: "Shakes" },
  { name: "🥘 Dinner", id: "Dinner" },
];

const fetchData = async () => {
  const res = await fetch("./data.json");
  if (!res.ok) {
    throw new Error("error");
  }
  const data = await res.json();
  return data.foods;
};

const renderCard = (data) => {
  let newCard = "";
  if (data) {
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
      newCard += menuItem;
    });
  }
  return newCard;
};

let foodData;

const init = () => {
  fetchData()
    .then((res) => {
      foodData = res;
      return res;
    })
    .then(() => {
      const newChild = renderCard(foodData);
      const cardList = document.querySelector(".cards");
      cardList.innerHTML = newChild;
    })
    .catch((error) => {
      console.error("data fetching error", error);
    });
};

init();

const btnList = document.querySelector(".filter-btn-list");

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
  const targetCategory = e.target.id;
  const activeBtn = document.querySelector(`#${targetCategory}`);
  activeBtn.classList.add("active");

  let filteredData;

  if (targetCategory === "All") {
    filteredData = [...foodData];
  } else {
    filteredData = foodData.filter((data) => {
      return data.category === targetCategory;
    });
  }
  const newChild = renderCard(filteredData);
  const cardList = document.querySelector(".cards");
  cardList.innerHTML = newChild;
};

MenuList.forEach((menuItem) => {
  addMenuItem(menuItem);

  const filterBtns = Array.from(document.querySelectorAll(".filter-btn"));
  filterBtns.forEach((filterBtn) => {
    filterBtn.addEventListener("click", (e) => handleFilterBtn(e));
  });
});
