import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {IConfiguracionTramite} from "./models/IConfiguracionTramite";
import {ConfiguracionesService} from "./services/configuraciones.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-lista-configuraciones',
  templateUrl: './lista-configuraciones.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaConfiguracionesComponent implements OnInit, OnDestroy {
  configuracionesFiltradas: IConfiguracionTramite[] = [];
  errorMessage: string = '';
  sub: Subscription | undefined;

  constructor(private configuracionesService: ConfiguracionesService,
              private route: ActivatedRoute,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    console.log('Listando configuraciones OnInit()');
    this.sub = this.configuracionesService.lista().subscribe({
      next: (responseConfiguraciones) => {
        this.configuracionesFiltradas = responseConfiguraciones;
        console.log("responseConfiguraciones " + JSON.stringify(this.configuracionesFiltradas));

        this.cd.markForCheck();
      },
      error: (err) => (this.errorMessage = err)
    });
  }

  onAlert(clock: string) {
    console.log("something was clicked and said " + clock)
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
