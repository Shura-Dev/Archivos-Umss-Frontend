import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigDTComponent } from './config-dt/config-dt.component';
import { CreateCountriesComponent } from './config-dt/create-countries/create-countries.component';
import { CrudDTComponent } from './config-dt/crud-dt/crud-dt.component';
import { ConfigurationsComponent } from './configurations.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationsComponent,
    children: [
      {
        path: '',
        component: ConfigDTComponent,
      },
      {
        path: 'crud/:uuid',
        component: CrudDTComponent,
      },
      {
        path: 'countries',
        component: CreateCountriesComponent,
      },
      { path: '', redirectTo: 'configuraciones', pathMatch: 'full' },
      { path: '**', redirectTo: 'configuraciones', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {}
