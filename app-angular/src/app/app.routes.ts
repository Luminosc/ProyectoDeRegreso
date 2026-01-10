import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { MostrarMensajeComponent } from './mostrar-mensaje/mostrar-mensaje.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './padre/hijo/hijo.component';
//es encerio que chatGPT me la dejo tan dificil?
export const routes: Routes = [
    {
        path: '',
        component: ListadoUsuariosComponent
    },
    {
        path: 'mostrar-mensaje',
        component: MostrarMensajeComponent
    },
    {
        path: 'configuracion',children:[
            {
                path:'padre', component: PadreComponent
            },
            {
                path:'hijo', component: HijoComponent
            }
        ]
    }
];
