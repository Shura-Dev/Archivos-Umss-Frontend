import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTramitesComponent } from './tramites.component';
import { ListComponent } from './components/list/list.component';
import { TramitesRoutingModule } from './tramites-routing.module';
import { InlineSVGModule} from 'ng-inline-svg'
import { CreatebusquedasComponent } from './components/createbusquedas/createbusquedas.component';
import { EditbusquedasComponent } from './components/editbusquedas/editbusquedas.component';
//import { Tramites } from './services/tramites.service/tramites.service.component';


@NgModule({
  declarations: [
    ListaTramitesComponent,
    CreatebusquedasComponent,
    ListComponent,
    EditbusquedasComponent,
    
  ],
  imports: [
    CommonModule,
    TramitesRoutingModule,
    InlineSVGModule,
    
    
    
  ] ,
  
})
export class TramitesModule { 
 
}


