import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mensaje: any;
  mostrarMensaje()
  {
    this.mensaje ="Hola, has hecho click en Mostrar mensaje";
  }
  recetearMensaje()
  {
  //Reiniciamos el mensaje 
    this.mensaje= '';
  }
}
