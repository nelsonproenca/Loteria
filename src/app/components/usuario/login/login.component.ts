import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public error: string;

  loginForm: FormGroup;

  constructor(private auth:AuthService, private router: Router, private fb: FormBuilder ) {
      this.FormCreate();
  }

  FormCreate() {
    this.loginForm = this.fb.group({
        username : ['', Validators.required],
        password : ['', Validators.required]
    });
  }

  public submit() {
    this.auth.login(this.username, this.password).pipe(first()).subscribe(
      result => {
        if (this.auth.LoggedIn) {
          let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/dashboard';

          this.router.navigate([redirect]);
        }
      },
      err => this.error = 'Não foi possivel autenticar'
    );
  }

  ngOnInit() {
  }

}
