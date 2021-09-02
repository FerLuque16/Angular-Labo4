import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { QuienSoyComponent } from './page/quien-soy/quien-soy.component';
import { ErrorComponent } from './page/error/error.component';
import { Ejercicio1Component } from './page/ejercicio1/ejercicio1.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'quiensoy',component: QuienSoyComponent},
  {path: 'ejercicio1', component: Ejercicio1Component},
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: '**', component: ErrorComponent }
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
