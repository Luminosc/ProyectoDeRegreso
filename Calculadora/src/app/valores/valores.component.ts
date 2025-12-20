import { Component,EventEmitter,numberAttribute,output,Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-valores',
  imports: [FormsModule],
  templateUrl: './valores.component.html',
  styleUrl: './valores.component.css',
})
export class ValoresComponent {
  /*ValorA: string= '';
  ValorB: string= '';
  @Output() OValorA = new EventEmitter<string>();
  @Output() OValorB = new EventEmitter<string>();
  enviar ()
  {
    this.OValorA.emit(this.ValorA);
    this.OValorB.emit(this.ValorB);
  }
  actualizarA(evento: Event)
  {
    const elementeoInput = evento.target as HTMLInputElement;
    this.ValorA = elementeoInput.value;
  }
  actualizarB(evento: Event)
  {
    const elementeoInput = evento.target as HTMLInputElement;
    this.ValorB = elementeoInput.value;
  }*/

  ValorA :number | null = null;
  ValorB :number | null = null;
@Output() resultadoSuma = new EventEmitter<number>();
  sumar(): void
  {
    if(this.ValorA && this.ValorB)
    {
      const Resultado = this.ValorA + this.ValorB;
      this.resultadoSuma.emit(Resultado);
    }
    else{
      console.log('Deben introducir valores correctos');
    }
  }
}
