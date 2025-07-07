import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";

@Component({
  imports: [CommonModule, RouterOutlet],
  selector: 'app-remote_1-entry',

  template: `

    <router-outlet></router-outlet>`,

  standalone: true
})
export class RemoteEntry {
  constructor(public router: Router, private route: ActivatedRoute) {
  }


}
