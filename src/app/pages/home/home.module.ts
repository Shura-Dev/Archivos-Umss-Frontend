import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from 'src/app/_metronic/partials';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'},
    ]),
    CommonModule,
    WidgetsModule,
    MatCardModule,
  ],
})
export class HomeModule {}
