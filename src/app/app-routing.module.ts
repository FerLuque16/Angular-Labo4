import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'home',component: HomeComponent},
  {path: 'quiensoy',component: QuienSoyComponent},
  {path: 'error', component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
