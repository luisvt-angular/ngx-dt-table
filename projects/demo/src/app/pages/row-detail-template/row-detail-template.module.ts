import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RowDetailTemplateRoutingModule } from './row-detail-template-routing.module';
import { RowDetailTemplateComponent } from './row-detail-template.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [RowDetailTemplateComponent],
  imports: [
    CommonModule,
    RowDetailTemplateRoutingModule,
    DtTableModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class RowDetailTemplateModule { }
