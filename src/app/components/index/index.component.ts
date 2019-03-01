import { Component, OnInit } from '@angular/core';
import { SorteioService } from 'src/app/sorteio.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

    numeroSorteio : number;
    dataDorteio : string;
    numeroValor : number;
    estrelaValor : number;

  	sorteios: SorteioModel[];
  	editButton: String;
  	deleteButton: String;

  	procurarForm: FormGroup;

  	constructor(private sorteioService: SorteioService, private fb: FormBuilder) {
		    this.formCreate();

    	  this.editButton = 'visible';
    	  this.deleteButton = 'visible';
	  }

    formCreate() {
        this.procurarForm = this.fb.group({
            numero_sorteio : [''],
            data_sorteio : [''],
            numero_valor : [''],
            estrela_valor : ['']
        });
    }

    deletar(id) {
        this.sorteioService.delete(id);
    }

    pesquisar() {

    }

    ngOnInit() {
        this.sorteioService.getAll().subscribe((sorteios: SorteioModel[]) => {
            this.sorteios = sorteios;
        });
    }
}
