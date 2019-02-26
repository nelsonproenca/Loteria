import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-sorteio',
  templateUrl: './lista-sorteio.component.html',
  styleUrls: ['./lista-sorteio.component.css']
})
export class ListaSorteioComponent implements OnInit {

  @Input() listaSorteio;
  @Input() buttonAdd;
  @Input() buttonEdit;
  @Input() buttonDelete;

  constructor() { }

  ngOnInit() {

  }

}
