import { Routes } from '@angular/router';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { Component } from '@angular/core';
import { FormularioProductosComponent } from './listado-productos/formulario-productos/formulario-productos.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: ListadoProductosComponent
  },
  {
    path: 'listado',
    component: ListadoProductosComponent
  },
  {
    path: 'agregar',
    component: FormularioProductosComponent
  },
  {
    path: 'editar/:id',
    component: FormularioProductosComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];
