import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
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
  diplomas2:any
  dataSection:any
  suscription: Subscription
  param:any
  @Input() bandera:any
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
      this.param=diploma
      this.diplomaService.getSectionByUuid(diploma.uuid)
      .subscribe((section)=>{
        this.dataSection=section
        this.diplomaService.getAllDiplomas(section.type_id).subscribe((d:any[])=>{
          // console.log(d)
          const byUuid = d.filter((e) => e.typeFileDTO.type_id === section.type_id && e.groupFileDTO ===null)
          console.log('q es esto.')
          console.log(byUuid)
          this.diplomas = byUuid
          const byUuid2 = d.filter((e) => e.typeFileDTO.type_id === section.type_id && e.groupFileDTO !==null && e.groupFileDTO.group_file_id === this.param.id)
          console.log('q es esto.')
          console.log(byUuid2)
          this.diplomas2 = byUuid2

        })
        })
    })

  }
delete(diploma:DiplomaService ){
  this.diplomaService
}
enlazarTomo(uuid:any,id:any){
  console.log(uuid, id)
  this.diplomaService.enlazarTomo(uuid, id).subscribe(()=>{
    this.getData()
    console.log('enlazado')
  })
}
}
