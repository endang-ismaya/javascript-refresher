const btnStop = document.getElementById("stop");
const btnStart = document.getElementById("start");
const h2seconds = document.getElementById("seconds");

const btnRunEffect = document.getElementById("effect");
const btnStopEffect = document.getElementById("stop-effect");
const h2backforth = document.getElementById("back-forth");

let intervalSeconds = 0;
let seconds = 0;

let degrees = 0;
let rotateInteval = 0;

function onStop() {
  clearInterval(intervalSeconds);
}

function onStart() {
  onStop();
  intervalSeconds = setInterval(() => {
    seconds += 1;
    h2seconds.textContent = `Seconds: ${seconds}`;
  }, 1000);
}

function onStopEffect() {
  clearInterval(rotateInteval);
}
function onEffect() {
  onStopEffect();
  rotateInteval = setInterval(() => {
    degrees += 1;
    h2backforth.style.transform = `rotate3D(1, 1, 1, ${degrees}deg)`;
  }, 5);
}

btnStart.addEventListener("click", onStart);
btnStop.addEventListener("click", onStop);

btnRunEffect.addEventListener("click", onEffect);
btnStopEffect.addEventListener("click", onStopEffect);
