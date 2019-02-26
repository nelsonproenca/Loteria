import { Component, OnInit } from '@angular/core';
import { SorteioService } from 'src/app/sorteio.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  	sorteios: SorteioModel[];
  	editButton: String;
  	deleteButton: String;

  	procurarForm: FormGroup;

  	constructor(private sorteioService: SorteioService, private fb: FormBuilder) {
		this.FormCreate();

    	this.editButton = 'visible';
    	this.deleteButton = 'visible';

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
			      numero_sorteio : ['', Validators.required],
			      data_sorteio : ['', Validators.required],
			      numero_valor : ['', Validators.required],
			      estrela_valor : ['', Validators.required]
		    });
	  }


  deletar(id) {
    //this.sorteioService.delete(id);
  }

  pesquisar(numero_sorteio, data_sorteio, numero_valor, estrela_valor) {

  }

  ngOnInit() {

    //this.sorteioService.getAll().subscribe((sorteios: SorteioModel[]) => {
      //this.sorteios = sorteios;
    //});

  }
}
