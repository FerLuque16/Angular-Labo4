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

  displayLogout = false;
  displayLogIn = false;
  displayRegister = false;
  displayUser = false;

  usuario:any;
  
  constructor(private authService:AuthService, private auth: AngularFireAuth, private ruteo:RuteoService) {
 
    this.usuario = "";    
    auth.authState.subscribe(user=>{
      if(user){
        
        this.usuario = user.email;
        this.displayUser = true;
        this.displayLogout = true;
      }
      else{
        this.displayLogIn = true;
        this.displayRegister = true;
        this.displayLogout = false;
        this.displayUser = false;
      }
      
    })

    
    
   }

  ngOnInit(): void {
    

  }

  navegarHacia(path:string){
    this.ruteo.navegarHacia(path);
  }

  logOut(){
    this.displayLogout = false;
    this.displayUser = false;
    this.usuario = "";
    return this.authService.logOut();
    

  }

}
