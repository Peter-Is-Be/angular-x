import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'demo-pages', pathMatch: 'full' },
  {
    path: 'demo-pages',
    loadChildren: () =>
      import('./demo-pages/demo-pages.module').then((m) => m.DemoPagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
