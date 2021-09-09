import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

import { RuteoService } from 'src/app/servicios/ruteo.service';

import { AuthService } from 'src/app/servicios/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notDisplayLogout = false;

  displayLogIn = false;

  displayRegister = false;
  
  constructor(private authService:AuthService, private auth: AngularFireAuth, private ruteo:RuteoService) {
 
    auth.authState.subscribe(user=>{
      if(user){
        this.notDisplayLogout = true;
      }
      else{
        this.displayLogIn = true;
        this.displayRegister = true;
      }
      
    })
    
   }

  ngOnInit(): void {
    

  }

  navegarHacia(path:string){
    this.ruteo.navegarHacia(path);
  }

  logOut(){
    this.notDisplayLogout = true;
    return this.authService.logOut();
    

  }

}
