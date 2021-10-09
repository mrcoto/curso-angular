import { DetalleAve } from './data/detalle-ave.interface';
import { Ave } from './data/lista-ave.interface';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-aves',
  templateUrl: './lista-aves.component.html',
  styleUrls: ['./lista-aves.component.css']
})
export class ListaAvesComponent implements OnInit {

  inputBusqueda: string = '';
  apiAves: string = environment.apiAves;

  cargandoAves: boolean = false;
  aves: Ave[] = [];
  avesFiltradas: Ave[] = [];

  cargandoDetalleAve: boolean = false;
  detalleAve!: DetalleAve;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.cargarAvesDeApi();
  }

  inputCambiado(event: any) {
    this.inputBusqueda = event.target.value;
    // console.log('event', event);
    console.log('input cambiado', this.inputBusqueda);
  }

  buscarAve() {
    console.log('buscando ave...', this.inputBusqueda);
    this.avesFiltradas = this.aves.filter(
      // chincol: chinc, true | col, true | '', true
      ave => ave.name.spanish.toLowerCase().includes(this.inputBusqueda)
    );
  }

  cargarAvesDeApi() {
    this.cargandoAves = true;
    this.http.get<Ave[]>(this.apiAves).subscribe(respuesta => {
      this.aves = respuesta;
      this.avesFiltradas = this.aves;
      this.cargandoAves = false;
    });
  }

  cargarDetalleAve(ave: Ave) {
    this.cargandoDetalleAve = true;
    console.log('ave clickeada', ave);
    console.log('cargando detalles de la ave');
    this.http.get<DetalleAve>(this.apiAves + '/' + ave.uid).subscribe(respuesta => {
      this.detalleAve = respuesta;
      this.cargandoDetalleAve = false;
    });
  }

  tieneIucn(ave: DetalleAve): boolean {
    return ave.iucn != null && ave.iucn.title != null && ave.iucn.description != null;
  }

}
