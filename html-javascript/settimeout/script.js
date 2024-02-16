const btn = document.getElementById("btn");
const btnDelayed = document.querySelector("#btn-delayed");
const h2El = document.querySelector("h2");
const btnChangeFont = document.getElementById("btn-change-font");

function delayedClick() {
  setTimeout(function () {
    alert("Delayed Clicked");
  }, 2000);
}

function onChangeFont() {
  setTimeout(() => {
    h2El.style.fontSize = "100px";
  }, 3000);
}

btn.addEventListener("click", () => {
  alert("NO DELAY CLICK");
});
btnDelayed.addEventListener("click", delayedClick);
btnChangeFont.addEventListener("click", onChangeFont);
