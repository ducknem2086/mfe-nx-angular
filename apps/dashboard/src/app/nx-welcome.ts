import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-mf-nx-welcome',
  imports: [CommonModule],
  template: `
    <div>
    <h1>app root work !</h1>
    </div>

  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class NxWelcome {}
