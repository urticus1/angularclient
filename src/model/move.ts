import {Piece} from "./piece"
import { Square } from "./square";
import { m } from "@angular/core/src/render3";

export class Move {

  constructor(start: Square, end: Square, piece: Piece) {
    this.startSquare = start;
    this.endSquare = end;
    this.piece = piece.pgnValue;
  }

  piece: string;
  startSquare: Square
  endSquare: Square

}
