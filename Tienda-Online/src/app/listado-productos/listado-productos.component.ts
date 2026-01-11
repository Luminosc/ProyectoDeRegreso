import { Component, ViewChild } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { producto } from './producto/producto.model';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { ServicioService } from '../Service/servicio.service';
import { Router } from '@angular/router';
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
  productos: producto[] = [];

  @ViewChild(FormularioProductosComponent)
  formulario!: FormularioProductosComponent;

  constructor(private servicio: ServicioService,private router: Router) {

  }

  ngOnInit() {
    this.productos = this.servicio.producto;
  }
  AgregarProducto() {
    this.router.navigate(['agregar']);
  }
}
