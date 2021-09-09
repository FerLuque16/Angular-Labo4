import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import { AuthService } from 'src/app/servicios/auth.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario:UsuarioService;

  constructor(private router: Router, private service:UsuarioService, private firestore: AngularFirestore, public auth:AuthService) {
    this.nuevoUsuario = new UsuarioService;
  }

  ngOnInit(): void {
  }

  async registrar(name:string, pass:string){
    try {
      await this.auth.registrar(name,pass);
      this.router.navigate(['/home']);
      console.log("El usuario se registró correctamente");
    } catch (error:any) {
      console.log(error.message);
      
    }
  }

}
