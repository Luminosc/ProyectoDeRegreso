import { producto } from './../listado-productos/producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url= 'https://tienda-online-829d5-default-rtdb.firebaseio.com/';

  constructor(private httpCliente: HttpClient) { }
  listarProducto(): Observable<{[llave:string]: producto}>{
    return this.httpCliente.get<{[llave:string]: producto}>(this.url + 'datos.json');

  }

  guardarProducto(producto: producto): Observable<any>{
    return this.httpCliente.post(`${this.url}datos.json`,producto);
  }
  modificarProducto(producto: producto, llave: string): Observable<any>{
    const url_modificar = `${this.url}datos/${llave}.json`;
    return this.httpCliente.put(url_modificar,producto);
  }
  eliminarProducto(llave: string): Observable<any> {
    const url_eliminar = `${this.url}datos/${llave}.json`;
    return this.httpCliente.delete(url_eliminar);
  }
}
