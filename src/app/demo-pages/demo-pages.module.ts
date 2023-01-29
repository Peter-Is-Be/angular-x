import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoPagesRoutingModule } from './demo-pages-routing.module';
import { MaterialComponentDemoComponent } from './material-component-demo/material-component-demo.component';
import { DialogOverviewExampleDialogComponent } from './material-component-demo/dialog-overview-example-dialog/dialog-overview-example-dialog.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MaterialComponentDemoComponent,
    DialogOverviewExampleDialogComponent,
  ],
  imports: [
    CommonModule,
    DemoPagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
})
export class DemoPagesModule {}
