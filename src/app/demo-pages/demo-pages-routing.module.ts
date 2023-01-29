import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentDemoComponent } from './material-component-demo/material-component-demo.component';

const routes: Routes = [
  { path: '', redirectTo: 'material-component-demos', pathMatch: 'full' },
  {
    path: 'material-component-demos',
    component: MaterialComponentDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoPagesRoutingModule {}
