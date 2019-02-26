import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar'
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { SorteioService } from './sorteio.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UsuarioService } from './usuario.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Top10Component } from './components/dashboard/top10/top10.component';
import { InserirComponent } from './components/dashboard/inserir/inserir.component';
import { UltimoSorteioComponent } from './components/dashboard/ultimo-sorteio/ultimo-sorteio.component';
import { CombinacaoComponent } from './components/dashboard/combinacao/combinacao.component';
import { ControleApostasComponent } from './components/controle-apostas/controle-apostas.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { ListaSorteioComponent } from './components/lista-sorteio/lista-sorteio.component';
import { GerarCombinacoesComponent } from './components/gerar-combinacoes/gerar-combinacoes.component';
import { ListaCombinacoesComponent } from './components/lista-combinacoes/lista-combinacoes.component';
import { LoginComponent } from './components/usuario/login/login.component';
import { RegistroComponent } from './components/usuario/registro/registro.component';
import { TrocarSenhaComponent } from './components/usuario/trocar-senha/trocar-senha.component';

const routes: Routes = [
    {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'edit/:id',
        component: EditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'controle-apostas',
        component: ControleApostasComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'gerar-combinacoes',
        component: GerarCombinacoesComponent,
        canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'registro',
      component: RegistroComponent
    },
    {
      path: 'trocar-senha',
      component: TrocarSenhaComponent
    }
];

export function ObterToken() {
  return localStorage.getItem("TokenJwt");
}

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    DashboardComponent,
    Top10Component,
    InserirComponent,
    UltimoSorteioComponent,
    CombinacaoComponent,
    ControleApostasComponent,
    ResultadoComponent,
    ListaSorteioComponent,
    GerarCombinacoesComponent,
    ListaCombinacoesComponent,
    LoginComponent,
    RegistroComponent,
    TrocarSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config : {
        tokenGetter: ObterToken,
        whitelistedDomains: ['localhost:3000'],
        blacklistedRoutes: ['localhost:3000/users']
      }
    })
  ],
  providers: [
    SorteioService,
    AuthService,
    AuthGuard,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
