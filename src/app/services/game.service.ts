import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Game } from '../../model/game';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class gameService {

  private gamesUrl: string;

  constructor(private http: HttpClient) {
    this.gamesUrl = 'http://localhost:8090/games';
  }

  public findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  public getGame(id: string): Observable<Game> {
    let params = new HttpParams().set('id', id);
    return this.http.get<Game>(this.gamesUrl + "/game", { params: params });
  }

  public getLivePosition(id: string): Observable<Game> {
    return this.http.get<Game>(this.gamesUrl + "/game?id=" + id);
  }

  public joinGame(id: string, white: boolean, token: string): Observable<any> {
    return this.http.post<boolean>(this.gamesUrl + "/join", { gameId: id, isWhite: white, token: token });
  }

  public createGame(fen: string): Observable<boolean> {
    return this.http.post<boolean>(this.gamesUrl + "/create", fen)
  }

}
