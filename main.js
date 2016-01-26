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

};
