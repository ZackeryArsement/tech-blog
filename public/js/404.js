var goBackBtn = document.querySelector("#goBack");

// will link to result page once its created
var homePage = "./";

goBackBtn.addEventListener("click", function () {
  document.location.replace(homePage);
});
