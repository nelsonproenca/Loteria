import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SorteioService } from 'src/app/sorteio.service';

@Component({
  selector: 'app-controle-apostas',
  templateUrl: './controle-apostas.component.html',
})
export class ControleApostasComponent implements OnInit {
  numeroSorteio: string;
  listaSorteios: NumeroSorteioViewModel[];
  numerosSorteados: SorteioModel;
  addButton: String;

  procurarForm: FormGroup;

  constructor(private sorteioService: SorteioService, private fb: FormBuilder) {
      this.formCreate();

    	this.addButton = 'N';
  }

  formCreate() {
      this.procurarForm = this.fb.group({
        numero_sorteio : ['', Validators.required] });
  }

  ngOnInit() {

  }

  buscarSorteios() {
    let nroSorteioSel: NumeroSorteioViewModel; 
    this.sorteioService.search("numeroSorteio", this.numeroSorteio).subscribe((val) => {
      nroSorteioSel = val[0];
    });

    
  }

  pesquisarSorteio() {
    this.sorteioService.search('numeroSorteio', )
  }
}
