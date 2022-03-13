import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { CrudDTComponent } from './config-dt/crud-dt/crud-dt.component';
import { ConfigDTComponent } from './config-dt/config-dt.component';
import { GenericListModule } from './shared/generic-list/generic-list.module';
import { CreateSectionComponent } from './config-dt/create-section/create-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateCountriesComponent } from './config-dt/create-countries/create-countries.component';
import { EditCountriesComponent } from './config-dt/edit-countries/edit-countries.component';



@NgModule({
  declarations: [
    ConfigurationsComponent,
    ConfigDTComponent,
    CrudDTComponent,
    CreateSectionComponent,
    CreateCountriesComponent,
    EditCountriesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfigurationsRoutingModule,
    InlineSVGModule,
    GenericListModule
  ],

})
export class ConfigurationsModule { }
