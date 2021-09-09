import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { 
    auth.authState.subscribe(user=>{
      console.log(user);
    })
  }


  login(name:string, clave:string){
    return this.auth.signInWithEmailAndPassword(name,clave);

    
  }

  registrar(name:string, clave:string){
    return this.auth.createUserWithEmailAndPassword(name,clave);
  }

  logOut(){
    return this.auth.signOut();
  }
}
