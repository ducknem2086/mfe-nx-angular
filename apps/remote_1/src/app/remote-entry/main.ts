import { Component } from "@angular/core";
import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";

@Component({

  selector: "app-remote-1",
  template: `
    <div class="btn-group">
      <button (click)="navigatePageGroup('page1')">
        navigate to page 1
      </button>
      <button (click)="navigatePageGroup('page2')">
        navigate to page 2
      </button>
    </div>
    <router-outlet>

    </router-outlet>
  `,
  styles: `
    .btn-group {
      display: inline-flex;
      gap: 20px;
    }
  `,

  imports: [RouterOutlet],

})

export class Remote1Component {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  navigatePageGroup(prefix: string) {
    console.log(this.router.url)
    // Lấy URL hiện tại, ví dụ "/route-1/page2"
    const currentUrl = this.router.url;
    // Tách chuỗi tại dấu "/", kết quả ["", "route-1", "page2"]
    const parts = currentUrl.split('/');
    // Thay phần tử cuối (page2) bằng page mới
    parts[parts.length - 1] = prefix;
    // Ghép lại thành "/route-1/page1"
    const newUrl = parts.join('/');
    // Điều hướng đến URL mới
    this.router.navigateByUrl(newUrl);
  }
}
