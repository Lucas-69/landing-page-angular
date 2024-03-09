import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Productos', component: ProductosComponent },
  { path: 'Productos/:productoId', component: ProductoDetalleComponent },
  { path: 'Contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
