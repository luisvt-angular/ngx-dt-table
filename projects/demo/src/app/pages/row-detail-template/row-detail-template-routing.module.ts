import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RowDetailTemplateComponent } from './row-detail-template.component';

const routes: Routes = [{ path: '', component: RowDetailTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RowDetailTemplateRoutingModule { }
