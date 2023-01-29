import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-material-component-demo',
  templateUrl: './material-component-demo.component.html',
  styleUrls: ['./material-component-demo.component.scss'],
})
export class MaterialComponentDemoComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  animal: string | undefined;
  name: string | undefined;
  themeModel$: BehaviorSubject<string>;
  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeModel$ = themeService.getThemeModel();
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
