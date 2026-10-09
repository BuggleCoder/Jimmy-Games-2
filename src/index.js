const themes = ["dark", "light"];
let theme = themes[0];

const $container = $("#container");
const $heading = $("#heading");
const $gameBtn = $("#gameBtn");
const $appBtn = $("#appBtn");

let active = "nothing";

$heading.text("Welcome to Jimmy Games");
$gameBtn.on("click", function () {
  active = "games";
});
