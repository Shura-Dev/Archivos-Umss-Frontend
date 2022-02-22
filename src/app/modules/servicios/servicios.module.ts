import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfiguracionesComponent} from './configuraciones/configuraciones.component';
import {TramitesComponent} from './tramites/tramites.component';
import {ReportesComponent} from './reportes/reportes.component';
import {ServiciosComponent} from './servicios.component';
import {ServiciosRoutingModule} from "./servicios-routing.module";

@NgModule({
  declarations: [
    ConfiguracionesComponent,
    TramitesComponent,
    ReportesComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule {
}
