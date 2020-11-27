import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'basic', pathMatch: 'full'},
  {path: 'basic', loadChildren: () => import('./pages/basic/basic.module').then(m => m.BasicModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
