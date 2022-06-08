import {Piece} from "./piece"

export class Square {

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  row: number;
  column: number;
}
