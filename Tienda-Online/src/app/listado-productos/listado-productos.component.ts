import { Component, ViewChild } from '@angular/core';
import { ProductoComponent } from './producto/producto.component';
import { producto } from './producto/producto.model';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
import { ServicioService } from '../Service/servicio.service';
export interface datos {
  producto: string;
  precio: number;
}
@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [FormularioProductosComponent, ProductoComponent],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css',
})
export class ListadoProductosComponent {

  productos: producto[] = [];

  @ViewChild(FormularioProductosComponent)
  formulario!: FormularioProductosComponent;

  constructor(private servicio: ServicioService) {
    this.servicio.detalleProductoEmiter.subscribe(
      (producto: producto) =>
        alert(`producto: ${producto.Description}, $${producto.Precio}`)
    );
  }

  ngOnInit() {
    this.productos = this.servicio.producto;
  }
}
