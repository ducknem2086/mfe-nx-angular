import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-page1',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './page1.html',
  styleUrl: './page1.css',
  standalone: true
})
export class Page1 {}
