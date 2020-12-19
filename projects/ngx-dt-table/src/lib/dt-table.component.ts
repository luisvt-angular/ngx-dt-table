import {
  AfterContentChecked,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DtColumn, DtColumnTemplateDirective, DtColumnDirective } from './dt-column.directive';
import { DtRowDetailDirective } from './dt-row-detail.directive';
import { FormControl, FormGroup } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { compare } from './compare';
import { get } from 'dot-prop';
import delay from 'delay';
import { DtRow } from './dt-row';
import { DtSortEvent } from './dt-sort-event';
import set = Reflect.set;
import { DtExpandRowButtonDirective } from './dt-expand-row-button.directive';
import { DtSortColumnIconDirective } from './dt-sort-column-icon.directive';
import { DtSelectAllDirective } from './dt-select-all.directive';
import { DtSelectRowDirective } from './dt-select-row.directive';
import { DtLoadingDirective } from './dt-loading.directive';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DtGroupHeaderDirective } from './dt-group-header.directive';

@Component({
  selector: 'dt-table',
  templateUrl: './dt-table.component.html',
  styleUrls: ['./dt-table.component.scss']
})
export class DtTableComponent implements AfterContentChecked, OnDestroy {

  private subscription: Subscription;

  get inverseTranslation(): string {
    return `-${this.viewport?.getOffsetToRenderedContentStart() || 0}px`;
  }

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  /** Function used to get value from object using `dot.property` notation */
  get = get;

  /** Sets the page index to be rendered (only for local/sync data) */
  @Input() pageIndex: number;

  /** Sets the page size to be rendered (only for local/sync data) */
  @Input() pageSize: number;

  /** Sets the data and maps it to respective row values */
  @Input() set data(items: any[] | Observable<any[]>) {
    if (this.selectedRows) { this.selectedRows.clear(); }

    if (items instanceof Observable) {
      this.subscription = items.subscribe(this.mapRows);
    } else {
      this.mapRows(items);
      this.clonedRows = [...this.rows];
    }
  }

  private _editable: boolean;

  /** Handles if the table is editable by row */
  get editable(): boolean { return this._editable; }

  @Input() set editable(value: boolean) { this._editable = coerceBooleanProperty(value); }

  private _selectable: boolean;

  /** Handles if the table is selectable and shows the select column */
  get selectable(): boolean { return this._selectable; }

  @Input() set selectable(value: boolean) { this._selectable = coerceBooleanProperty(value); }

  /** Handles the style of the scrollable columns area */
  @Input() scrollableStyle: { [klass: string]: any };

  /** Handles the style of the frozen left columns area */
  @Input() frozenLeftStyle: { [klass: string]: any };

  /** Handles the style of the scrollable columns area */
  @Input() frozenRightStyle: { [klass: string]: any };

  /** Url used to fetch print styles */
  @Input() printStyleUrl: string;

  /** Print Css Styles */
  @Input() printStyleCss = '.dt-cell, .dt-header-cell {' +
    'border-bottom: 3px solid rgba(0, 0, 0, 0.12);' +
    'padding-left: 10px;padding-right: 10px;' +
    'text-align: left;' +
    '}' +
    '.dt-cell {' +
    'border-bottom-width: 1px' +
    '}';

  /** Event emitted after a column sort is started. This event is only used for remote/async sorting. */
  @Output() sort = new EventEmitter<DtSortEvent>();

  private sortedColumnsSet = new Set<DtColumnDirective>();

  private sortedColumns: DtColumnDirective[] = [];

  private get frozenLeftWidth(): string {
    const widths = this.frozenLeftColumns.map(c => c.width).filter(w => !!w);
    if (this.rowDetail) { widths.push('40px'); }
    if (this._selectable) { widths.push('46px'); }
    if (widths.length) { return 'calc(' + widths.join(' + ') + ')'; }
  }

  private get frozenRightWidth(): string {
    const widths = this.frozenRightColumns.map(c => c.width).filter(w => !!w);
    if (widths.length) { return 'calc(' + widths.join(' + ') + ')'; }
  }

  /** List of columns added in the content */
  @ContentChildren(DtColumn) columns: DtColumnDirective[];

  /** List of frozen left columns */
  frozenLeftColumns: DtColumnDirective[] = [];

  /** List of scrollable columns */
  scrollableColumns: DtColumnDirective[] = [];

  /** List of frozen right columns */
  frozenRightColumns: DtColumnDirective[] = [];

