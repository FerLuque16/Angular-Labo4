import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RuteoService } from 'src/app/servicios/ruteo.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  constructor(private ruteo:RuteoService) { }

  ngOnInit(): void {
  }

  navegarHacia(path:string){
    this.ruteo.navegarHacia(path);
  }

}
