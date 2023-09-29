let box = document.querySelectorAll(".dropBox");
let popUp = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let msg = document.getElementById("message");
let initial = document.querySelector("body").innerHTML;

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 7],
  [2, 4, 6],
];

let count = 0;

const disableButtons = () => {
  box.forEach((element) => (element.disabled = true));
  popUp.classList.remove("hide");
};

const enableButtons = () => {
  box.forEach((element) => {
    element.textContent = "";
    element.disabled = false;
  });
  popUp.classList.add("hide");
};
console.log(enableButtons);
const winFunction = (letter) => {
  disableButtons();
  if (letter == "x") {
    msg.textContent = "'X' Wins";
  } else {
    msg.textContent = "'O' Wins";
  }
};

const drawFunction = () => {
  disableButtons();
  msg.textContent = "It's a Draw";
};

//win logic
const winChecker = () => {
  //loop through all win pattern
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      box[i[0]].textContent,
      box[i[1]].textContent,
      box[i[2]].textContent,
    ];

    if (element1 != "" && (element2 != "") & (element3 != ""));
    {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

box.forEach((element) => {
  count += 1;
  if (count == 9) {
    drawFunction();
  }

  //check for win
  winChecker();
});

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
  count = 0;
  document.querySelector("body").innerHTML = initial;
});

// window.onload = enableButtons;
