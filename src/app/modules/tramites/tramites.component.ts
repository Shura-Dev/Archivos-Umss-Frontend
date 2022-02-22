import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Tramite } from './models/tramite';
import { TramiteService } from './services/tramite.service';
//import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-lista-tramite',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.scss']
})
export class ListaTramitesComponent implements OnInit {

  tramites: Tramite[] = [];

  constructor(
    private tramiteService: TramiteService,
    private route:ActivatedRoute, 
    private ref:ChangeDetectorRef
    //private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarTramites();
  }

  cargarTramites(): void {
    this.tramiteService.lista().subscribe(
      data => {
        this.tramites = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}