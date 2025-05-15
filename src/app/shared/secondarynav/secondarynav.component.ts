import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondarynav',
  standalone: false,
  templateUrl: './secondarynav.component.html',
  styleUrl: './secondarynav.component.scss'
})
export class SecondarynavComponent {
  menuItems = ["Orders", "Manage User", "Manage Supervisors", "Manage Psc Emails"];
  selectedTabName: string = '';

  constructor(private router: Router) { }

  tabChangClick(event: any) {
    console.log(event);
    this.selectedTabName = event;

    if (this.selectedTabName === 'orders') {
      this.router.navigate(['/orders']);
    } else if (this.selectedTabName === 'manage user') {
      this.router.navigate(['manage-user']);
    } else if (this.selectedTabName === 'manage supervisors') {
      this.router.navigate(['manage-supervisors']);
    } else {
      this.router.navigate(['manage-psc-emails']);
    }
  }
}
