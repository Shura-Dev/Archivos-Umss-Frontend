import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-solicitud-online',
  templateUrl: './solicitud-online.component.html'
})
export class SolicitudOnlineComponent implements OnInit {

  constructor(public route: Router) {
  }

  ngOnInit(): void {
  }

  goToExample() {
    this.route.navigateByUrl('solicitudOnline/example');
  }

  logout() {
    this.route.navigateByUrl("auth/logout")
      .finally(() => document.location.reload());
  }
}
