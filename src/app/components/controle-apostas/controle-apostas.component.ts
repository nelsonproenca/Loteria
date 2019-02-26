import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SorteioService } from 'src/app/sorteio.service';

@Component({
  selector: 'app-controle-apostas',
  templateUrl: './controle-apostas.component.html',
  styleUrls: ['./controle-apostas.component.css']
})
export class ControleApostasComponent implements OnInit {

  numerosSorteados: SorteioModel;
  sorteios: SorteioModel[];
  addButton: String;

  procurarForm: FormGroup;

  constructor(private sorteioService: SorteioService, private fb: FormBuilder) {
      this.FormCreate();

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
      }

    	this.addButton = 'N';

      this.sorteios =
      [
        {
          NumeroSorteio : "MS_01/2019",
          DataSorteio : new Date('9999-99-99'),
          Numero1o : 1,
          Numero2o : 2,
          Numero3o : 3,
          Numero4o : 4,
          Numero5o : 5,
          Estrela1o : 1,
          Estrela2o : 2
        },
        {
          NumeroSorteio : "MS_02/2019",
          DataSorteio : new Date('9999-99-99'),
          Numero1o : 1,
          Numero2o : 7,
          Numero3o : 4,
          Numero4o : 2,
          Numero5o : 3,
          Estrela1o : 4,
          Estrela2o : 8
        }, {
          NumeroSorteio : "MS_03/2019",
          DataSorteio : new Date('9999-99-99'),
          Numero1o : 4,
          Numero2o : 5,
          Numero3o : 6,
          Numero4o : 7,
          Numero5o : 8,
          Estrela1o : 1,
          Estrela2o : 4
        }
      ];
  }

  FormCreate() {
      this.procurarForm = this.fb.group({
        numero_sorteio : ['', Validators.required] });
  }

  ngOnInit() {
  }

}
