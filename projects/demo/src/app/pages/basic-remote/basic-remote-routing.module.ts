import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicRemoteComponent } from './basic-remote.component';

const routes: Routes = [{ path: '', component: BasicRemoteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRemoteRoutingModule { }
