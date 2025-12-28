import { Injectable,EventEmitter } from '@angular/core';
import { producto } from '../listado-productos/producto/producto.model';




@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  producto: producto[] = [
    new producto('chamarra', 20),
    new producto('calzones', 10),
    new producto('sueter',25)
  ];

  detalleProductoEmiter = new EventEmitter<producto>();

  agregarProducto(Producto: producto){
    this.producto.push(Producto);
  }
  constructor() {}
}