  /** List of rows */
  rows: DtRow[] = [];

  private clonedRows: DtRow[];

  /** Set of selected rows */
  selectedRows = new Set();

  /** Handles if all rows are selected */
  get allSelected(): boolean {
    return this.rows.length === this.selectedRows.size;
  }

  /** Handles if some rows are selected */
  get someSelected(): boolean {
    return this.selectedRows.size > 0 && !this.allSelected;
  }

  /** Template of the detail row content */
  @ContentChild(DtRowDetailDirective, {read: TemplateRef, static: true}) rowDetail: TemplateRef<any>;

  /** Element used to handle printable table */
  @ViewChild('printable') _printable: ElementRef;

  /** Handles if the printable table should be rendered */
  renderPrintable = false;

  /**
   * Template used to create the button to expand rows
   *
   * @example
   * <button *dtExpandRowButton="let row" mat-icon-button type="button" (click)="row.expanded = !row.expanded">
   *   <mat-icon *ngIf="!row.expanded">keyboard_arrow_right</mat-icon>
   *   <mat-icon *ngIf="!!row.expanded">keyboard_arrow_down</mat-icon>
   * </button>
   */
  @ContentChild(DtExpandRowButtonDirective, {read: TemplateRef}) expandRowButtonTemplate: TemplateRef<any>;

  /**
   * Template used to create the sort column icon
   *
   * @example
   * <ng-template dtSortColumnIcon let-column>
   *   <mat-icon *ngIf="column.sortable && column.sortDirection === 1">north</mat-icon>
   *   <mat-icon *ngIf="column.sortable && column.sortDirection === -1">south</mat-icon>
   * </ng-template>
   */
  @ContentChild(DtSortColumnIconDirective, {read: TemplateRef}) sortColumnIconTemplate: TemplateRef<any>;

  /**
   * Template used to create the select all checkbox
   *
   * @example
   * <mat-checkbox *dtSelectAll="let table" [checked]="table.allSelected || table.someSelected"
   *   [indeterminate]="table.someSelected" (change)="table.toggleSelectAll($event)"></mat-checkbox>
   */
  @ContentChild(DtSelectAllDirective, {read: TemplateRef}) selectAllTemplate: TemplateRef<any>;

  /**
   * Template used to create the select row checkbox
   *
   * @example
   * <mat-checkbox *dtSelectRow="let table; let row = row" [checked]="table.isRowSelected(row)"
   *   (change)="table.toggleSelectRow(row, $event)"></mat-checkbox>
   */
  @ContentChild(DtSelectRowDirective, {read: TemplateRef}) selectRowTemplate: TemplateRef<any>;

  /** Shows/Hides the loading element */
  @Input() loading: boolean;

  /**
   * Template used to create the loading element
   *
   * @example
   *   <mat-progress-bar *dtLoading mode="indeterminate"></mat-progress-bar>
   */
  @ContentChild(DtLoadingDirective, {read: TemplateRef}) loadingTemplate: TemplateRef<any>;

  @Input() groupBy: string | ((item) => any);

  @ContentChild(DtGroupHeaderDirective, {read: TemplateRef}) groupHeaderTemplate: TemplateRef<any>;

  ngAfterContentChecked(): void {
    this.frozenLeftColumns.length = 0;
    this.frozenRightColumns.length = 0;
    this.scrollableColumns.length = 0;
    this.columns.forEach(column => {
      if (column.frozen === 'left') {
        this.frozenLeftColumns.push(column);
      } else if (column.frozen === 'right') {
        this.frozenRightColumns.push(column);
      } else {
        this.scrollableColumns.push(column);
      }

      if (column.width) { column.columnNgStyle.flex = '0 ' + column.width; }
    });
    this.frozenLeftStyle = {...this.frozenLeftStyle, width: this.frozenLeftWidth};
    this.frozenRightStyle = {...this.frozenRightStyle, width: this.frozenRightWidth};
  }

  ngOnDestroy(): void {
    if (this.subscription) { this.subscription.unsubscribe(); }
  }

