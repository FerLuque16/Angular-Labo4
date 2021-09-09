import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RuteoService {

  constructor(private router:Router) { }

  navegarHacia(path:string){
    this.router.navigate([path]);
  }
}
