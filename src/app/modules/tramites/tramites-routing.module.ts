import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { ListaTramitesComponent } from './tramites.component';

const routes: Routes = [
  {
    path: '',
    component: ListaTramitesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListComponent,
      },
      /*{
        path: 'create',
        component: CreateComponent,
        data: { returnUrl: window.location.pathname },
      },*/
     
       
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
  
})
export class TramitesRoutingModule {}
