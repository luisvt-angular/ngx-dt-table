import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectableComponent } from './selectable.component';

const routes: Routes = [{ path: '', component: SelectableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectableRoutingModule { }
