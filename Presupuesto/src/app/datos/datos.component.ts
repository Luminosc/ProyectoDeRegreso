import { Component } from '@angular/core';
import { ServicioService } from '../Servicio/servicio.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';

interface Movimimiento {
  concepto: string;
  cantidad: number;
  porcentaje: number;
}


@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css',
})
export class DatosComponent {
  constructor(public servicio: ServicioService) {}

  eliminarIngreso(egreso: Movimimiento) {
    const indice: number = this.servicio.Ingresos.indexOf(egreso);
    this.servicio.Ingresos.splice(indice,1)
    this.servicio.calcularTotal();
    this.servicio.calcularingresos();
    this.servicio.calcularEgresos();
  }
  eliminarEgreso(ingresos: Movimimiento) {
    const indice: number = this.servicio.Egresos.indexOf(ingresos)
    this.servicio.Egresos.splice(indice,1)
    this.servicio.calcularTotal();
    this.servicio.calcularingresos();
    this.servicio.calcularEgresos();
  }
}
