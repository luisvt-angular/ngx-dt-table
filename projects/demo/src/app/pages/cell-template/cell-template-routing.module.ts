import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CellTemplateComponent } from './cell-template.component';

const routes: Routes = [{ path: '', component: CellTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CellTemplateRoutingModule { }
