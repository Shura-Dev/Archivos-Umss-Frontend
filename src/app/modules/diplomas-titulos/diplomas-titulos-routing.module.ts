import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomasTitulosComponent } from './diplomas-titulos.component';
import { ListaDiplomasComponent } from './diplomas-bachiller/lista-diplomas/lista-diplomas.component';
import { DiplomasBachillerComponent } from './diplomas-bachiller/diplomas-bachiller.component';
import { ListarTomosComponent } from './diplomas-bachiller/listar-tomos/listar-tomos.component';

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
        path: 'tomo',
        component: ListarTomosComponent,
      },
      { path: '', redirectTo: 'tomo', pathMatch: 'full' },
      { path: '**', redirectTo: 'tomo', pathMatch: 'full' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiplomasTitulosRoutingModule {}
