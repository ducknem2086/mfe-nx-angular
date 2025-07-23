import {
  AfterViewInit,
  Component,
  computed,
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
  ngrxThemeFeature,
  ThemeAction,
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
  selectedColor = signal('');
  protected translate = inject(TranslateService);
  protected primaryPicker = viewChild<ElementRef>('primary');
  protected warningPicker = viewChild<ElementRef>('warning');
  protected ndColorPicker = viewChild<ElementRef>('2ndColor');
  protected bgColorPicker = viewChild<ElementRef>('bgColor');
  protected errorColorPicker = viewChild<ElementRef>('errorColor');

  private readonly store = inject(Store);
  readonly i18nStatus = this.store.selectSignal(
    ngrxConfigFeature.selectI18nData
  );
  readonly themeColor = this.store.selectSignal(
    ngrxThemeFeature.selectThemeColor
  );
  primaryColor = computed(() => {
    return this.themeColor().primary;
  });
  errorColor = computed(() => {
    return this.themeColor().error;
  });
  secondColor = computed(() => {
    return this.themeColor().secondary;
  });
  backgroundColor = computed(() => {
    return this.themeColor().background;
  });
  warningColor = computed(() => {
    return this.themeColor().warning;
  });




  constructor() {
    this.setI18nStatusData(false);
    this.translate.setDefaultLang('en');
    effect(() => {
      this.translate.use(this.i18nStatus());
    });
  }

  ngAfterViewInit() {
    fromEvent<InputEvent>(this.primaryPicker()?.nativeElement, 'change')
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
