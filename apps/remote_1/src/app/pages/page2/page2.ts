import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import {
  configActions,
  ngrxConfigFeature,
  ThemeAction,
  themeConfigState,
} from '@ng-mf/ngrx-store-lib';
import { FormsModule } from '@angular/forms';
import { debounceTime, exhaustMap, fromEvent, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-page2',
  imports: [CommonModule, TranslatePipe, FormsModule],
  templateUrl: './page2.html',
  styleUrl: './page2.css',

  standalone: true,
})
export class Page2 implements AfterViewInit {
  protected translate = inject(TranslateService);
  private readonly store = inject(Store);

  protected inputPicker = viewChild<ElementRef>('inputPicker');

  readonly i18nStatus = this.store.selectSignal(
    ngrxConfigFeature.selectI18nData
  );

  readonly primaryColorStatus = this.store.selectSignal(
    themeConfigState.selec
  );
  selectedColor = signal('');

  constructor() {
    this.setI18nStatusData(false);
    this.translate.setDefaultLang('en');
    effect(() => {
      this.translate.use(this.i18nStatus());
    });
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.inputPicker()?.nativeElement, 'change')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        debounceTime(150), // Wait 150ms after last change
        exhaustMap((color) =>
          of(color).pipe(
            tap((savedColor) => {
              console.log(savedColor);
              ThemeAction.setPrimaryColor({
                primary: savedColor,
              });
            })
          )
        )
      )
      .subscribe();
  }

  setI18nStatusData(status: boolean) {
    this.store.dispatch(
      configActions.setI18nData({
        status: status ? 'vi' : 'en',
      })
    );
  }

  toggleLang() {
    this.setI18nStatusData(this.i18nStatus() === 'en');
  }
}
