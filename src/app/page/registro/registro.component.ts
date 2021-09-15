import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import { AuthService } from 'src/app/servicios/auth.service';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario:UsuarioService;

  constructor(private router: Router, private service:UsuarioService, private firestore: AngularFirestore, public auth:AuthService, private toastr: ToastrService, private utilidad: UtilidadesService) {
    this.nuevoUsuario = new UsuarioService;
    
  }

  ngOnInit(): void {
  }

  async registrar(name:string, pass:string){
    try {
      await this.auth.registrar(name,pass);

      const tiempo = new Date().getTime();
      const fecha = new Date(tiempo);    
      const fechaParseada = fecha.toString();

      const dataRegistro = {
        usuario: name,
        fechaDeIngreso: fechaParseada      
      }

      

      await this.firestore.collection('registros').add(dataRegistro);
      this.router.navigate(['/home']);
      console.log("El usuario se registró correctamente");
    } catch (error:any) {
      this.toastr.error(this.utilidad.convertirMensaje(error.code),'Error al registrarse');
      console.log(error.code);
      
    }
  }

}
