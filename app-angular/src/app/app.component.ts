import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./new-component/new-component.component";
import { ComponenteEnLineaComponent } from "./componente-en-linea/componente-en-linea.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from './hijo/hijo.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { ReplicadorComponent } from './replicador/replicador.component';
import { SaludarComponent } from './saludar/saludar.component';
import { ComponenteIfComponent } from './componente-if/componente-if.component';
import { AgregarTareaComponent } from "./agregar-tarea/agregar-tarea.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";
import { ViewchildComponent } from "./viewchild/viewchild.component";
import { MensajeService } from './mensaje.service';
import { ListadoUsuariosComponent } from "./listado-usuarios/listado-usuarios.component";
import { EjemploPipesComponent } from "./ejemplo-pipes/ejemplo-pipes.component";
import { LOCALE_ID } from '@angular/core';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NavegacionComponent } from "./navegacion/navegacion.component";
//Registro de datos de localización
registerLocaleData(localEs,'es')

@Component({
  selector: 'app-root',
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [RouterOutlet,
    NewComponentComponent,
    ComponenteEnLineaComponent,
    InterpolacionComponent,
    PadreComponent,
    HijoComponent,
    MostrarMensajeComponent,
    ReplicadorComponent,
    SaludarComponent,
    ComponenteIfComponent, AgregarTareaComponent, ComponenteForComponent, ViewchildComponent, ListadoUsuariosComponent, EjemploPipesComponent, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo, aquí de vuelta en Angular';

  mensaje: string;

  constructor(mensajeService: MensajeService){
    this.mensaje = mensajeService.obtenerMensaje();
  }
}
