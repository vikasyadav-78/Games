// let boxes = document.getElementsByClassName("box");
let boxes = document.querySelectorAll(".box");
let reset_btn = document.getElementById("#reset-btn");
let msgBtn = document.querySelectorAll(".msg-btn");
let newGame = document.querySelector("#new-btn");
let winner = document.querySelector(".winner");

let turnO = true;

const winnerpartten = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Click")
        if (turnO) {
            box.innerText = "O"
            turnO = false;

        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWinner()

    })
})
const showWinner = (winners) => {
    winner.innerText = `Congratulations, Winner is ${winners}`;
    msgBtn.classList.remove("hide")
}
const checkWinner = () => {
    for (let pattern of winnerpartten) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;

        if (pos1Value != "" && pos2Value != "" && pos3Value != "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                console.log(pos1Value)
                showWinner(pos1Value)
                return true;
            }
        }
    }
}

reset_btn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);