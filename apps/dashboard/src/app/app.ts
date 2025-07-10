import { Component, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { formsActions, ngrxFormsFeature } from '../shared/store';

@Component({
  imports: [RouterModule, TranslatePipe],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  providers: [],
})
export class App {

}
