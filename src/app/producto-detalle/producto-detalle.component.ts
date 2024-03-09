import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaProductos, Productos } from '../productos/productos.mock';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {

  product?: Productos;
  ListaProductos: Productos[] = ListaProductos
  loading: boolean = true;
  color: string = '';
  
  constructor(private _route: ActivatedRoute){}

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe( params => {this.product = this.ListaProductos.find(product => product.id == params ['productoId']);
        // this.color = params['categoria'];
        this.color = this.product?.price as number > 551 ? 'red' : '';
        this.loading = false;
      });
    }, 1500);
  }



}
