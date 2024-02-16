// How to select dom elements
// document object model

// selecting by id
const containerEl = document.getElementById("container");

// selecting by queryselector
const textInputEl = document.querySelector("input");

// selecting by queryselector
const btnEl = document.querySelector("#btn");

function logText(e) {
  console.log(e.target.value);
}

textInputEl.addEventListener("input", logText);

// click event
function alertOut() {
  alert("Out!, Oh Hi!");
}

btnEl.addEventListener("click", alertOut);

// changing style
textInputEl.style.color = "red";
textInputEl.style.transform = "rotate(30deg)";

containerEl.style.backgroundColor = "salmon";
