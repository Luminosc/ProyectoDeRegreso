import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { producto } from './producto/producto.model';
import { PercentPipe } from '@angular/common';
import { log } from 'console';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  Producto: producto[] = [new producto('Chamarra', 10)];
  agregarProducto(ProductoInput: String, PrecioUInput: number) {
    if (
      ProductoInput.trim() === '' ||
      PrecioUInput == null ||
      PrecioUInput <= 0
    ) {
      console.log('Valor erroneo');
    } else {
      this.Producto.push(new producto(ProductoInput, PrecioUInput));
    }
  }
}
