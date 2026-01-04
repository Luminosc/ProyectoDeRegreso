import { Component } from '@angular/core';
import { CabeceroComponent } from "./cabecero/cabecero.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { DatosComponent } from "./datos/datos.component";
import { LOCALE_ID } from '@angular/core';
import localEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
//Registro de datos de localización
registerLocaleData(localEs,'es')

@Component({
  selector: 'app-root',
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  imports: [CabeceroComponent, FormularioComponent, DatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Presupuesto';
}
