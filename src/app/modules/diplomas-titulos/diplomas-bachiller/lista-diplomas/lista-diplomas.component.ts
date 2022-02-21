import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

@Component({
  selector: 'app-lista-diplomas',
  templateUrl: './lista-diplomas.component.html',
  styleUrls: ['./lista-diplomas.component.scss']
})
export class ListaDiplomasComponent implements OnInit {
  diplomas:any
  dataSection:any
  constructor( private diplomaService:DiplomaService, private route:ActivatedRoute, private ref:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe((diploma)=>{
      this.diplomaService.getSectionByUuid(diploma.uuid)
        .subscribe((section)=>{
            this.dataSection=section
        })
    })
    this.diplomaService.getAllDiplomas().subscribe((d:any[])=>{
      this.diplomas = d
    })
    this.ref.markForCheck()
  }
delete(diploma:DiplomaService ){
  this.diplomaService
}
}
