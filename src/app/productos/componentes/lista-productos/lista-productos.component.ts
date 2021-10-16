import { Producto } from './../../../modelos/producto.interface';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  loading: boolean = true;
  productos: Producto[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.loading = true;
    this.http.get<Producto[]>(environment.apiStore + 'products').subscribe(response => {
      console.log(response);
      this.productos = response;
      this.loading = false;
    });
  }

}
