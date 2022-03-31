import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISolicitud} from "../../solicitud-online/models/ISolicitud";
import {SolicitudOnlineService} from "../../solicitud-online/services/solicitud-online.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
})
export class TramitesComponent implements OnInit, OnDestroy {
  solicitudes: ISolicitud[];
  errorMessage: string = '';
  sub: Subscription | undefined;

  constructor(private _solicitudService: SolicitudOnlineService) { }

  ngOnInit(): void {
    console.log('Listando solicitudes para ventanilla virtual');
    this.sub = this._solicitudService.lista().subscribe({
      next: (responseSolicitudes) => {
        this.solicitudes = responseSolicitudes;
        console.log("responseConfiguraciones " + JSON.stringify(this.solicitudes));
      },
      error: (err) => (this.errorMessage = err)
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
