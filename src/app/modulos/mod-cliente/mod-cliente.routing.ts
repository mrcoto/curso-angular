import { ModClienteComponent } from './mod-cliente.component';
import { Route } from "@angular/router";
import { InicioComponent } from "./paginas/inicio/inicio.component";

export const MOD_CLIENTE_ROUTES: Route[] = [
  {
    path: '',
    component: ModClienteComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'lista-carro',
        loadChildren: () => import('./paginas/lista-carro/lista-carro.module').then(m => m.ListaCarroModule)
      }
    ]
  }
]