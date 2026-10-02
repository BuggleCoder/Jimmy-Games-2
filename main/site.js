let launchBtn = $("#launch");
let header = $("#header");
let acess = $("#acessCode");

launchBtn.on("click", function () {
  if (acess.val() == "123Bob") {
    header.text("Welcome");
  }
});
