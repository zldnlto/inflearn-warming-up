const MenuList = ["All", "🍳 Breakfast", "🍔 Lunch", "🥤 Shakes", "🥘 Dinner"];

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
  if (content) {
    newElement.innerText = content;
  }
  btnList.appendChild(newElement);
  return newElement;
};

MenuList.forEach((menuItem) => {
  addMenuItem(menuItem);
});

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
    console.log(newChild);
    const cardList = document.querySelector(".cards");
    cardList.innerHTML = newChild;
  })
  .catch((error) => {
    console.error("data fetching error", error);
  });
