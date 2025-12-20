import { Component, ViewChild } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { producto } from './producto/producto.model';
import { PercentPipe } from '@angular/common';
import { log } from 'console';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent, FormularioProductosComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  Producto: producto[] = [new producto('Chamarra', 10)];
  @ViewChild(FormularioProductosComponent) formulario!: FormularioProductosComponent;
  
  /*agregarProducto(ProductoInput: String, PrecioUInput: number) {

    if (
      ProductoInput.trim() === '' ||
      PrecioUInput == null ||
      PrecioUInput <= 0
    ) {
      console.log('Valor erroneo');
    } else {
      this.Producto.push(new producto(ProductoInput, PrecioUInput));
    }
  }*/
 agregarProducto()
 {
  if(
    this.formulario.inputDescripcion === ''||
    this.formulario.inputPrecio === null||
    this.formulario.inputPrecio <= 0
  ){
    console.log('Valor erroneo');
  }else{
    this.Producto.push(new producto(this.formulario.inputDescripcion
      ,this.formulario.inputPrecio));
  }
 }
}
