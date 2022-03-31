import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SolicitudOnlineComponent} from './solicitud-online.component';
import {SolicitudExampleComponent} from './components/solicitud-example/solicitud-example.component';
import {RouterModule} from "@angular/router";
import {SolicitudOnlineRoutingModule} from "./solicitud-online-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {LayoutModule} from "../../_metronic/layout";
import {InlineSVGModule} from "ng-inline-svg";


@NgModule({
  declarations: [
    SolicitudExampleComponent,
    SolicitudOnlineComponent
  ],
  imports: [
    CommonModule,
    SolicitudOnlineRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatIconModule,
    LayoutModule,
    InlineSVGModule
  ]
})
export class SolicitudOnlineModule {
}
