import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'ng-mf-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
  providers: [],
})
export class App {}
