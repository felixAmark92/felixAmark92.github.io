const navbar = `
<nav class="navbar navbar-expand-md navbar-dark fixed-top top-0 pe-4 ps-4">
  <a class="navbar-brand bebas-neue-regular" href="#">Awesome games</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarsExample04"
    aria-controls="navbarsExample04"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse">
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="home.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="games.html">Games</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
    </ul>
  </div>
  <div class="dropdown">
  <button
    aria-label="Cart button"
    class="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  fill="#FFFFFF"
  class="bi bi-cart"
  viewBox="0 0 16 16"
>
  <path
    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
  />
</svg>
  </button>
  <ul id="cart-menu" class="dropdown-menu"></ul>
  
</nav>


`;

export const addNavbar = (document) => {
  const test = document.createElement("div");
  test.class;

  test.innerHTML = navbar;

  document.body.insertBefore(test, document.body.firstElementChild);
};
