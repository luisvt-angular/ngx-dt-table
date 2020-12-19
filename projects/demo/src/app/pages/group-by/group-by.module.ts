import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupByRoutingModule } from './group-by-routing.module';
import { GroupByComponent } from './group-by.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [GroupByComponent],
  imports: [
    CommonModule,
    GroupByRoutingModule,
    DtTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class GroupByModule { }
