import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  private mensaje: string = 'Mensaje prueba de servicios';
  constructor() {}

  obtenerMensaje() : string{
    return this.mensaje;
  }
}
