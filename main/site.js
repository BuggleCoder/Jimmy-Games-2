let launchBtn = $("#launch");
let header = $("#header");
let access = $("#accessCode");
let page = $("#pageContent");

launchBtn.on("click", function () {
  if (access.val() == "BobAndJimmy") {
    header.text("Welcome to Jimmy Games");
  }
});
