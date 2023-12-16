import { Routes } from '@angular/router';
import { ContentComponent } from './componentes/content/content.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProductosComponent } from './componentes/productos/productos.component';

export const routes: Routes = [
    {path:"inicio",component:ContentComponent},
    {path:"acercaDe",component:AcercaDeComponent},
    {path:"productos",component:ProductosComponent}
];
