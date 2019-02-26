import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimo-sorteio',
  templateUrl: './ultimo-sorteio.component.html',
  styleUrls: ['./ultimo-sorteio.component.css']
})
export class UltimoSorteioComponent implements OnInit {

  numerosSorteados: SorteioModel;

  constructor() {
    this.numerosSorteados = {
      Numero1o: 10,
      Numero2o: 20,
      Numero3o: 30,
      Numero4o: 40,
      Numero5o: 50,
      Estrela1o: 10,
      Estrela2o: 12,
      NumeroSorteio: "",
      DataSorteio : new Date('9999-99-99')
    };

  }

  ngOnInit() {
  }

}
