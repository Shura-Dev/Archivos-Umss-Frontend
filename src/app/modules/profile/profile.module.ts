import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { OverviewComponent } from './overview/overview.component';
import { ProjectsComponent } from './projects/projects.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ConnectionsComponent } from './connections/connections.component';
import {
  CardsModule,
  DropdownMenusModule,
  WidgetsModule,
} from '../../_metronic/partials';
import { TomosComponent } from './tomos/tomos.component';
import { CertificadoacademicoComponent } from './certificadoacademico/certificadoacademico.component';
import { TituloprofesionalComponent } from './tituloprofesional/tituloprofesional.component';
import { DiplomadoComponent } from './diplomado/diplomado.component';
import { TituloposgradoComponent } from './tituloposgrado/tituloposgrado.component';
import { RevalidaComponent } from './revalida/revalida.component';
import { CertificadosupletorioComponent } from './certificadosupletorio/certificadosupletorio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule} from 'ng2-pdf-viewer'


@NgModule({
  declarations: [
    ProfileComponent,
    OverviewComponent,
    ProjectsComponent,
    CampaignsComponent,
    DocumentsComponent,
    ConnectionsComponent,
    TomosComponent,
    CertificadoacademicoComponent,
    TituloprofesionalComponent,
    DiplomadoComponent,
    TituloposgradoComponent,
    RevalidaComponent,
    CertificadosupletorioComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    ReactiveFormsModule,
    PdfViewerModule,
  ],
})
export class ProfileModule {}
