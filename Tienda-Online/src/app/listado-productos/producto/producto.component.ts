import { Component, Input } from '@angular/core';
import { producto } from './producto.model';
import { ServicioService } from '../../Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  @Input() produc!: producto;

  constructor(private productoservice: ServicioService, private router: Router) {}

  EditarProducto(id: number) {
    this.router.navigate(['/editar',id]);
  }
}
