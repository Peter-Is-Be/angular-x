import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'liuliuqiu-web-app';
  themeClass = environment.theme.themeClassDefault;
  themeModel = environment.theme.themeModel.light; // light-model, dark-model
  env = environment;
  showFiller = false;
  constructor(private themeService: ThemeService) {
    this.themeService.getThemeClass().subscribe((_themeClass: string) => {
      this.themeClass = _themeClass;
    });

    this.themeService.getThemeModel().subscribe((_themeModel: string) => {
      this.themeModel = _themeModel;
    });
  }

  pickTheme(themeClass: string) {
    this.themeService.setThemeClass(themeClass);
  }

  setThemeModel(themeModel: string) {
    this.themeService.setThemeModel(themeModel);
  }
}
