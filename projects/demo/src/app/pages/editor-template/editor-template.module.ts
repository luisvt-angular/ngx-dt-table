import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorTemplateRoutingModule } from './editor-template-routing.module';
import { EditorTemplateComponent } from './editor-template.component';
import { DtTableModule } from 'ngx-dt-table';
import { MatxInputModule, MatxSelectModule } from 'angular-material-extended';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [EditorTemplateComponent],
  imports: [
    CommonModule,
    EditorTemplateRoutingModule,
    DtTableModule,
    MatxInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatxSelectModule
  ]
})
export class EditorTemplateModule { }
