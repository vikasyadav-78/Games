let userScor = 0;
let compScor = 0;

const choiceImg = document.querySelectorAll(".images");
const moves = document.querySelector(".moves");
const userScorPlus = document.querySelector("#you");
const compScorPlus = document.querySelector("#Computer");


const genComputerValue = () => {
    const options = ["rock", "paper", "scissors"];
    const rendomIndex = Math.floor(Math.random() * 3);
    return options[rendomIndex];
}

const gameDraw = () => {
    moves.innerText = "Game was draw !. Play again";
    moves.style.backgroundColor = "#081829";
}

const showWinnere = (userwin) => {
    if (userwin) {
        moves.innerText = "You Win !"
        userScor++;
        userScorPlus.innerText = userScor;
        moves.style.backgroundColor = "green"
    } else {
        moves.innerText = "You Lost !"
        compScor++;
        compScorPlus.innerText = compScor;
        moves.style.backgroundColor = "red"
    }
}


const gamePlay = (userChoice) => {
    const computerChoice = genComputerValue();
    if (userChoice === computerChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinnere(userWin);
    }
}

choiceImg.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        gamePlay(userChoice)
    })
});