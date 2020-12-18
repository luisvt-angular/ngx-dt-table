import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DtTableComponent } from './dt-table.component';
import { DtColumnTemplateDirective, DtColumnDirective } from './dt-column.directive';
import { DtRowDetailDirective } from './dt-row-detail.directive';
import { DtCellDirective } from './dt-cell.directive';
import { DtHeaderDirective } from './dt-header.directive';
import { DtEditorDirective } from './dt-editor.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DtExpandRowButtonDirective } from './dt-expand-row-button.directive';
import { DtSortColumnIconDirective } from './dt-sort-column-icon.directive';
import { DtSelectAllDirective } from './dt-select-all.directive';
import { DtSelectRowDirective } from './dt-select-row.directive';
import { DtLoadingDirective } from './dt-loading.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    DtTableComponent,
    DtColumnDirective,
    DtColumnTemplateDirective,
    DtRowDetailDirective,
    DtCellDirective,
    DtHeaderDirective,
    DtEditorDirective,
    DtExpandRowButtonDirective,
    DtSortColumnIconDirective,
    DtSelectAllDirective,
    DtSelectRowDirective,
    DtLoadingDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    DtTableComponent,
    DtColumnDirective,
    DtColumnTemplateDirective,
    DtRowDetailDirective,
    DtCellDirective,
    DtHeaderDirective,
    DtEditorDirective,
    DtExpandRowButtonDirective,
    DtSelectAllDirective,
    DtSelectRowDirective,
    DtSortColumnIconDirective,
    DtLoadingDirective,
  ]
})
export class DtTableModule { }
