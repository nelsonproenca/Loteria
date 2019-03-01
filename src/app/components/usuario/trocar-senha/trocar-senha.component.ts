import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario.service';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.css']
})
export class TrocarSenhaComponent implements OnInit {

  email: string;
  password: string;

  result: any = null;

  trocaSenhaForm: FormGroup;

  constructor(private usuarioService:UsuarioService, private router: Router, private fb: FormBuilder ) {
      this.formCreate();
  }

  formCreate() {
    this.trocaSenhaForm = this.fb.group({
        email : ['', Validators.required],
        password : ['', Validators.required],
        rePassword : ['']
    });
  }

  trocarSenha() {
    this.result = this.usuarioService.trocarSenha(this.email, this.password);
  }

  ngOnInit() {

  }

}
