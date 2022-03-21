import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiplomaService } from '../diplomas-bachiller/lista-diplomas/services/diploma.service';

@Component({
  selector: 'app-tomos-dt',
  templateUrl: './tomos-dt.component.html',
  styleUrls: ['./tomos-dt.component.scss']
})
export class TomosDtComponent implements OnInit {
 uuid:any
  tipo:any
constructor( private router:ActivatedRoute, private location:Location, private diplomaService:DiplomaService) { }

  ngOnInit(): void {
    this.router.params.subscribe((r) =>{
      this.uuid = r.uuid
      this.diplomaService.getSectionByUuid(r.uuid).subscribe((e)=> this.tipo = e)
    })
  }

back():void{
  // this.router.navigate(['crafted/diplomas/tomos'])

  this.location.back()
}

}
