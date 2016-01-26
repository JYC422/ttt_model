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
var gameWon = function() {};
