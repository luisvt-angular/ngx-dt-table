import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrozenColumnsComponent } from './frozen-columns.component';

const routes: Routes = [{ path: '', component: FrozenColumnsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrozenColumnsRoutingModule { }
