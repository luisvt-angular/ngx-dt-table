import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectableRoutingModule } from './selectable-routing.module';
import { SelectableComponent } from './selectable.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [SelectableComponent],
    imports: [
        CommonModule,
        SelectableRoutingModule,
        DtTableModule,
        MatCheckboxModule
    ]
})
export class SelectableModule { }
