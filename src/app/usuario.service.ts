import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: String = "http://localhost:3000/users";

  constructor( private http: HttpClient) { }

  public registro(usuario: UsuarioModel) {
	  return this.http.post<{ message: String }>(`${this.url}`, usuario);
  }

  public login(username: String, password: String) {
    return this.http.get<{message: String, token: String}>(`${this.url}/login/${username}/${password}`);
  }

  public trocarSenha(email: String, newPassword: String) {
    return this.http.get<{message: String}>(`${this.url}/trocar/${email}/${newPassword}`);
  }
}
