let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let turnO = true; // Player O starts

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

function checkWin() {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            boxes[a].innerText &&
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            return true;
        }
    }
    return false;
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        box.style.pointerEvents = "none";
        if (checkWin()) {
            alert(`${turnO ? 'O' : 'X'} wins!`);
            return;
        }
        turnO = !turnO;
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    turnO = true;
});
