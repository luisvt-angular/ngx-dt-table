import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellTemplateRoutingModule } from './cell-template-routing.module';
import { CellTemplateComponent } from './cell-template.component';
import { DtTableModule } from 'ngx-dt-table';


@NgModule({
  declarations: [CellTemplateComponent],
  imports: [
    CommonModule,
    CellTemplateRoutingModule,
    DtTableModule
  ]
})
export class CellTemplateModule { }
