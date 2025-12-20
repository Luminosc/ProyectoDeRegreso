import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-productos',
  imports: [],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {
  @Output() notificarPrecio = new EventEmitter<number>();
  @Output() notificarDescripcion = new EventEmitter<string>();

  inputDescripcion: string = '';
  inputPrecio: number = 0;
  actualizarproducto(evento: Event)
  {
    const elementeoInput = evento.target as HTMLInputElement;
    this.inputDescripcion = elementeoInput.value;
  }

  actualizarprecio(evento: Event)
  { 
    const elementeoInput = evento.target as HTMLInputElement;
    this.inputPrecio = Number(elementeoInput.value);
  }

  Enviar()
  {
    this.notificarPrecio.emit(this.inputPrecio);
    this.notificarDescripcion.emit(this.inputDescripcion);
  }
}
