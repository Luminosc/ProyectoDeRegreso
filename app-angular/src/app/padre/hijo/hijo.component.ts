import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css',
})
export class HijoComponent {
  //!: Operador non-null assertion
  //Confie en que este componente va aser inicializado posteriormente
  //@Input() mensaje!: string;

  /*@Output() notificarPadre = new EventEmitter<string>();

  enviarMensaje() {
    //Emitir el evento con un mensaje (se emite una cadena string)
    this.notificarPadre.emit('Mensaje desde el componente hijo al padre');
  }*/
 mensaje:string = 'Mensaje desde el comoponente hijo'

 cambiarMensaje(nuevoMesaje: string)
 {
  this.mensaje = nuevoMesaje
 }
}
