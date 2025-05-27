import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondarynav',
  standalone: false,
  templateUrl: './secondarynav.component.html',
  styleUrl: './secondarynav.component.scss'
})
export class SecondarynavComponent {
  menuItems: any[] = [];
  selectedTabName: string = '';
  storeUserLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.storeUserLogin){
      this.menuItems = ["Orders", "User Management"];
    } else {
      this.menuItems = ["Orders", "Manage User", "Manage Supervisors", "Manage Psc Emails"];
    }
  }

  tabChangClick(event: any) {
    console.log(event);
    this.selectedTabName = event;

    if (this.selectedTabName === 'orders') {
      this.router.navigate(['orders']);
    } else if (this.selectedTabName === 'manage user') {
      this.router.navigate(['manage-user']);
    } else if (this.selectedTabName === 'manage supervisors') {
      this.router.navigate(['manage-supervisors']);
    } else if (this.selectedTabName === 'manage psc emails') {
      this.router.navigate(['manage-psc-emails']);
    } else {
      this.router.navigate(['users-management']);
    }
  }
}
