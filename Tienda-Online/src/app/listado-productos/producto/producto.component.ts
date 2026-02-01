import { Component, Input } from '@angular/core';
import { producto } from './producto.model';
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
  @Input() llave!: string;
  constructor(private router: Router) {}

  EditarProducto() {
    this.router.navigate(['/editar',this.llave]);
  }
}
