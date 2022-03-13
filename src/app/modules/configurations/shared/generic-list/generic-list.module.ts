import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenericListComponent,
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[GenericListComponent]
})
export class GenericListModule { }
