console.log("main.js loaded");

/* MODEL */

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", // 0, 1, 2
  "", "", "", // 3, 4, 5
  "", "", "", // 6, 7, 8
];

// START THE GAME
//    inputs:
//      current player, board, won
//    outputs:
//      board is empty

var startGame = function() {
  won = false;
  currentPlayer = "X";
  board = [
  "", "", "",
  "", "", "",
  "", "", "",
  ];
};

// PLAYER MOVE (CHANGES TURN)
//    inputs:
//      whose turn it is
//      what cell
//    outcomes:
//      fill cell with player
//      calculate if winner
//      turn changes

var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
// currentPlayer = (currentPlayer === "X" ? "O" : "X");
  }
};
// WIN THE GAME
//    inputs:
//      board
//    outcomes:
//      true or false
var gameWon = function() {
  return (
    (board[0] === board[1]) && (board[0] === board[2]) && (board[0] !== '') ||
    (board[3] === board[4]) && (board[3] === board[5]) && (board[3] !== '') ||
    (board[6] === board[7]) && (board[6] === board[8]) && (board[6] !== '')
    )
};

/* RENDER OUR VIEW */

var render = function() {
  var turnEl = document.getElementById("turn")
  turnEl.textContent = "Turn: " + currentPlayer;

  var winnerEl = document.getElementById("winner")
  if (!won) {
    winnerEl.textContent = "Winner: ?"
  } else {
    winnerEl.textContent = "Winner " + currentPlayer;
  };

// var cellEl = document.getElementById("cell0");
// cell0El.textContent = board[0];

  document.getElementById("cell0").textContent = board[0];
  document.getElementById("cell1").textContent = board[1];
  document.getElementById("cell2").textContent = board[2];
  document.getElementById("cell3").textContent = board[3];
  document.getElementById("cell4").textContent = board[4];
  document.getElementById("cell5").textContent = board[5];
  document.getElementById("cell6").textContent = board[6];
  document.getElementById("cell7").textContent = board[7];
  document.getElementById("cell8").textContent = board[8];
};


/* USER INTERACTION */

document.getElementById("restart")
        .addEventListener("click", function(event) {
          startGame();
          render();
        });

document.getElementById("board")
        .addEventListener("click", function(event) {
            var cellEl = event.target;
            var cellIndex = cellEl.id.slice(-1); //id.substring()
            move(cellIndex);
            render();
});
