import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServiciosComponent} from "./servicios.component";
import {ConfiguracionesComponent} from "./configuraciones/configuraciones.component";
import {TramitesComponent} from "./tramites/tramites.component";
import {ReportesComponent} from "./reportes/reportes.component";

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent,
    children: [
      {
        path: 'configuraciones',
        component: ConfiguracionesComponent,
      },
      {
        path: 'tramites',
        component: TramitesComponent,
      },
      {
        path: 'reportes',
        component: ReportesComponent
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
