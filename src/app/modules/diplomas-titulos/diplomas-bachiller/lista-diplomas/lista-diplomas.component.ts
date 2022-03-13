import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

@Component({
  selector: 'app-lista-diplomas',
  templateUrl: './lista-diplomas.component.html',
  styleUrls: ['./lista-diplomas.component.scss']
})
export class ListaDiplomasComponent implements OnInit,OnDestroy {
  diplomas:any
  dataSection:any
  suscription: Subscription
  constructor( private diplomaService:DiplomaService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
    this.suscription = this.diplomaService.refresh$.subscribe(()=>{
      this.getData()
    })
  }
  ngOnDestroy(): void {
      this.suscription.unsubscribe()
      console.log('se cierra la suscripcion')
  }
  getData(){
    this.route.params.subscribe((diploma)=>{
      this.diplomaService.getSectionByUuid(diploma.uuid)
      .subscribe((section)=>{
        this.dataSection=section
        this.diplomaService.getAllDiplomas(section.type_id).subscribe((d:any[])=>{
          console.log(d)
          const byUuid = d.filter((e) => e.typeFileDTO.type_id === section.type_id)
          console.log(byUuid)
          this.diplomas = byUuid
        })
        })
    })

  }
delete(diploma:DiplomaService ){
  this.diplomaService
}
}
