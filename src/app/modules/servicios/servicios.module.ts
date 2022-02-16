import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios.component';
import {ServiciosRoutingModule} from "./servicios-routing.module";
import {CreateComponent} from "./components/create/create.component";
import {ListComponent} from "./components/list/list.component";



@NgModule({
  declarations: [
    ServiciosComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})

export class ServiciosModule { }
