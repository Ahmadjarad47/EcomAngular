import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule } from 'ngx-bootstrap/pagination';
import { PagerrComponent } from './Components/pagerr/pagerr.component';


@NgModule({
  declarations: [
    PagerrComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],exports:[
    PaginationModule,PagerrComponent
  ]
})
export class SharedModule { }
