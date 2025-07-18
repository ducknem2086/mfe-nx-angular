import { Component, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { formsActions, ngrxFormsFeature } from '@ng-mf/store-data';

@Component({
  selector: 'app-page2',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './page2.html',
  styleUrl: './page2.css',

  standalone: true
})
export class Page2 {

  protected translate = inject(TranslateService);
  private readonly store = inject(Store);
  readonly i18nStatus = this.store.selectSignal(
    ngrxFormsFeature.selectI18nData
  );

  constructor() {
    this.setI18nStatusData(false);
    this.translate.setDefaultLang('en');
    effect(() => {
      this.translate.use(this.i18nStatus());
    });
  }

  setI18nStatusData(status: boolean) {
    this.store.dispatch(
      formsActions.setI18nData({
        status: status ? 'vi' : 'en'
      })
    );
  }

  toggleLang() {
    this.setI18nStatusData(this.i18nStatus() === 'en');
  }

}
