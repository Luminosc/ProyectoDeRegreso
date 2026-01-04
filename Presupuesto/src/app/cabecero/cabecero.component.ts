import { Component } from '@angular/core';
import { ServicioService } from '../Servicio/servicio.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';
@Component({
  selector: 'app-cabecero',
  imports: [CurrencyPipe,PercentPipe],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {

  

  constructor(public servicio: ServicioService)
  {
  }
}
