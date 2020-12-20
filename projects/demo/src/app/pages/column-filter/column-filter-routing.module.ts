import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColumnFilterComponent } from './column-filter.component';

const routes: Routes = [{ path: '', component: ColumnFilterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColumnFilterRoutingModule { }
