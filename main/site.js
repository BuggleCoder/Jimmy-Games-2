let launchBtn = $("#launch");
let header = $("#header");
let access = $("#accessCode");

launchBtn.on("click", function () {
  if (access.val() == "BobAndJimmy") {
    header.text("Welcome");
  }
});
