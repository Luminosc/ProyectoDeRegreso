import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./new-component/new-component.component";
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponentComponent, ComponenteEnLineaComponent, InterpolacionComponent, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo, aquí de vuelta en Angular';
}
