import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrozenColumnsRoutingModule } from './frozen-columns-routing.module';
import { FrozenColumnsComponent } from './frozen-columns.component';
import { DtTableModule } from 'ngx-dt-table';


@NgModule({
  declarations: [FrozenColumnsComponent],
  imports: [
    CommonModule,
    FrozenColumnsRoutingModule,
    DtTableModule
  ]
})
export class FrozenColumnsModule { }
