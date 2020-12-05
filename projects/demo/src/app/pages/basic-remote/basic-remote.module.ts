import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRemoteRoutingModule } from './basic-remote-routing.module';
import { BasicRemoteComponent } from './basic-remote.component';
import { DtTableModule } from 'ngx-dt-table';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [BasicRemoteComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BasicRemoteRoutingModule,
    DtTableModule,
    MatProgressBarModule
  ]
})
export class BasicRemoteModule { }
