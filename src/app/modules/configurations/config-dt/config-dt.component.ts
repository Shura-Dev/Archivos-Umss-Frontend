import { Component, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable, Subscription } from 'rxjs';
import { DiplomaService } from '../../diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';

@Component({
  selector: 'app-config-dt',
  templateUrl: './config-dt.component.html',
  styleUrls: ['./config-dt.component.scss']
})
export class ConfigDTComponent implements OnInit,OnDestroy {
@Input() color: string = '';

organization:any=[]
suscription:Subscription

  constructor( private route:ActivatedRoute, private router: Router, private diplomaService: DiplomaService) {
    
   }
  
  ngOnInit(): void {
    // const params = this.route.snapshot.params
    // const uuidDT = params['uuid']
    // console.log('config list', uuidDT)
    this.getData()
    this.suscription = this.diplomaService.refresh$.subscribe(()=>{
      this.getData()
    })
    
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.suscription.unsubscribe()
    console.log('suscripcion cerrada')
  }
  getData(){
    this.diplomaService.getAllSection().subscribe((sections:any)=>{
      this.organization = [...sections];
    })

  }
}
