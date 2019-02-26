import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  url = 'http://localhost:3000/api/sorteios';

  constructor( private http: HttpClient) { }

  add(sorteioModel: SorteioModel) {
    this.http.post(`${this.url}`, sorteioModel).subscribe(res => console.log('Done'));
  }

  getAll() {
    return this.http.get(`${this.url}`);
  }

  getById(id) {
    return this.edit(id);
  }

  edit(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  update(sorteioModel: SorteioModel, id) {
    this.http.put(`${this.url}/${id}`, sorteioModel).subscribe(res => console.log('Done'));
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`).subscribe(res => console.log('Done'));
  }
}
