let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};
const playGame = (userchoice) => {
  //   console.log(userchoice);
  const compChoice = genCompChoice();
  //   console.log(compChoice);
  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      //comp choice will be paper or scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      //rock or scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};
const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you win");
    msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("Comp Win");
    msg.innerText = `You lose. ${compChoice} beats  Your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  //   console.log("Game was Draw");
  msg.innerText = "Game was Draw , play again.";
  msg.style.backgroundColor = "#081b31";
};

choices.forEach((choice) => {
  choice;
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playGame(userchoice);
  });
});
