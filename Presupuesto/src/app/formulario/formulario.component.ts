import { Component } from '@angular/core';
import { ServicioService } from '../Servicio/servicio.service';
import { FormsModule } from '@angular/forms';
import test from 'node:test';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  concepto: string = '';
  cantidad: number = 0;
  Opcion: string = '';
  constructor(private servicio: ServicioService) {}

  
  ejecutar() {
    if (this.cantidad === 0 || this.concepto.trim() === '') {
      return;
    }

    switch (this.Opcion) {
      case 'ingresoOperacion':
        this.servicio.agregarIngreso(this.cantidad, this.concepto);
        break;

      case 'egresoOperacion':
        this.servicio.agregarEgreso(this.cantidad, this.concepto);
        break;
    }
  }
}
