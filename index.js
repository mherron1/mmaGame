if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service_worker.js")
    .then((reg) => console.log())
    .catch((err) => console.log());
}

let score = 0;
let moves = 0;
let correct = 0;
let percentage = "";

winText = [
  "Hey Dana! sixty g's baby!!",
  "I'm not surprised M***** F*****!",
  "Conceive, believe, achieve",
  "You are Michael Jordan-esque in your UFC knowledge!",
  "I havee very heespec fo you",
  "I luuuuh you!!!!",
];

loseText = [
  "You absolutely suck.",
  "I am not impressed by your performance.",
  "Your finger was a balloooon!",
  "This number one bullshit.",
  "Hey guys! get a load of this casual over here!",
];

function getBout() {
  let num = Math.floor(Math.random() * (bouts.length - 1));

  return bouts[num];
}

function newGame() {
  let container = document.querySelector("#container");
  container.innerHTML = "";

  let obj = getBout();

  if (obj.eventDate === "") {
    obj.eventDate = "No Date";
  }

  container.textContent = obj.eventDate;

  let winner = document.querySelector("#winner");
  winner.textContent = obj.winner;

  let loser = document.querySelector("#loser");
  loser.textContent = obj.loser;
  document.querySelector("#fighters").style.display = "none";

  let n = Math.floor(Math.random() * 9);
  if (n % 2 === 0) {
    let fighters = document.querySelector("#fighters");
    if (fighters.style["flex-direction"] === "row") {
      fighters.style["flex-direction"] = "row-reverse";
    } else {
      fighters.style["flex-direction"] = "row";
    }
  }

  document.querySelector("#lose").style.display = "none";
  document.querySelector("#win").style.display = "none";
  document.querySelector("#container").style.display = "block";
  document.querySelector("#score").textContent = score;
  document.querySelector("#fighters").style.visibility = "visible";
  document.querySelector("#score").style.display = "block";
  document.querySelector("#button").style.display = "none";
  setTimeout(() => {
    document.querySelector("#fighters").style.display = "flex";
  }, 300);
}

function plus() {
  correct++;
  moves++;
  let right = document.querySelector("#right");

  score++;
  right.style.display = "block";
  setTimeout(() => {
    right.style.display = "none";
  }, 250);
  document.querySelector("#score").textContent = score;
  newGame();
  var e = document.getElementById("mode");
  var strUser = e.value;

  if (strUser === "Expert") {
    if (score > 9) {
      document.querySelector("#score").style.display = "none";
      document.querySelector("#fighters").style.visibility = "hidden";
      document.querySelector("#container").style.display = "none";
      document.querySelector("#button").style.display = "block";
      percentage = parseInt((correct / moves) * 100);

      document.querySelector("#win").innerHTML = `
      <div>Score: <span class="green">+${score}</span></div><div>Accurracy: <span class="green">${percentage}% (${correct}/${moves})</span></div>
      <br>
      <div>${winText[Math.floor(Math.random() * 6)]}<div>
      <a href="https://twitter.com/intent/tweet?url=https://www.casual-detector.com/&text=">Share</a> `;
      document.querySelector("#win").style.display = "block";
      document.querySelector("#mode").style.visibility = "visible";
      score = 0;
      correct = 0;
      moves = 0;
    }
  } else {
    if (score > 4) {
      document.querySelector("#score").style.display = "none";
      document.querySelector("#fighters").style.visibility = "hidden";
      document.querySelector("#container").style.display = "none";
      document.querySelector("#button").style.display = "block";
      percentage = parseInt((correct / moves) * 100);
      document.querySelector("#win").innerHTML = `
      <div> Score: <span class="green">+${score}</span></div><div>  Accurracy: <span class="green">${percentage}% (${correct}/${moves})</span></div>
      <br>
      <div>${winText[Math.floor(Math.random() * 6)]}<div>
      <a href="https://twitter.com/intent/tweet?url=https://www.casual-detector.com/&text=">Share</a> `;
      document.querySelector("#win").style.display = "block";
      document.querySelector("#mode").style.visibility = "visible";
      score = 0;
      correct = 0;
      moves = 0;
    }
  }
}
function minus() {
  moves++;
  let wrong = document.querySelector("#wrong");
  var e = document.getElementById("mode");
  var strUser = e.value;

  if (strUser === "Easy") {
    score--;
    wrong.textContent = "-1";
  } else if (strUser === "Regular") {
    score--;
    score--;
    wrong.textContent = "-2";
  } else {
    score--;
    score--;
    score--;
    wrong.textContent = "-3";
  }

  wrong.style.display = "block";
  setTimeout(() => {
    wrong.style.display = "none";
  }, 250);

  document.querySelector("#score").textContent = score;
  newGame();
  if (score < -4) {
    document.querySelector("#score").style.display = "none";
    document.querySelector("#fighters").style.visibility = "hidden";
    document.querySelector("#container").style.display = "none";
    document.querySelector("#button").style.display = "block";

    percentage = parseInt((correct / moves) * 100);
    document.querySelector("#lose").innerHTML = `
    <div> Score: <span class="red">${score}</span></div><div> Accurracy: <span class="red"> ${percentage}% (${correct}/${moves})</span></div>
    <br>
    <div>${loseText[Math.floor(Math.random() * 5)]}<div>
    <a href="https://twitter.com/intent/tweet?url=https://www.casual-detector.com/&text=">Share</a> `;
    document.querySelector("#lose").style.display = "block";
    document.querySelector("#mode").style.visibility = "visible";
    correct = 0;
    moves = 0;
    score = 0;
  }
}

function setGameLevel() {
  var e = document.getElementById("mode");
  var strUser = e.value;

  let inst = document.querySelector("#instructions");
  if (strUser === "Expert") {
    inst.innerHTML = `
      <div>Select fight winner</div>
      <div>Incorrect = -3</div>
      <div>+10 to win</div>
      <div>-5 = confirmed casual</div>
    `;
  } else if (strUser === "Regular") {
    inst.innerHTML = `
    <div>Select fight winner</div>
    <div>Incorrect = -2</div>
    <div>+5 to win</div>
    <div>-5 = confirmed casual</div>
  `;
  } else {
    inst.innerHTML = `
    <div>Select fight winner</div>
    <div>Incorrect = -1</div>
    <div>+5 to win</div>
    <div>-5 = confirmed casual</div>
  `;
  }
  score = 0;
  correct = 0;
  moves = 0;
  document.querySelector("#score").style.display = "none";
  document.querySelector("#fighters").style.visibility = "hidden";
  document.querySelector("#container").style.display = "none";
  document.querySelector("#button").style.display = "block";
}
