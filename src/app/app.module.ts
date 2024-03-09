import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './dni/dni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    ProductoDetalleComponent,
    DniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Formulario de tipo plantilla 
    ReactiveFormsModule // Formulario de tipo reactivo 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
