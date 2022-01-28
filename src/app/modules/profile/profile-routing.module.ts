import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile.component';
import { ConnectionsComponent } from './connections/connections.component';
import { TomosComponent } from './tomos/tomos.component';
import { CertificadoacademicoComponent } from './certificadoacademico/certificadoacademico.component';
import { TituloprofesionalComponent } from './tituloprofesional/tituloprofesional.component';
import { DiplomadoComponent } from './diplomado/diplomado.component';
import { TituloposgradoComponent } from './tituloposgrado/tituloposgrado.component';
import { RevalidaComponent } from './revalida/revalida.component';
import { CertificadosupletorioComponent } from './certificadosupletorio/certificadosupletorio.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'tomos',
        component: TomosComponent,
      },
      {
        path: 'certificado-academico',
        component: CertificadoacademicoComponent,
      },
      {
        path: 'titulo-profesional',
        component: TituloprofesionalComponent,
      },
      {
        path: 'diplomado',
        component: DiplomadoComponent,
      },
      {
        path: 'titulo-posgrado',
        component: TituloposgradoComponent,
      },
      {
        path: 'revalida',
        component: RevalidaComponent,
      },
      {
        path: 'certificado-supletorio',
        component: CertificadosupletorioComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'campaigns',
        component: CampaignsComponent,
      },
      {
        path: 'documents',
        component: DocumentsComponent,
      },
      {
        path: 'connections',
        component: ConnectionsComponent,
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
export class ProfileRoutingModule {}
