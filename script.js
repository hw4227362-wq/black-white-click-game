const game = document.querySelector("#game");
const hint = document.querySelector("#hint");

function switchScreen() {
  const isWhite = document.body.classList.toggle("is-white");
  hint.textContent = isWhite
    ? "现在是白色屏幕，左键点击切回黑色"
    : "现在是黑色屏幕，左键点击切换颜色";
}

game.addEventListener("click", switchScreen);

game.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    switchScreen();
  }
});

game.tabIndex = 0;
