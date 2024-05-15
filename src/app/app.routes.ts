import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactosComponent } from './page/contactos/contactos.component';
import { FormularioSuscriptorComponent } from './page/formulario-suscriptor/formulario-suscriptor.component';
import { ProductosServiciosComponent } from './page/productos-servicios/productos-servicios.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { InfoproductosComponent } from './page/infoproductos/infoproductos.component';
import { Error404Component } from './page/error404/error404.component';
import { EditarComponent } from './page/editar/editar.component';
import { Registro2Component } from './page/registro2/registro2.component';
import { RegistroComponent } from './page/registro/registro.component';
import { LoginComponent } from './page/login/login.component';
import { privadoGuard } from './guards/privado.guard';
import { loginGuard, registroGuard } from './guards/login.guard';

export const routes: Routes = [
    {path : "home", component:HomeComponent},
    {path : "contactos", component:ContactosComponent},
    {path : "formulario", component:FormularioSuscriptorComponent},
    {path : "productos", component:ProductosServiciosComponent,canActivate:[loginGuard]},
    {path : "nosotros", component:NosotrosComponent},
    {path : "editar/:idNosotros", component:EditarComponent},

    {path : 'info/:idProducto',component:InfoproductosComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component},

    { path: 'login', component: LoginComponent ,canActivate:[privadoGuard]},
    { path: 'registro', component: RegistroComponent,canMatch:[registroGuard]},
    //{ path: 'privado', component: PrivadoComponent,canActivate:[loginGuard]},
    { path: 'registro', component: Registro2Component},
];
