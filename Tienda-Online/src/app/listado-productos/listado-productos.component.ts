import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { producto } from './producto/producto.model';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  Producto: producto[]= [
    new producto('Chamarra',10)
  ];
  agregarProducto(ProductoInput: String, PrecioUInput:number)
  {
    if (PrecioUInput >= 0 )
    {
      this.Producto.push(new producto(ProductoInput, PrecioUInput));
    }
    
  }
}