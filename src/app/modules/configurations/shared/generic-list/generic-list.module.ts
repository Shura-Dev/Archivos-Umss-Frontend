import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenericListComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    RouterModule
  ],
  exports:[GenericListComponent]
})
export class GenericListModule { }
