import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomasTitulosComponent } from './diplomas-titulos.component';
import { ListaDiplomasComponent } from './diplomas-bachiller/lista-diplomas/lista-diplomas.component';
import { DiplomasBachillerComponent } from './diplomas-bachiller/diplomas-bachiller.component';
import { BuscadorComponent } from './buscador/buscador.component';

const routes: Routes = [
  {
    path: '',
    component: DiplomasTitulosComponent,
    children: [
      {
        path: 'overview',
        component: DiplomasBachillerComponent,
      },
      {
        path: 'buscador',
        component: BuscadorComponent,
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
