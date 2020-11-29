import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortableRoutingModule } from './sortable-routing.module';
import { SortableComponent } from './sortable.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SortableComponent],
    imports: [
        CommonModule,
        SortableRoutingModule,
        DtTableModule,
        MatPaginatorModule,
        MatIconModule
    ]
})
export class SortableModule { }
