import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SorteioService } from 'src/app/sorteio.service';

@Component({
  selector: 'app-gerar-combinacoes',
  templateUrl: './gerar-combinacoes.component.html',
  styleUrls: ['./gerar-combinacoes.component.css']
})
export class GerarCombinacoesComponent implements OnInit {

  sorteios: SorteioModel[];

  editButton: String;
  deleteButton: String;
  addButton: String;

  premios: PremioModel;

  gerarForm: FormGroup;

  constructor(private sorteioService: SorteioService, private fb: FormBuilder) {
    this.FormCreate();

    this.editButton = "N";
    this.deleteButton = "N";
    this.addButton = "S";

    this.premios = {
      DataSorteio : new Date('0001/01/01'),
      IdsCombinacoes : [],
      MaiorPremio: 123.50,
      MenorPremio: 2.40,
      NumeroSorteio: '999/9999',
      PremioGanho: 0.00,
      ValorAposta: 2.50
    };

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
    this.gerarForm = this.fb.group({
      qtde_combinacoes : ['', Validators.required],
      qtde_numeros : ['', Validators.required]
    });
  }

  gerar() {
  }

  ngOnInit() {
  }

}
