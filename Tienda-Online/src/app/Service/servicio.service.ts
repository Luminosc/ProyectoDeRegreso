import { DatosService } from './datos.service';
import { Injectable } from '@angular/core';
import { producto } from '../listado-productos/producto/producto.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  productos: { [llave: string]: producto } = {};
  productosActualizados = new Subject<{ [llave: string]: producto }>();
  constructor(private datosService: DatosService) {}

  guardarProducto(producto: producto, llave: string | null = null) {
    if (llave === null) {
      this.datosService.guardarProducto(producto).subscribe(() => {
        console.log(
          `se agrego el nueboi producto; ${producto.Description}- ${producto.Precio}`,
        );
        this.regresarProductos();
      });
    }else{
      this.datosService.modificarProducto(producto, llave).subscribe(() =>{
        this.regresarProductos();
      });
    }
  }
  regresarProductos() {
    this.ListarProductios().subscribe((productos:{ [llave: string]: producto }) =>{
      this.setProductos(productos);
    });
  }
  setProductos(productos: { [llave: string]: producto }){
    this.productos = productos;
    this.productosActualizados.next(this.productos);
  }

  ListarProductios() {
    return this.datosService.listarProducto();
  }
  getProductoByLlave(llave: string): producto | undefined {
    return this.productos[llave];
  }

  eliminarProducto(llave: string){
    this.datosService.eliminarProducto(llave).subscribe(() =>{
      this.regresarProductos();
    });
  }
}
