let cartListItem = (game, cartMenu) => {
  const listItem = document.createElement("li");

  const gameDiv = document.createElement("div");
  gameDiv.classList.add("d-flex");
  gameDiv.classList.add("justify-content-between");
  gameDiv.classList.add("align-items-center");
  gameDiv.classList.add("p-0");

  const gameName = document.createElement("nobr");
  gameName.innerText = game.name;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn");
  removeBtn.classList.add("btn-danger");
  removeBtn.classList.add("m-1");
  removeBtn.innerText = "X";

  removeBtn.addEventListener("click", () => {
    cartMenu.removeChild(listItem);
  });

  gameDiv.appendChild(gameName);
  gameDiv.appendChild(removeBtn);

  listItem.appendChild(gameDiv);
  listItem.accessKey = game.id;

  return listItem;
};

export default cartListItem;
