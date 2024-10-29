import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { AccesoRolComponent } from './componentes/acceso-rol/acceso-rol.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { EditorialComponent } from './componentes/editorial/editorial.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { LibroComponent } from './componentes/libro/libro.component';
import { RolComponent } from './componentes/rol/rol.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'acceso',
        component: AccesoComponent,
        title: 'Acceso'
    },
    {
        path: 'acceso-rol',
        component: AccesoRolComponent,
        title: 'Acceso rol'
    },
    {
        path: 'autor',
        component: AutorComponent,
        title: 'Autor'
    },
    {
        path: 'categoria',
        component: CategoriaComponent,
        title: 'Categororia'
    },
    {
        path: 'editorial',
        component: EditorialComponent,
        title: 'Editorial'
    },
    {
        path: 'empleado',
        component: EmpleadoComponent,
        title: 'Empleado'
    },
    {
        path: 'libro',
        component: LibroComponent,
        title: 'Libro'
    },
    {
        path: 'rol',
        component: RolComponent,
        title: 'Rol'
    },
    {
        path: 'seccion',
        component: SeccionComponent,
        title: 'Seccion'
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
