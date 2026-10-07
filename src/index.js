const themes = ["dark", "light"];
let theme = themes[0];

const $container = $("#container");
const $heading = $("#heading");

function loadContent() {
  $container.append('<div id="appsContainer"></div>');
  $container.append('<div id="gamesContainer"></div>');

  if ($("#gamesContainer").length && $("#appsContainer").length) {
    return true;
  } else {
    return false;
  }
}

if (!loadContent()) {
  $container.append('<div id="appsContainer"></div>');
  $container.append('<div id="gamesContainer"></div>');
}
$heading.text("Welcome to Jimmy Games");

const $appsContainer = $("#appsContainer");
const $gamesContainer = $("#gamesContainer");
