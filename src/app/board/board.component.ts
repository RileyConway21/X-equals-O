import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }


  newGame() {
    // this.squares = Array(9).fill(null);
    this.squares = [null, null, null, null, null, null, null, null, null]
    this.winner = null;
    this.xIsNext = true;
  }


  resetGame() {
    // Step 1- New Game
    this.newGame()
    // Step 2- Modul of game results

    // Step 3- Add history 

  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    console.log(idx)
    console.log(!this.squares[idx])
    // Is true for first click
    // False after initial click
    if (!this.squares[idx]) {
      console.log(this.squares)
      this.squares.splice(idx, 1, this.player);
      console.log(this.squares)
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();

    if (this.winner === 'X' || this.winner === 'O'){

      this.resetGame()
      console.log("reset game");
      // call reset game

    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // Checks to see if a player has three of these boxes
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        // returns winner
        return this.squares[a];
      }
    }
    // This returns nothing
    return null;
  }


}
