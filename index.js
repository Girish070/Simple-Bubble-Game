let clutter = "";
let pbtm = document.querySelector("#pbtm");
let scoreVal = document.querySelector("#scoreVal");
let timeVal = document.querySelector("#timeVal");
let hitVal = document.querySelector("#hitVal");
let hitRn;
let score = 0;

function increaseScore() {
  score += 10;
  scoreVal.textContent = score;
}

pbtm.addEventListener("click", function (dts) {
  let clickNum = Number(dts.target.textContent);
  if (clickNum === hitRn) {
    increaseScore();
    makeBubble();
    getnewHit();
  }
});

const makeBubble = () => {
  for (let i = 0; i <= 188; i++) {
    let num = Math.floor(Math.random() * 50);
    clutter += `<div class="bubble">${num}</div>`;
  }
  pbtm.innerHTML = clutter;
};

function getnewHit() {
  hitRn = Math.floor(Math.random() * 50);
  hitVal.innerHTML = hitRn;
}

let timer = 60;
const runTimer = () => {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      timeVal.innerHTML = timer;
    } else {
      pbtm.innerHTML = `<h1>Game Over <br> Your Score: ${score}</h1>`;
      clearInterval(timer);
    }
  }, 1000);
};

getnewHit();
makeBubble();
runTimer();
