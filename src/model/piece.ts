export class Piece {

  constructor(pgn: string) {
    this.pgnValue = pgn;
  }

  pgnValue: string;
  colour: string;
}
