import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { DiplomaService } from '../shared/diploma.service';

@Component({
  selector: 'app-config-dt',
  templateUrl: './config-dt.component.html',
  styleUrls: ['./config-dt.component.scss']
})
export class ConfigDTComponent implements OnInit {
@Input() color: string = '';

organization:any=[]

  constructor( private route:ActivatedRoute, private router: Router, private diplomaService: DiplomaService, private ref: ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
    // const params = this.route.snapshot.params
    // const uuidDT = params['uuid']
    // console.log('config list', uuidDT)
  console.log('asasdf')
  this.diplomaService.getAllSection().subscribe((sections:any)=>{
    console.log(sections)

    this.organization = [...sections];
    this.ref.markForCheck();

    console.log(this.organization)
  })
}

}
