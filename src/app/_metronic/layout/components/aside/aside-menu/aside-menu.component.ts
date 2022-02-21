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

  @Input() title: string;
  @Input() subTitle: string;
  @Input() actionLink: {
    label: string,
    route: string[]
  }
  @Input() organizations: [];
  @Input() leftLink: {
    label: string,
    route: string
  };
  @Input() rightLink: {
    label: string,
    route: string
  };

  rutas:any
  
  constructor(private diplomaService: DiplomaService, private ref: ChangeDetectorRef) {
    console.log('AsideMenuComponent')
    this.ref.markForCheck();
  }

  ngOnInit(): void {
    this.diplomaService.getAllSection().subscribe((sections:any)=>{

      this.rutas = sections
      console.log(this.rutas)
    })
  }
}
