const themes = ["dark", "light"];
let theme = themes[0];

const $container = $("#container");
const $heading = $("#heading");
const $gameBtn = $("#gameBtn");
const $appBtn = $("#appBtn");
const $active = $("#active");

let active = "nothing";

$heading.text("Welcome to Jimmy Games");

$gameBtn.on("click", function () {
  active = "games";
});

$appBtn.on("click", function () {
  active = "apps";
});

function loadGame(gamePath) {
  const url = gamePath;

  $active.load(url, function (response, status, xhr) {
    if (status == "error") {
      console.log(
        "Error loading content: " + xhr.status + " " + xhr.statusText,
      );
    }
  });
}

loadGame(
  "https://raw.githubusercontent.com/ShadowDevLabs/files/refs/heads/main/slope/index.html",
);
