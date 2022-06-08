import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Move } from '../../model/move';
import { Square } from '../../model/square';
import { Piece } from '../../model/piece';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
  }

  public createUser(username: string, password: string): Observable<any> {
    let data = { username: username, password: password }
    return this.http.post<any>(this.usersUrl + "/newUser", data);
  }

}
