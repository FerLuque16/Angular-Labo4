import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import { RuteoService } from 'src/app/servicios/ruteo.service';

import { AuthService } from 'src/app/servicios/auth.service';
import { UtilidadesService } from 'src/app/servicios/utilidades.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  nuevoUsuario:UsuarioService;

  

  items: Observable<any[]>;

  constructor(private router: Router, private service:UsuarioService, private firestore: AngularFirestore, public auth:AuthService, private ruteo:RuteoService, private toastr: ToastrService, private utilidad: UtilidadesService) {
    this.nuevoUsuario = new UsuarioService;

    

    this.items = firestore.collection('usuarios').valueChanges();
   }

  ngOnInit(): void {
  }

 
  /*navegarHaciaHome(){
  
    this.service.nombreUsuario="Lalala";
    var modelo=this;
    setTimeout(function(){
      modelo.router.navigate(['/home']);
    }, 2000);
  }*/

  navegarHacia(path:string){
    if(path == '/home'){
      var modelo=this;
      setTimeout(function(){
        modelo.router.navigate([path]);
      }, 2000);
    }
    else{
      this.ruteo.navegarHacia(path);
    }
    
  }


  async login(name:string, pass:string){
    try {
      await this.auth.login(name,pass);
      this.router.navigate(['/home']);

      this.toastr.success('Logueado correctamente','Usted se ha logueado correctamente');
      console.log("El usuario se logueó correctamente");
    } catch (error:any) {

      this.toastr.error(this.utilidad.convertirMensaje(error.code),'Error al loguearse');
      console.log(error.code);
      
    }
  }

  

}
