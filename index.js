let score = 0;

function getBout() {
  let num = Math.floor(Math.random() * (array.length - 1));

  return array[num];
}

function newGame() {
  document.querySelector("#score").style.display = "block";
  let container = document.querySelector("#container");
  container.innerHTML = "";

  let obj = getBout();

  container.textContent = obj.eventDate;

  let winner = document.querySelector("#winner");
  winner.textContent = obj.winner;

  let loser = document.querySelector("#loser");
  loser.textContent = obj.loser;

  let n = Math.floor(Math.random() * 9);
  if (n % 2 === 0) {
    let fighters = document.querySelector("#fighters");
    if (fighters.style["flex-direction"] === "row") {
      fighters.style["flex-direction"] = "row-reverse";
    } else {
      fighters.style["flex-direction"] = "row";
    }
  }
}

function plus() {
  score++;
  document.querySelector("#score").textContent = score;
  newGame();
  document.querySelector("#right").style.display = "block";
  setTimeout(() => {
    document.querySelector("#right").style.display = "none";
  }, 200);
}
function minus() {
  score--;
  document.querySelector("#score").textContent = score;
  newGame();
  document.querySelector("#wrong").style.display = "block";
  setTimeout(() => {
    document.querySelector("#wrong").style.display = "none";
  }, 200);
}
