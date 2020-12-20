import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColumnFilterRoutingModule } from './column-filter-routing.module';
import { ColumnFilterComponent } from './column-filter.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatxInputModule, MatxSelectModule } from 'angular-material-extended';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ColumnFilterComponent],
  imports: [
    CommonModule,
    ColumnFilterRoutingModule,
    DtTableModule,
    MatxInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatxSelectModule,
    MatIconModule
  ]
})
export class ColumnFilterModule { }
