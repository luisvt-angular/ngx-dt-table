import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintRoutingModule } from './print-routing.module';
import { PrintComponent } from './print.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PrintComponent],
  imports: [
    CommonModule,
    PrintRoutingModule,
    DtTableModule,
    MatButtonModule
  ]
})
export class PrintModule { }
