import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomasTitulosComponent } from './diplomas-titulos.component';
import { ListaDiplomasComponent } from './diplomas-bachiller/lista-diplomas/lista-diplomas.component';
import { DiplomasBachillerComponent } from './diplomas-bachiller/diplomas-bachiller.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { TomosDtComponent } from './tomos-dt/tomos-dt.component';

const routes: Routes = [
  {
    path: '',
    component: DiplomasTitulosComponent,
    children: [
      {
        path: 'overview/:uuid/:id',
        component: DiplomasBachillerComponent,
      },
      {
        path: 'buscador',
        component: BuscadorComponent,
      },
      {
        path:'tomos/:uuid',
        component:TomosDtComponent
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomasTitulosRoutingModule {}
