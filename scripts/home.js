import { addNavbar } from "../components/navbar.js";

let loadBodyImage = async () => {
  document.body.classList.add("home-page");
};

addNavbar(document);
loadBodyImage();
