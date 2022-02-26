import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { DiplomaService } from 'src/app/modules/diplomas-titulos/diplomas-bachiller/lista-diplomas/services/diploma.service';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  appAngularVersion: string = environment.appVersion;
  appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;

  rutas:any
  
  constructor(private diplomaService: DiplomaService) {
  }
  
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.diplomaService.getAllSection().subscribe((sections:any)=>{
      this.rutas = sections
    })
  }
}
