import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TramitesComponent} from './tramites/tramites.component';
import {ReportesComponent} from './reportes/reportes.component';
import {ServiciosComponent} from './servicios.component';
import {ServiciosRoutingModule} from "./servicios-routing.module";
import {InlineSVGModule} from "ng-inline-svg";
import { CrearConfiguracionesComponent } from './configuraciones/components/crear-configuraciones.component';
import {ListaConfiguracionesComponent} from "./configuraciones/lista-configuraciones.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ListaConfiguracionesComponent,
    TramitesComponent,
    ReportesComponent,
    ServiciosComponent,
    CrearConfiguracionesComponent
  ],
    imports: [
        CommonModule,
        ServiciosRoutingModule,
        InlineSVGModule,
        ReactiveFormsModule
    ]
})
export class ServiciosModule {
}
