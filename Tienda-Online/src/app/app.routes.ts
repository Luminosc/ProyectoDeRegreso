import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { FormularioProductosComponent } from './listado-productos/formulario-productos/formulario-productos.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { GuardianService } from './Service/guardian.service';

export const routes: Routes = [
  {
    path: '',
    component: ListadoProductosComponent,
    canActivate: [GuardianService],
  },
  {
    path: 'listado',
    component: ListadoProductosComponent,
    canActivate: [GuardianService],
  },
  {
    path: 'agregar',
    component: FormularioProductosComponent,
    canActivate: [GuardianService],
  },
  {
    path: 'editar/:llave',
    component: FormularioProductosComponent,
    canActivate: [GuardianService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent
  },
];