  private mapRows = (items: any[]) => {
    if (this.groupBy) {
      const groups = items.reduce((prev, item) => {
        if (typeof this.groupBy === 'string') {
          const key = this.groupBy;
          (prev[get<any>(item, key)] = prev[get<any>(item, key)] || []).push(item);
        } else {
          const key = this.groupBy(item);
          (prev[key] = prev[key] || []).push(item);
        }
        return prev;
      }, {});
      this.rows = Object.keys(groups).reduce((prev, key) => {
        const parent = {item: key, creating: false, editing: false, expanded: true} as DtRow;
        const children = groups[key].map(item => ({
          item,
          editing: false,
          creating: false,
          expanded: false,
          parent
        } as DtRow));
        parent.children = children;
        prev.push(parent, ...children);
        return prev;
      }, []);
    } else {
      this.rows = items.map(item => ({
        item,
        editing: false,
        creating: false,
        expanded: false,
      } as DtRow));
    }
  }

  /** Paginates rows. This should only run if data is local. */
  paginate(rows: DtRow[]): DtRow[] {
    return this.pageIndex && this.pageIndex > 0 && this.pageSize && this.pageSize > 0
      ? rows.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize)
      : rows;
  }

  /** Selects/Unselects all rows */
  toggleSelectAll(event): void {
    if (event.checked || event.target?.checked) {
      this.rows.forEach(row => this.selectedRows.add(row));
    } else {
      this.selectedRows.clear();
    }
  }

  /** Selects/Unselects specified row */
  toggleSelectRow(row, event): void {
    if (event.checked || event.target?.checked) {
      this.selectedRows.add(row);
    } else {
      this.selectedRows.delete(row);
    }
  }

  /** Handles if row is selected */
  isRowSelected(row): boolean {
    return this.selectedRows.has(row);
  }

  /** Handles the start of editing specified row. For example when users double clicks the row */
  startEditing(row: DtRow): void {
    if (row.editing) { return; }
    row.form = new FormGroup({});
    this.columns.forEach(c => row.form.addControl(c.field, new FormControl(get(row.item, c.field))));
    row.editing = true;
  }

  /** Handles the reset of specified row. For example when users press key Esc */
  resetRow(row: DtRow): void {
    this.columns.forEach(c => row.form.removeControl(c.field));
    delete row.form;
    row.editing = false;
  }

  /** Handles the submit of specified row. For example when users press key Enter */
  submitRow(row: DtRow): void {
    if (row.form.invalid) { return; }
    this.columns.forEach(c => {
      set(row.item, c.field, row.form.get(c.field)?.value);
      row.form.removeControl(c.field);
    });
    delete row.form;
    row.editing = false;
  }

  /** Sorts the table with respect to the selected columns */
  _sort(column: DtColumnDirective): void {
    if (!column.sortable) { return; }

    column.sortDirection = column.sortDirection === 0 ? 1
      : column.sortDirection === 1 ? -1
        : 0;

    if (column.sortDirection !== 0) {
      if (!this.sortedColumnsSet.has(column)) {
        this.sortedColumnsSet.add(column);
        this.sortedColumns.push(column);
      }
    } else {
      this.sortedColumnsSet.delete(column);
      this.sortedColumns.pop();
      if (!this.subscription) { this.rows = [...this.clonedRows]; }
    }

    if (this.subscription) {
      const sortEvent = {
        sortBy: this.sortedColumns.map(c => c.sortBy).join(','),
        sortDirection: this.sortedColumns.map(c => c.sortDirection > 0 ? 'asc' : 'desc').join(',')
      };
      this.sort.emit(sortEvent);
      return;
    }
    if (column.sortDirection === 0 && this.sortedColumns.length === 0) {
      return;
    }
    const fields = this.sortedColumns.map(c => typeof c.sortBy === 'function' ? c.sortBy : 'item.' + c.sortBy);
    this.rows.sort(compare(fields, this.sortedColumns.map(c => c.sortDirection)));
  }

  /** Gets the html string of the printable table */
  async getPrintable(): Promise<string> {
    this.renderPrintable = true;
    await delay(200);
    const result = this._printable.nativeElement.innerHTML;
    this.renderPrintable = false;
    return result;
  }

  /** Opens a new windows asking for printing the table */
  async print(): Promise<void> {
    const pageStyles = document.head.getElementsByTagName('style');
    const pw = window.open();
    pw.document.write(`<html><head>
${this.printStyleUrl ? `<link rel="stylesheet" href="${this.printStyleUrl}">` : ''}
<style>${this.printStyleCss}</style>
</head><body>${await this.getPrintable()}</body></html>`);
    pw.document.close();
    pw.print();
    pw.close();
  }

  logChange($event: any): void {
    console.log('$event: ', $event);
  }
}
