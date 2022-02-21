import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

type Tabs =
  | 'kt_table_widget_8_tab_1'
  | 'kt_table_widget_8_tab_2'
  | 'kt_table_widget_8_tab_3';
@Component({
  selector: 'app-crud-dt',
  templateUrl: './crud-dt.component.html',
  styleUrls: ['./crud-dt.component.scss'],
})
export class CrudDTComponent implements OnInit {
  antescedentes: number = 1;
  selectSection:any
  constructor( private route: ActivatedRoute, private diplomaService:DiplomaService) {}
 
  activeTab: Tabs = 'kt_table_widget_8_tab_1';
  dataSection:any

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
  this.route.params.subscribe((p)=>{
    console.log(p.uuid)
    this.diplomaService.getSectionByUuid(p.uuid).subscribe((section)=>{
      console.log(section);
      this.dataSection = section
    })
  })
    // const uuid= this.route.params['type_id'];
    // this.diplomaService.getSectionByUuid(uuid)
    //   .subscribe((section:any) =>{
    //     this.selectSection= section
    //   })
  }


  changePdf(n: number) {
    this.antescedentes = n;
  }
}
