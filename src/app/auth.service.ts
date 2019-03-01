import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioService } from './usuario.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: String = "";

  redirectUrl: string;

  constructor(private http: HttpClient, private usuarioService: UsuarioService, private jwtHelper: JwtHelperService) { }

  login(username: string, password: string) : Observable<boolean> {
    return this.usuarioService.login(username, password)
      .pipe(
        map(result => {
          localStorage.setItem("TokenJwt", result.token.toString());
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

  public get LoggedUser() : string {

    if (localStorage.getItem("TokenJwt") !== null) {
      let jwtString = localStorage.getItem("TokenJwt");
      var decodeToken = this.jwtHelper.decodeToken(jwtString);
    }
    return decodeToken.name;
  }

}
