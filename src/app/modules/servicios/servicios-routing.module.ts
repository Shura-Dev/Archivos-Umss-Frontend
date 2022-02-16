import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiciosComponent} from "./servicios.component";
import {ListComponent} from "./components/list/list.component";
import {CreateComponent} from "./components/create/create.component";

// const routes: Routes = [
//   {
//     path: '',
//     component: ServiciosComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'list',
//         pathMatch: 'full',
//       },
//       {
//         path: 'login',
//         component: LoginComponent,
//         data: { returnUrl: window.location.pathname },
//       },
//       {
//         path: 'registration',
//         component: RegistrationComponent,
//       },
//       {
//         path: 'forgot-password',
//         component: ForgotPasswordComponent,
//       },
//       {
//         path: 'logout',
//         component: LogoutComponent,
//       },
//       { path: '', redirectTo: 'login', pathMatch: 'full' },
//       { path: '**', redirectTo: 'login', pathMatch: 'full' },
//     ],
//   },
// ];

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
        data: { returnUrl: window.location.pathname },
      },


      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: '**', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
