import { Component } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { producto } from './producto/producto.model';
import { ServicioService } from '../Service/servicio.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
export interface datos {
  producto: string;
  precio: number;
}
@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {
  productos: {[llave:string]: producto} = {};
  productosSubscripcion: Subscription | null = null;

  constructor(private servicio: ServicioService,private router: Router) {

  }

  ngOnInit() {
   this.cargarProductos();
   this.productosSubscripcion = this.servicio.productosActualizados.subscribe((productos)=>{
    this.productos = productos;
   })
  }
  cargarProductos(){
    this.servicio.ListarProductios().subscribe((productos: {[llave:string]: producto})=>{
      this.productos = productos;
      this.servicio.setProductos(productos);
    });
  }
  obtenerllaver(): string[]{
    if (this.productos){
      return Object.keys(this.productos)
    }
    return[]
  }
  AgregarProducto() {
    this.router.navigate(['agregar']);
  }

  ngOnDestroy(): void{
    if(this.productosSubscripcion != null){
      this.productosSubscripcion.unsubscribe();
    }
  }
}
