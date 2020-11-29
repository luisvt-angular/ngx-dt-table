import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrollableComponent } from './scrollable.component';

const routes: Routes = [{ path: '', component: ScrollableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollableRoutingModule { }
