import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { DiplomaService } from '../../diplomas-bachiller/lista-diplomas/services/diploma.service';
@Component({
  selector: 'app-listar-tomos',
  templateUrl: './listar-tomos.component.html',
  styleUrls: ['./listar-tomos.component.scss']
})
export class ListarTomosComponent implements OnInit {
  @Input()uuidTipo:any
  tomos:any
  dataSection:any
  suscription: Subscription
  constructor( private diplomaService:DiplomaService, private route:ActivatedRoute, private router:Router, private location:Location ) { }

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
        console.log(section.type_id)
        this.diplomaService.getTomoByUuid(section.type_id).subscribe((tomo:any)=>{
            this.tomos = tomo
        })
        // this.diplomaService.getTomoByUuid(section.type_id).subscribe(tomo =>{
        //   console.log(diploma.uuid + ' asdasd')
        //   console.log(tomo)
        // })
        // this.diplomaService.getAllDiplomas(section.type_id).subscribe((d:any[])=>{
        //   console.log(d)
        //   const byUuid = d.filter((e) => e.typeFileDTO.type_id === section.type_id)
        //   console.log(byUuid)
        //   this.diplomas = byUuid
        // })
        })
    })

  }
detailTomo(id_file:any){
  console.log('clicked faculty');
  // this.facultyClicked.emit(faculty);
  this.router.navigate(['/crafted/diplomas/overview/',this.uuidTipo,id_file], {relativeTo: this.route});
}
deleteTomo(id:any){
  this.diplomaService.deleteTomo(id).subscribe(() => {
    this.getData()
  })
}

}
