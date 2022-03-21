import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiplomaService } from './lista-diplomas/services/diploma.service';


@Component({
  selector: 'app-diplomas-bachiller',
  templateUrl: './diplomas-bachiller.component.html',
  styleUrls: ['./diplomas-bachiller.component.scss']
})
export class DiplomasBachillerComponent implements OnInit {
  
  uuid:any
  tipo:any
  bandera:boolean =false
  constructor( private router:ActivatedRoute, private location:Location, private diplomaService:DiplomaService) { }

  ngOnInit(): void {
    this.router.params.subscribe((r) =>{
      this.diplomaService.getSectionByUuid(r.uuid).subscribe((e)=> this.tipo = e)
    })
  }

back():void{
  // this.router.navigate(['crafted/diplomas/tomos'])

  this.location.back()
}
cambiarValor(){
  this.bandera =true
}
}
