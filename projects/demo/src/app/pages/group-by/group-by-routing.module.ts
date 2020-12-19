import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupByComponent } from './group-by.component';

const routes: Routes = [{ path: '', component: GroupByComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupByRoutingModule { }
