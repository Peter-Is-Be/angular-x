import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  initialThemeClass = environment.theme.themeClassDefault;
  initialThemeModel = environment.theme.themeModel.light; // light-model, dark-model
  themeClass$: BehaviorSubject<string> = new BehaviorSubject(
    this.initialThemeClass
  );
  themeModel$: BehaviorSubject<string> = new BehaviorSubject(
    this.initialThemeModel
  );

  darkTheme = false;
  constructor(private overlayContainer: OverlayContainer) {
    const storageThemeClass = localStorage.getItem('app-theme');
    const storageThemeModel = localStorage.getItem('app-theme-model');

    console.log('storageThemeClass', storageThemeClass);
    console.log('storageThemeModel', storageThemeModel);

    if (storageThemeClass) {
      overlayContainer.getContainerElement().classList.add(storageThemeClass);
      this.themeClass$.next(storageThemeClass);
    } else {
      overlayContainer
        .getContainerElement()
        .classList.add(this.initialThemeClass);
    }

    if (storageThemeModel) {
      overlayContainer.getContainerElement().classList.add(storageThemeModel);
      this.themeModel$.next(storageThemeModel);
    } else {
      overlayContainer
        .getContainerElement()
        .classList.add(this.initialThemeModel);
    }
  }

  getThemeClass() {
    return this.themeClass$;
  }
  setThemeClass(className: string) {
    const regex = /app.*theme/g;
    this.overlayContainer.getContainerElement().classList.forEach((css) => {
      if (css.search(regex) !== -1) {
        this.overlayContainer.getContainerElement().classList.remove(css);
      }
    });
    this.overlayContainer.getContainerElement().classList.add(className);

    this.themeClass$.next(className);
    localStorage.setItem('app-theme', className);
  }

  getThemeModel() {
    return this.themeModel$;
  }
  setThemeModel(themeModel: string) {
    this.overlayContainer.getContainerElement().classList.forEach((css) => {
      if (css === 'light-model' || css === 'dark-model') {
        this.overlayContainer.getContainerElement().classList.remove(css);
      }
    });
    this.overlayContainer.getContainerElement().classList.add(themeModel);

    this.themeModel$.next(themeModel);
    localStorage.setItem('app-theme-model', themeModel);
  }
}
