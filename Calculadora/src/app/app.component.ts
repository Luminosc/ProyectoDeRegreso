import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isNumberObject } from 'util/types';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  ValorA :number = 0;
  ValorB :number = 0;
  Resultado: number = 0;

  Sumar()
  {
    this.Resultado = this.ValorA + this.ValorB;
  }
}
