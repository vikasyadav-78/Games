let boxs = document.querySelectorAll(".box"); // select class box.
let main_container = document.querySelector(".main-container"); //select class main-container.
let newbtn = document.querySelector(".newGame"); //select btn class for the winning game and play new game for click
let resetBtn = document.querySelector("#reset-btn"); //selet btn id for the click and game reset .
let winner_msg = document.querySelector("#winner-msg");//selet id for the show who is winner.

let trunO = true; // defflut set value

const winPatterns = [
    [0, 1, 2], // this is the winning pattern.
    [3, 4, 5], // this is the winning pattern.
    [6, 7, 8], // this is the winning pattern.
    [0, 3, 6], // this is the winning pattern.
    [1, 4, 7], // this is the winning pattern.
    [2, 5, 8], // this is the winning pattern.
    [0, 4, 8], // this is the winning pattern.
    [2, 4, 6] // this is the winning pattern.
]
let count = 0; // counting the values for winPaterns

// boxs.forEach(box => {
//     box.addEventListener("click", () => {
//         if (trunO) {
//             box.innerText = "O";
//             box.style.backgroundColor = "yellow"
//             trunO = false;


//         } else {
//             box.innerText = "X";
//             box.style.backgroundColor = "green"
//             trunO = true;

//         }
//         box.disabled = true;
//     })
// });

const showWinner = (winner) => { // function for show who is winner.
    winner_msg.innerText = `Congratulations 🎉🎊🎉🎊, Winner is ${winner}`
    main_container.classList.remove("hide")
}


const checkWinner = () => { // check the winPatterns 
    for (let pattern of winPatterns) {
        let patt1Val = boxs[pattern[0]].innerText;
        let patt2Val = boxs[pattern[1]].innerText;
        let patt3Val = boxs[pattern[2]].innerText;

        if (patt1Val != "" && patt2Val != "" && patt3Val != "") {
            if (patt1Val === patt2Val && patt2Val === patt3Val) {
                showWinner(patt1Val)
                disableBox();
                return;
            }
        }
    }

}

const disableBox = () => { // one time click and the button was disable for the next time not click.
    boxs.forEach(box => box.disabled = true)
}

let resetGame = () => { // click reset button and the game is reset .
    boxs.forEach(box => { // the styling and cherets is clear.
        box.innerText = "";
        box.style.backgroundColor = "";
        box.disabled = false
    });
    trunO = false;
    main_container.classList.add("hide");
    winner_msg.innerText = "";

};
boxs.forEach(box => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = trunO ? "O" : "X"; // click and give output O and X one by one time.
            box.style.backgroundColor = trunO ? "yellow" : "green" // then click change backgroundColor.
            box.disabled = true;//click and button is disabled.
            count++;//incariment counting.
            trunO = !trunO;
            checkWinner();
            if (count === 9 && !checkWinner()) { // aagr koi bhi player win nhi hota hai to drow game .
                gameDrow();
            }
        }
    })
});

const gameDrow = () => { // Drow game for then not win game .
    winner_msg.innerText = `Game was Draw.`;
    main_container.classList.remove("hide");
    disableBoxs();
}

const disableBoxs = () => {
    for (const box of boxs) {
        box.disabled = true;
    }
}

resetBtn.addEventListener("click", resetGame) // click and reset Game.
newbtn.addEventListener("click", resetGame)// click and Start New Game.