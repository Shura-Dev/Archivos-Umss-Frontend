import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';
import { ConfigService } from '../../shared/services/config.service';
import Swal from 'sweetalert2'

type Tabs =
  | 'kt_table_widget_8_tab_1'
  | 'kt_table_widget_8_tab_2'
  | 'kt_table_widget_8_tab_3';
@Component({
  selector: 'app-crud-dt',
  templateUrl: './crud-dt.component.html',
  styleUrls: ['./crud-dt.component.scss'],
})
export class CrudDTComponent implements OnInit, OnDestroy {
  antescedentes: number = 1;
  selectSection:any
  countries:any
  suscription:Subscription
  
  constructor( private route: ActivatedRoute, private diplomaService:DiplomaService, private configService:ConfigService) {}
 
  activeTab: Tabs = 'kt_table_widget_8_tab_1';
  dataSection:any
  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getData()
    this.suscription = this.configService.refresh$.subscribe(()=>{
      this.getData()
    })
  }
  ngOnDestroy(): void {
      this.suscription.unsubscribe()
      console.log('se cierra la suscripcion')
  }

getData(){
  this.route.params.subscribe((p)=>{
    this.diplomaService.getSectionByUuid(p.uuid).subscribe((section)=>{
      console.log(section);
      this.dataSection = section
      this.configService.getAllCountries().subscribe((c:any[])=>{
        console.log('idcountries')
        console.log(c)
        const f = c.filter(x => x.typeFileDTO.type_id === section.type_id)
      this.countries =f
      console.log('filter')
      console.log(f) 
    })
    })
  })
  
}
deleteC(id:any){
  this.configService.deleteCountry(id).subscribe((s: any) => {
    Swal.fire(
      'Se Desactivo Correctamente'
    )
  });
}
activatedCountry(id:any){[
this.configService.activatedCountry(id).subscribe((s: any) => {
    Swal.fire(
      'Se Activo Correctamente'
    )
  })
]}

}
