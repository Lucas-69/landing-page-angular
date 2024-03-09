import { Component } from '@angular/core';
import { ListaProductos } from './productos.mock';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  ListaProductos = ListaProductos;
}
