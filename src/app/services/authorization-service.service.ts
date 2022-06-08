import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizationService {

  private authUrl: string;

  constructor(private http: HttpClient) {
    this.authUrl = 'http://localhost:8090/auth';
  }

  public getLoginToken(username: string, password: string): Observable<string> {
    let data = { username: username, password: password }
    return this.http.post<string>(this.authUrl + "/login", data);
  }

}
