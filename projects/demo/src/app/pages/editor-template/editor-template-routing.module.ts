import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditorTemplateComponent } from './editor-template.component';

const routes: Routes = [{ path: '', component: EditorTemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorTemplateRoutingModule { }
