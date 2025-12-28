import { Component, Input } from '@angular/core';
import { producto } from './producto.model';
import { ServicioService } from '../../Service/servicio.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  @Input() produc!: producto;

  constructor(private productoservice: ServicioService) {}

  emitirDetalleProducto() {
    this.productoservice.detalleProductoEmiter.emit(this.produc);
  }
}
