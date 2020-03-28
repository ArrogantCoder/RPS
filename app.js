//Cache the dom, so you do not have to access these again and again later.
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function createCompChoice () {
  const choices = ['rock', 'paper', 'scissors'];
  const randNo = Math.floor(Math.random() * 3);
  return choices[randNo];
}

function capitalizeWord(word) {
  if (word === "rock") {return "Rock"};
  if (word === "paper") {return "Paper"};
  return "Scissors";
}

function userWin(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = capitalizeWord(userChoice) + " beats " + capitalizeWord(compChoice) + ". You won!";
}

function userLose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  userScore_span.innerHTML = userScore;
}

function userTie() {

}

function game(userChoice) {
  const compChoice = createCompChoice();
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      console.log("User wins!");
      userWin(userChoice, compChoice);
      break;
    case "scissorsrock":
    case "rockpaper":
    case "paperscissors":
      console.log("User lost!");
      userLose(userChoice, compChoice);
      break;
    default:
      console.log("Tie!");
  }


}

function main() {
  //Add listener when clicking on rock symbol.
  rock_div.addEventListener('click', function() {
    game("rock");
  })

  //Add listener when clicking on paper symbol.
  paper_div.addEventListener('click', function() {
  game("paper");
  })

  //Add listener when clicking on scissors symbol.
  scissors_div.addEventListener('click', function() {
  game("scissors");
  })

}

main();
