import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioActual:string;
  constructor(private router:Router, private service:UsuarioService) {
    this.usuarioActual=service.nombreUsuario;
   }

  ngOnInit(): void {
    

  }

  navegarHaciaLogin(){
    
    this.router.navigate(['/login'])
  }

}
