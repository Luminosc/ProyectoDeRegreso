import { Injectable,EventEmitter } from '@angular/core';
import { producto } from '../listado-productos/producto/producto.model';




@Injectable({
  providedIn: 'root',
})
export class ServicioService {

  public idSiguiente = 1;
  producto: producto[] = [];

  guardarProducto(producto: producto){
    if(producto.id === null)
    {
      producto.id = this.idSiguiente++;
      this.producto.push(producto)
    }else{
      const indice = this.producto.findIndex(p=> p.id === producto.id)
      if(indice !== -1){
        this.producto[indice] = producto;
      }
    }
  }
  constructor() {
    this.inicializarProductos()
  }
  inicializarProductos()
  {
    const producto1 = new producto(this.idSiguiente++, 'chamarra',20);
    const producto2 = new producto(this.idSiguiente++,'calzones',10);
    const producto3 = new producto(this.idSiguiente++, 'sueter',25);
    this.producto.push(producto1,producto2,producto3);
  }
  getProductoById(id: number): producto | undefined{
    return this.producto.find(producto => producto.id === id);
  }
  eliminarProducto(id: number){
    const indice = this.producto.findIndex(producto => producto.id === id);
    if (indice !== 1)
    {
      this.producto.splice(indice,1);
    }
  }
}
