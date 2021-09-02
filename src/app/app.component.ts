import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Operaciones } from './clases/operaciones';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  miUsuario:Usuario;

  miOperacion:Operaciones;

  

  constructor(private router : Router) {
    this.miUsuario = new Usuario();
    this.miOperacion = new Operaciones();
  }

  saludar(){
    
    this.router.navigate(['/login'])
    
  };

  


}
