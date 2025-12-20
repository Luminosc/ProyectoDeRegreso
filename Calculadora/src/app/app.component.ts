import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isNumberObject } from 'util/types';
import { FormsModule } from '@angular/forms';
import { ValoresComponent } from './valores/valores.component';
import { ResultadoComponent } from './resultado/resultado.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,ValoresComponent,ResultadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora';
  Resultado: number = 0;
  procesarRresultado(resultado: number)
  {
    this.Resultado = resultado;
  }
}
