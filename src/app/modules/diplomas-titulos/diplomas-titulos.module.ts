import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule} from 'ng-inline-svg'
import { DiplomasTitulosComponent } from './diplomas-titulos.component';
import { ListaDiplomasComponent } from './diplomas-bachiller/lista-diplomas/lista-diplomas.component';
import { DiplomasTitulosRoutingModule } from './diplomas-titulos-routing.module';
import { DiplomasBachillerComponent } from './diplomas-bachiller/diplomas-bachiller.component';
import { ModalDetalleComponent } from './diplomas-bachiller/lista-diplomas/components/modal-detalle/modal-detalle.component';
import { ModalRegistroComponent } from './diplomas-bachiller/lista-diplomas/components/modal-registro/modal-registro.component';
import { PdfViewerModule } from 'ng2-pdf-viewer'
import { ReactiveFormsModule } from '@angular/forms';
import { ModalObservacionesComponent } from './diplomas-bachiller/lista-diplomas/components/modal-observaciones/modal-observaciones.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ModalEditarComponent } from './diplomas-bachiller/lista-diplomas/components/modal-editar/modal-editar.component';
import { TomosDtComponent } from './tomos-dt/tomos-dt.component';
import { CreateTomoComponent } from './tomos-dt/create-tomo/create-tomo.component';
import { ListarTomosComponent } from './tomos-dt/listar-tomos/listar-tomos.component';
import { EditTomoComponent } from './tomos-dt/edit-tomo/edit-tomo.component';

@NgModule({
  declarations: [
    DiplomasTitulosComponent,
    ListaDiplomasComponent,
    DiplomasBachillerComponent,
    ModalDetalleComponent,
    ModalRegistroComponent,
    ModalObservacionesComponent,
    BuscadorComponent,
    ModalEditarComponent,
    TomosDtComponent,
    CreateTomoComponent,
    ListarTomosComponent,
    EditTomoComponent,
  ],
  imports: [
    CommonModule,
    DiplomasTitulosRoutingModule,
    InlineSVGModule,
    ReactiveFormsModule,
    PdfViewerModule
  ]
})
export class DiplomasTitulosModule { }
