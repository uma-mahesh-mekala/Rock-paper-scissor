let score = JSON.parse(localStorage.getItem("score"));
if (score === null) {
  score = {
    Wins: 0,
    Losses: 0,
    Tie: 0,
  };
}
let computermove = "";
let result = "";
playermove = function (obj) {
  if (obj === "Scissor") {
    fcomputermove();
    if (computermove === "Scissor") {
      result = "It got Tie";
    } else if (computermove === "Rock") {
      result = "You Lose";
    } else {
      result = "You win";
    }
  } else if (obj === "Paper") {
    fcomputermove();
    if (computermove === "Paper") {
      result = "It got Tie";
    } else if (computermove === "Scissor") {
      result = "You Lose";
    } else {
      result = "You win";
    }
  } else {
    fcomputermove();
    if (computermove === "Rock") {
      result = "It got Tie";
    } else if (computermove === "Paper") {
      result = "You Lose";
    } else {
      result = "You win";
    }
  }
  if (result === "It got Tie") {
    score.Tie += 1;
  } else if (result === "You Lose") {
    score.Losses += 1;
  } else {
    score.Wins += 1;
  }
  updatescore1();
  updatescore2(obj);
  updatescore3();
  localStorage.setItem("score", JSON.stringify(score));
};
function fcomputermove() {
  var list = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  // if (randomNumber >= 0 && randomNumber < 1 / 3) {
  //   computermove = "Rock";
  // } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  //   computermove = "Paper";
  // } else {
  //   computermove = "Scissor";
  // }
  computermove=list[randomNumber];
  return computermove;
}
updatescore1 = function () {
  document.querySelector(".fromalert1").innerHTML = `${result}`;
};
updatescore2 = function (obj) {
  document.querySelector(
    ".fromalert2"
  ).innerHTML = `You picked ${obj} and computer picked ${computermove}`;
};
updatescore3 = function () {
  document.querySelector(
    ".fromalert3"
  ).innerHTML = `Wins:${score.Wins} Losses:${score.Losses} Tie:${score.Tie}`;
};
