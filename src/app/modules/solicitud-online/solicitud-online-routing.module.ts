import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SolicitudOnlineComponent} from "./solicitud-online.component";
import {SolicitudExampleComponent} from "./components/solicitud-example/solicitud-example.component";
import {LogoutComponent} from "../auth/components/logout/logout.component";

const routes: Routes = [
  {
    path: '',
    component: SolicitudOnlineComponent,
    children: [
      {
        path: 'example',
        component: SolicitudExampleComponent,
      },
      {
        path: 'auth/logout',
        component: LogoutComponent,
      },
      {path: '**', redirectTo: 'error/404'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudOnlineRoutingModule {
}
