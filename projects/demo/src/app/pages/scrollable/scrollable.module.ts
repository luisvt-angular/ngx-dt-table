import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollableRoutingModule } from './scrollable-routing.module';
import { ScrollableComponent } from './scrollable.component';
import { DtTableModule } from 'ngx-dt-table';


@NgModule({
  declarations: [ScrollableComponent],
  imports: [
    CommonModule,
    ScrollableRoutingModule,
    DtTableModule
  ]
})
export class ScrollableModule { }
