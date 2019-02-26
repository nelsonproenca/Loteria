import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: String = "";

  constructor(private http: HttpClient) { }

  login(username: string, password: string) : Observable<boolean> {
    return this.http.post<{token : string}>(`${this.url}/users/auth`, {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem("TokenJwt", result.token);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem("TokenJwt");
  }

  public get LoggedIn() : boolean {
    return (localStorage.getItem("TokenJwt") !== null);
  }
}
