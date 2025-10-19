import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Prueba de Interpolación';
  usuarios = {
    nombre: 'Fernando Orozco',
    edad: 25
  };

  saludar()
  {
    return `Hola ${this.usuarios.nombre} \n`;
  }
}
