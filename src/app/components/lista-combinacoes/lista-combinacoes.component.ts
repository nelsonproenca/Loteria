import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-combinacoes',
  templateUrl: './lista-combinacoes.component.html',
  styleUrls: ['./lista-combinacoes.component.css']
})
export class ListaCombinacoesComponent implements OnInit {

  @Input() listaSorteio;
  @Input() buttonAdd;
  
  constructor() { }

  ngOnInit() {
  }

}
