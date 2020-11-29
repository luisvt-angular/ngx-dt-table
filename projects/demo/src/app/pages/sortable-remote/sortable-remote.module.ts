import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortableRemoteRoutingModule } from './sortable-remote-routing.module';
import { SortableRemoteComponent } from './sortable-remote.component';
import { DtTableModule } from 'ngx-dt-table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SortableRemoteComponent],
    imports: [
        CommonModule,
        SortableRemoteRoutingModule,
        HttpClientModule,
        DtTableModule,
        MatPaginatorModule,
        MatIconModule
    ]
})
export class SortableRemoteModule { }
