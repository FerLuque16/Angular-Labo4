import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service:UsuarioService) { }

  ngOnInit(): void {
  }

  navegarHaciaHome(){
  
    this.service.nombreUsuario="Lalala";
    var modelo=this;
    setTimeout(function(){
      modelo.router.navigate(['/home']);
    }, 2000);
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
