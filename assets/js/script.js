document.querySelector(".bi-lightbulb-fill").addEventListener("click", function () {
  const mode = document.body;
  mode.classList.toggle("mode-toggle");

  const lightBulb = document.querySelector(".bi-lightbulb-fill");
  lightBulb.classList.toggle("lightbulb-toggle");
});