import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ErrorComponent } from './error/error.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'quiensoy',component: QuienSoyComponent},
  {path: 'error', component: ErrorComponent },
  {path: 'ejercicio1', component: Ejercicio1Component},
  {path: '', redirectTo: '/login', pathMatch:'full'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
