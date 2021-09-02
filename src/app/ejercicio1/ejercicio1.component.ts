import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operaciones } from '../clases/operaciones';
import { Usuario } from '../clases/usuario';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {

  miUsuario:Usuario;

  miOperacion:Operaciones;

  constructor(private router: Router) {
    this.miUsuario = new Usuario();
    this.miOperacion = new Operaciones();
   }

  ngOnInit(): void {
  }

  navegarHaciaAtras(){
    this.router.navigate(['/login']);
  }
}
