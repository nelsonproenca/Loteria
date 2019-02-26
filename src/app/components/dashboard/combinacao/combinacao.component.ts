import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combinacao',
  templateUrl: './combinacao.component.html',
  styleUrls: ['./combinacao.component.css']
})
export class CombinacaoComponent implements OnInit {


  numerosSorteados1: SorteioModel;
  numerosSorteados2: SorteioModel;

  constructor() {

      this.numerosSorteados1 = {
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

      this.numerosSorteados2 = {
        Numero1o: 5,
        Numero2o: 10,
        Numero3o: 15,
        Numero4o: 20,
        Numero5o: 25,
        Estrela1o: 5,
        Estrela2o: 6,
        NumeroSorteio: "",
        DataSorteio : new Date('9999-99-99')
      };

  }

  ngOnInit() {
  }

}
