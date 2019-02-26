import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SorteioService } from 'src/app/sorteio.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    sorteio: SorteioModel;

    sorteioForm: FormGroup;

    constructor(private sorteioService: SorteioService, private fb: FormBuilder) {
        this.FormCreate();
    }

    FormCreate() {
        this.sorteioForm = this.fb.group({
          numero_sorteio : ['', Validators.required],
          data_sorteio : ['', Validators.required],
          numero_1o : ['', Validators.required],
          numero_2o : ['', Validators.required],
          numero_3o : ['', Validators.required],
          numero_4o : ['', Validators.required],
          numero_5o : ['', Validators.required],
          estrela_1o : ['', Validators.required],
          estrela_2o : ['', Validators.required]
        });
    }

    adicionarSorteio(numero_sorteio, data_sorteio, numero_1o, numero_2o, numero_3o, numero_4o, numero_5o, estrela_1o, estrela_2o) {
      sorteio: SorteioModel;

      this.sorteio.NumeroSorteio = numero_sorteio;
      this.sorteio.DataSorteio = data_sorteio;
      this.sorteio.Numero1o = numero_1o;
      this.sorteio.Numero2o = numero_2o;
      this.sorteio.Numero3o = numero_3o;
      this.sorteio.Numero4o = numero_4o;
      this.sorteio.Numero5o = numero_5o;
      this.sorteio.Estrela1o = estrela_1o;
      this.sorteio.Estrela2o = estrela_2o;

        this.sorteioService.add(this.sorteio);
    }

    ngOnInit() {
    }
}
