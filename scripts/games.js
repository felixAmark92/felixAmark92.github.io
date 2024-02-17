import { resizeImageUrl } from "./myLib.js";
import { getGame } from "./getGame.js";

import { addNavbar } from "../components/navbar.js";
import cartListItem from "../components/cartListItem.js";

addNavbar(document);

const cards = document.getElementById("cards");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");
const genresList = document.getElementById("genre-menu");
const modal = document.getElementById("game-modal");
const closeModal = document.getElementById("close-modal");
const purchaseGameBtn = document.getElementById("purchase-game-btn");
const cartMenu = document.getElementById("cart-menu");
const gameImage = document.getElementById("game-modal-image");
const description = document.getElementById("game-modal-text");
const gameModalTitle = document.getElementById("game-modal-title");
const gameModalRequirements = document.getElementById(
  "game-modal-requirements"
);
const genreLable = document.getElementById("genre-label");

closeModal.addEventListener("click", () => {
  modal.classList.remove("visible");
  modal.classList.add("invisible");
  gameImage.src = "";
});

const urlParams = new URLSearchParams(window.location.search);
const pageId = urlParams.get("page");
const genreId = urlParams.get("genres");

const genres = [
  { id: 4, name: "Action" },
  { id: 51, name: "Indie" },
  { id: 3, name: "Adventure" },
  { id: 5, name: "RPG" },
  { id: 10, name: "Strategy" },
  { id: 2, name: "Shooter" },
  { id: 40, name: "Casual" },
  { id: 14, name: "Casual" },
  { id: 7, name: "Puzzle" },
  { id: 11, name: "Arcade" },
  { id: 83, name: "Platformer" },
  { id: 1, name: "Racing" },
  { id: 59, name: "Massively Multiplayer" },
  { id: 15, name: "Sports" },
  { id: 6, name: "Fighting" },
  { id: 19, name: "Family" },
  { id: 28, name: "Board Games" },
  { id: 34, name: "Educational" },
  { id: 17, name: "Card" },
];

const cart = [];

genres.forEach((genre) => {
  genresList.innerHTML += `
  <li><a href=games.html?genres=${genre.id}>${genre.name}</a></li>
  `;
});

let currentGenre = genres.find((e) => {
  return e.id == genreId;
});
console.log(currentGenre);
if (currentGenre !== undefined) {
  genreLable.innerText = currentGenre.name;
}

let page = pageId === null ? 1 : pageId;
let genre = genreId === null ? "" : `&genres=${genreId}`;

nextButton.href = `games.html?page=${parseInt(page) + 1}${genre}`;

previousButton.href = `games.html?page=${
  page === 1 ? page : parseInt(page) - 1
}${genre}`;

let getGames = async () => {
  const url = `https://api.rawg.io/api/games?key=1a7c4f25b60c4598b51bb50a1bfc1cd5${genre}&page=${page}&page_size=50`;
  const options = {
    method: "GET",
  };
  try {
    await fetch(url, options)
      .then((r) => r.json())
      .then((data) => {
        console.log("Games:", data);

        data.results.forEach((game) => {
          let platform = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-windows" viewBox="0 0 16 16">
                         <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
                         </svg>`;

          let thumbnail = resizeImageUrl(game.background_image);

          const card = document.createElement("div");
          card.classList.add("game-card");

          card.onclick = async () => {
            let selectedGame = await getGame(game.id);
            if (typeof selectedGame !== "error") {
              modal.classList.remove("invisible");
              modal.classList.add("visible");
              purchaseGameBtn.onclick = () => {
                cart.push(selectedGame);

                const item = cartListItem(game, cartMenu);

                cartMenu.appendChild(item);
              };

              gameImage.src = selectedGame.background_image;
              gameImage.alt = `image of ${selectedGame.name}`;
              gameModalTitle.innerText = selectedGame.name;
              description.innerHTML = selectedGame.description;
              let result = selectedGame.platforms.find((e) => {
                return e.platform.id == 4;
              });
              if (result != null) {
                gameModalRequirements.innerText = result.requirements.minimum;
              } else {
                gameModalRequirements.innerText = "-";
              }
            }

            console.log(selectedGame);
          };

          card.innerHTML = `  
          <div class="game-card-header">
            <div class=" d-flex justify-content-between">
              <h4>${game.name}</h4>
              ${platform}
            </div>
            <h5 class="text-secondary mb-0">${game.released}</h5>
          </div>

          </div>
          <div class="game-card-main">
            <div class="game-card-image-box">
              <img
                class="game-card-image-box-img"
                src="${thumbnail}"
                alt="no image"
              />
            </div>
          `;
          cards.append(card);
        });
      });
  } catch (error) {
    console.error("Error!", error);
  }
};
getGames();
