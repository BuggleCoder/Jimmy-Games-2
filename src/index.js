const themes = ["dark", "light"];
let theme = themes[0];
const container = document.getElementById("container");
const heading = document.getElementById("heading");

if (themes[1]) {
}

function loadContent() {
  container.innerHTML += `<div id="appsContainer"></div>`;
  container.innerHTML += `<div id="gamesContainer"></div>`;
  if (
    document.getElementById("gamesContainer") &&
    document.getElementById("appsContainer")
  ) {
    return true;
  } else {
    return false;
  }
}

if (!loadContent()) {
  container.innerHTML += `<div id="appsContainer"></div>`;
  container.innerHTML += `<div id="gamesContainer"></div>`;
}

heading.textContent = "Welcome to Jimmy Games";
const appsContainer = document.getElementById("appsContainer");
const gamesContainer = document.getElementById("gamesContainer");
