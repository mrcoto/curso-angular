import { CarroService } from './../../../../../../servicios/carro/carro.service';
import { Producto } from './../../../../modelos/producto.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-lista-producto',
  templateUrl: './detalle-lista-producto.component.html',
  styleUrls: ['./detalle-lista-producto.component.css']
})
export class DetalleListaProductoComponent implements OnInit {

  @Input() producto!: Producto;

  constructor(
    private carroService: CarroService
  ) { }

  ngOnInit(): void {
  }

  agregarAlCarro() {
    this.carroService.agregarProducto(this.producto);
  }

  quitarUnAUnidadDelCarro() {
    console.log('tarea');
  }

  quitarLineaDelCarro() {
    console.log('tarea');
  }

}
