import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'basic', pathMatch: 'full'},
  {path: 'basic', loadChildren: () => import('./pages/basic/basic.module').then(m => m.BasicModule)},
  {path: 'basic-remote', loadChildren: () => import('./pages/basic-remote/basic-remote.module').then(m => m.BasicRemoteModule)},
  {path: 'selectable', loadChildren: () => import('./pages/selectable/selectable.module').then(m => m.SelectableModule)},
  {path: 'scrollable', loadChildren: () => import('./pages/scrollable/scrollable.module').then(m => m.ScrollableModule)},
  {path: 'frozen-columns', loadChildren: () => import('./pages/frozen-columns/frozen-columns.module').then(m => m.FrozenColumnsModule)},
  {path: 'sortable', loadChildren: () => import('./pages/sortable/sortable.module').then(m => m.SortableModule)},
  {path: 'sortable-remote', loadChildren: () => import('./pages/sortable-remote/sortable-remote.module').then(m => m.SortableRemoteModule)},
  {path: 'cell-template', loadChildren: () => import('./pages/cell-template/cell-template.module').then(m => m.CellTemplateModule)},
  {path: 'editor-template', loadChildren: () => import('./pages/editor-template/editor-template.module').then(m => m.EditorTemplateModule)},
  {path: 'print', loadChildren: () => import('./pages/print/print.module').then(m => m.PrintModule)},
  {
    path: 'row-detail-template',
    loadChildren: () => import('./pages/row-detail-template/row-detail-template.module').then(m => m.RowDetailTemplateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
