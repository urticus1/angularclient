import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Move } from '../../model/move';
import { Square } from '../../model/square';
import { Piece } from '../../model/piece';

@Injectable()
export class MoveService {

  private moveUrl: string;

  constructor(private http: HttpClient) {
    this.moveUrl = 'http://localhost:8090/move';
  }

  public getLegalMoves(gameId: string, row: number, col: number): Observable<Move[]> {
    let params = new HttpParams().set('id', gameId)
      .set('row', (row).toString())
      .set('column', col.toString());
    return this.http.get<Move[]>(this.moveUrl + "/legalMoves", { params: params });
  }

  public makeMove(gameId: string, start: Square, end: Square, piece: Piece): Observable<boolean> {
    let move = new Move(start, end, piece);
    let token = window.sessionStorage.getItem('session');
    if (token === null) {
      return Observable.create(false);
    }
    return this.http.post<boolean>(this.moveUrl + "/makeMove", { move: move, token: token, gameId: gameId });
  }
}
