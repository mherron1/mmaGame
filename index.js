let score = 0;

function getBout() {
  let num = Math.floor(Math.random() * (array.length - 1));

  return array[num];
}

function newGame() {
  document.querySelector("#instructions").style.display = "none";
  document.querySelector("#lose").style.display = "none";
  document.querySelector("#win").style.display = "none";
  document.querySelector("#container").style.display = "block";
  document.querySelector("#score").textContent = score;
  document.querySelector("#fighters").style.visibility = "visible";
  document.querySelector("#score").style.display = "block";
  document.querySelector("#button").style.display = "none";
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
  let right = document.querySelector("#right");
  right.style.display = "block";
  setTimeout(() => {
    right.style.display = "none";
  }, 400);
  document.querySelector("#score").textContent = score;
  newGame();
  if (score > 9) {
    document.querySelector("#score").style.display = "none";
    document.querySelector("#fighters").style.visibility = "hidden";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#button").style.display = "block";
    score = 0;
    document.querySelector("#win").style.display = "block";
  }
}
function minus() {
  score--;
  score--;
  let wrong = document.querySelector("#wrong");
  wrong.style.display = "block";
  setTimeout(() => {
    wrong.style.display = "none";
  }, 400);

  document.querySelector("#score").textContent = score;
  newGame();
  if (score < -9) {
    document.querySelector("#score").style.display = "none";
    document.querySelector("#fighters").style.visibility = "hidden";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#button").style.display = "block";
    score = 0;
    document.querySelector("#lose").style.display = "block";
  }
}
