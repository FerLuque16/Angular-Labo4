import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarHaciaHome(){
    this.router.navigate(['/home']);
  }

  navegarHaciaQuienSoy(){
    this.router.navigate(['/quiensoy']);  
  }

  navegarHaciaError(){
    this.router.navigate(['/error']);  
  }

  navegarHaciaEjercicio1(){
    this.router.navigate(['/ejercicio1']); 
  }

}
