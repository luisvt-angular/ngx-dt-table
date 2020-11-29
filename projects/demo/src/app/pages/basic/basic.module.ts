import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { DtTableModule } from 'ngx-dt-table';


@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    DtTableModule
  ]
})
export class BasicModule { }
