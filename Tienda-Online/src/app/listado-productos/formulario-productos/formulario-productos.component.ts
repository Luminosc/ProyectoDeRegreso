import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { producto } from '../producto/producto.model';
import { ServicioService } from '../../Service/servicio.service';

@Component({
  selector: 'app-formulario-productos',
  imports: [FormsModule],
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css',
})
export class FormularioProductosComponent {
  inputDescripcion: string = '';
  inputPrecio: number | null = null;
  constructor(private productoservice: ServicioService) {}
  actualizarproducto(evento: Event) {
    const elementeoInput = evento.target as HTMLInputElement;
    this.inputDescripcion = elementeoInput.value;
  }

  actualizarprecio(evento: Event) {
    const elementeoInput = evento.target as HTMLInputElement;
    this.inputPrecio = Number(elementeoInput.value);
  }

  Enviar(evento: Event) {
    evento.preventDefault();

    if (
      this.inputDescripcion.trim() === '' ||
      this.inputPrecio == null ||
      this.inputPrecio <= 0
    ) {
      console.log('debes de ingresasar una descipción y precio valido');
      return;
    }

    const produc = new producto(this.inputDescripcion, this.inputPrecio);
    this.productoservice.agregarProducto(produc);


  }
}
