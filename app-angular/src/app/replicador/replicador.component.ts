import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  texto: String ="";
  actualizarTexto(evento: Event)
  {
    const elementeoInput = evento.target as HTMLInputElement;
    this.texto = elementeoInput.value;
  }
}
