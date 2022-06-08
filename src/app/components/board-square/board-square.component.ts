import { Component, OnInit, ElementRef } from '@angular/core';
import { HostListener } from "@angular/core";
import { Piece } from '../../../model/piece';
import { GameBoardComponent } from '../game-board/game-board.component';

@Component({
  selector: '.board-square-holder',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.css']
})
export class BoardSquareComponent implements OnInit {

  static assestsUrl: string = "../../assets/";
  static pgnToImageMap: { [name: string]: string } = {
    "P": "Pawn_White.png",
    "p": "Pawn_Black.png",
    "N": "Knight_White.png",
    "n": "Knight_Black.png",
    "R": "Rook_White.png",
    "r": "Rook_Black.png",
    "B": "Bishop_White.png",
    "b": "Bishop_Black.png",
    "Q": "Queen_White.png",
    "q": "Queen_Black.png",
    "K": "King_White.png",
    "k": "King_Black.png",
    "E": "empty.png"
  }

  colour: string;
  row: number;
  column: number;
  piece: Piece;
  pieceImage: string;
  highlight: boolean = false;
  board: GameBoardComponent;

  constructor(private elem: ElementRef) {
    this.pieceImage = BoardSquareComponent.assestsUrl + "empty.png";
  }

  ngOnInit() {
  }

  @HostListener("click") onClick() {
    console.log(this.row + ":" + this.column)
    if (this.highlight) {
      this.board.makeMove(this);
    }
    else {
      this.board.highlightLegalMoves(this);
    }
  }

  public setPiece(piece: Piece) {
    this.piece = piece;
    this.pieceImage = BoardSquareComponent.assestsUrl + BoardSquareComponent.pgnToImageMap[piece.pgnValue]
  }

  public setCoordinate(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  public setBoard(board: GameBoardComponent) {
    this.board = board;
  }

  public getElement(): ElementRef {
    return this.elem;
  }

  public getRow(): number {
    return this.row;
  }

  public getCol(): number {
    return this.column;
  }

  public highlightSquare(): void {
    this.highlight = true;
  }

  public unhighlightSquare() {
    this.highlight = false;
  }

  public clearPiece(): void {
    this.pieceImage = BoardSquareComponent.assestsUrl + BoardSquareComponent.pgnToImageMap["E"];
  }

  public getPiece(): Piece {
    return this.piece;
  }
}
