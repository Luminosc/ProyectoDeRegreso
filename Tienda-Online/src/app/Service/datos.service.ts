import { LoginService } from './login.service';
import { producto } from './../listado-productos/producto/producto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  url= 'https://tienda-online-674e7-default-rtdb.firebaseio.com/';

  constructor(private httpCliente: HttpClient, private LoginService: LoginService) { }
  listarProducto(): Observable<{[llave:string]: producto}>{
    const token = this.LoginService.getIdToken();
    const url_lista = `${this.url}datos.json?auth=${token}`
    return this.httpCliente.get<{[llave:string]: producto}>(url_lista);

  }

  guardarProducto(producto: producto): Observable<any>{
    const token = this.LoginService.getIdToken();
    const url_guardar = `${this.url}datos.json?auth=${token}`
    return this.httpCliente.post(url_guardar,producto);
  }
  modificarProducto(producto: producto, llave: string): Observable<any>{
    const token = this.LoginService.getIdToken();
    const url_modificar = `${this.url}datos/${llave}.json?auth=${token}`
    return this.httpCliente.put(url_modificar,producto);
  }
  eliminarProducto(llave: string): Observable<any> {
    const token = this.LoginService.getIdToken();
    const url_eliminar = `${this.url}datos/${llave}.json?auth=${token}`
    return this.httpCliente.delete(url_eliminar);
  }
}
