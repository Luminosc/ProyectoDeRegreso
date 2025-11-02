import { Component } from "@angular/core";

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  private titulo ="Titulo Componente Hijo";
  
  //Getter de TypeScript
  get mostrarTitulo(){
    return this.titulo;
  }

  //Getter de Java
  getTitulo()
  {
    return this.titulo
  }
}
