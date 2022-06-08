import { Component, OnInit, ViewChildren, QueryList, Input } from '@angular/core';
import { gameService } from '../../services/game.service';
import { BoardSquareComponent } from '../board-square/board-square.component';
import { Piece } from '../../../model/piece';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoveService } from '../../services/move-service.service';
import { Square } from '../../../model/square';
import { Game } from '../../../model/game';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  gameId: string;
  game: Game
  @ViewChildren('squares') squares: QueryList<BoardSquareComponent>;
  highlightedSquares: BoardSquareComponent[] = []
  pieces: string[] = []
  selectedSquare: BoardSquareComponent

  constructor(private movesProvider: MoveService, private gamesProvider: gameService, private ref: ChangeDetectorRef, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      this.gameId = params['id'];
      let flatSquares = this.squares.toArray();
      this.gamesProvider.getLivePosition(this.gameId).subscribe(result => {
        console.log(result)
        this.game = result;
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 8; j++) {
            let currentSquare = 8 * i + j
            flatSquares[currentSquare].setCoordinate(i, j);
            flatSquares[currentSquare].setPiece(new Piece(result.board.squares[i][j].piece == null ? "E" : result.board.squares[i][j].piece.pgnSymbol));
            flatSquares[currentSquare].setBoard(this);
          }
        }
      });
    });
    this.ref.detectChanges();
  }

  private highlightSquare(row: number, column: number): void {
    let square = this.squares.toArray()[8 * row + column];
    square.getElement().nativeElement.setAttribute('style', 'filter: hue-rotate(180deg)');
    square.highlightSquare();
  }

  public getSelectedSquare(): BoardSquareComponent {
    return this.selectedSquare;
  }

  public setSelectedSquare(square: BoardSquareComponent): void {
    this.selectedSquare = square;
  }

  public makeMove(endSquare: BoardSquareComponent) {
    let startSquare = new Square(this.selectedSquare.getRow(), this.selectedSquare.getCol());
    let targetSquare = new Square(endSquare.getRow(), endSquare.getCol());
    let piece = this.selectedSquare.getPiece();
    this.movesProvider.makeMove(this.gameId, startSquare, targetSquare, piece).subscribe(res => {
      if (res) {
        endSquare.setPiece(this.selectedSquare.getPiece());
        this.selectedSquare.clearPiece();
        this.selectedSquare = null;
        this.unhighlight();
      }
    });
  }

  public highlightLegalMoves(square: BoardSquareComponent): void {
    this.unhighlight();
    this.selectedSquare = square;
    this.movesProvider.getLegalMoves(this.gameId, square.getRow(), square.getCol()).subscribe(moves => moves.forEach(move => {
      this.highlightSquare(move.endSquare.row, move.endSquare.column);
      this.highlightedSquares.push(this.squares.toArray()[8 * move.endSquare.row + move.endSquare.column])
    }));
  }

  private unhighlight(): void {
    this.highlightedSquares.forEach(square => {
      square.getElement().nativeElement.setAttribute('style', 'filter: none');
      square.unhighlightSquare();
    })
  }

}
