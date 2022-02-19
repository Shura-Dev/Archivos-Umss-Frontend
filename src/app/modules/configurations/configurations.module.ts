import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';



@NgModule({
  declarations: [
    ConfigurationsComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    InlineSVGModule
  ]
})
export class ConfigurationsModule { }
