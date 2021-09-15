import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilidadesService {

  constructor() { }

  convertirMensaje(codigo: string): string{ 
    switch (codigo) {
      case 'auth/user-disabled':
        return 'Lo sentimos, su usuario está deshabilitado';
        break;

      case 'auth/user-not-found':
        return 'Lo sentimos, el usuario ingresado no fue encontrado';
        break;

      case 'auth/weak-password':
        return 'La contraseña debe tener al menos 6 caracteres';
        break;
      case 'auth/email-already-in-use':
        return 'El email ingresado ya se encuentra registrado';
        break;
    
      case 'auth/missing-email':
        return 'Debe ingresar el email';
        break;

      case 'auth/invalid-email':
        return 'El email ingresado es invalido';
        break;

      case 'auth/wrong-password':
        return 'La contraseña ingresada es incorrecta';
        break;

      default:
        return 'Datos invalidos. Ingrese los datos nuevamente';
        break;
    }
  }
}
