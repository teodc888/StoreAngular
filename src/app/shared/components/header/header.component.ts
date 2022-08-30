import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  //template in line
  // template: `<mat-toolbar color="primary">
  //   <span>My Application</span>
  // </mat-toolbar> `,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToCheckout(): void {
    this.router.navigate(['/checkout'])
  }
}
