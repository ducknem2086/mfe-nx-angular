import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterModule, TranslatePipe],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected title = 'dashboard';
  protected translate = inject(TranslateService);
  lang = signal<'en' | 'vi'>('en');

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('vi');
  }
}
