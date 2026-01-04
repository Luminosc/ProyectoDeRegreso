import { Injectable, numberAttribute } from '@angular/core';
import { totalmem } from 'os';

interface Movimimiento {
  concepto: string;
  cantidad: number;
  porcentaje: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor() {}

  Ingresos: Movimimiento[] = [];
  Egresos: Movimimiento[] = [];
  Total: number = 0;
  TotalIngresos: number = 0;
  TotalEgresos: number = 0;
  porcentajeTotal: number = 0;
  porcentajeIngresos: number = 0;
  porcentajeEgresos: number = 0;

  agregarIngreso(cantidad: number, concepto: string) {
    let porcentaje = this.porcentaje(cantidad);
    this.Ingresos.push({ concepto, cantidad, porcentaje });
    this.calcularTotal();
    this.calcularingresos();
  }

  agregarEgreso(cantidad: number, concepto: string) {
    let porcentaje = this.porcentaje(cantidad);
    this.Egresos.push({ concepto, cantidad, porcentaje });
    this.calcularTotal();
    this.calcularEgresos();
  }
  porcentaje(cantidad: number) {
    return Number((cantidad * 100) / this.Total);
  }

  calcularTotal() {
    const totalIngresos = this.Ingresos.reduce(
      (acc, valor) => acc + valor.cantidad,
      0
    );
    const totalEgresos = this.Egresos.reduce(
      (acc, valor) => acc + valor.cantidad,
      0
    );

    this.Total = totalIngresos - totalEgresos;
    this.porcentajeTotal = (this.TotalEgresos / 100) * this.Total;
  }

  calcularingresos() {
    const totalIngresos = this.Ingresos.reduce(
      (acc, valor) => acc + valor.cantidad,
      0
    );

    this.TotalIngresos = totalIngresos;
  }
  calcularEgresos() {
    const totalEgresos = this.Egresos.reduce(
      (acc, valor) => acc + valor.cantidad,
      0
    );

    this.TotalEgresos = totalEgresos;
  }
}
