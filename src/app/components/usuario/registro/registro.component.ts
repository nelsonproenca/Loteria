import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	result: any = null;

	nome: string;
	email: string;
	username: string;
	senha: string;
	dataNascimento: string;
	telemovel: string;
  	pais: string;
  	cidade: string;

  	registroForm: FormGroup;

  	constructor(private usuarioService: UsuarioService, private fb: FormBuilder ) {
      	this.formCreate();
  	}

  	formCreate() {
      	this.registroForm = this.fb.group({
          	username : ['', Validators.required],
          	senha : ['', Validators.required],
          	nome: ['', Validators.required],
          	email: ['', Validators.required],
          	dataNascimento: [''],
          	telemovel: [''],
          	pais: [''],
          	cidade: ['']
      	});
	}

  	registrar() {
      	const usuario: UsuarioModel = {
          	Cidade : this.cidade,
          	DataNascimento : this.dataNascimento,
          	Email : this.email,
          	Nome : this.nome,
          	Pais : this.pais,
          	Senha : this.senha,
          	Telemovel : this.telemovel,
          	Username : this.username
      	}

      	this.result = this.usuarioService.registro(usuario);
  	}

  ngOnInit() {
  }

}
