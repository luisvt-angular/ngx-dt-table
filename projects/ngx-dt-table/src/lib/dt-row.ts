import { FormGroup } from '@angular/forms';

export interface DtRow {
  item: any;
  editing: boolean;
  creating: boolean;
  expanded: boolean;
  form?: FormGroup;
  children?: any[];
  parent?: DtRow;
}
