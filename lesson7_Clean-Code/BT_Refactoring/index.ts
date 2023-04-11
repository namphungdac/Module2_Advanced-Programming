import {TennisGame} from "./TennisGame";

let game = new TennisGame();
game.getScore('player1', 'player2', 7, 4);
console.log(game.score)
