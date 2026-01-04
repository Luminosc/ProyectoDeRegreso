import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.component.html',
  styleUrl: './ejemplo-pipes.component.css'
})
export class EjemploPipesComponent {
  empleados = [
    {nombre: 'Ricardo Suarez', sueldo: 12000, fechaNacimiento: new Date('2000-04-28')},
    {nombre: 'Fernando Orozco', sueldo: 20000, fechaNacimiento: new Date('2000-04-28')}
  ]
}
