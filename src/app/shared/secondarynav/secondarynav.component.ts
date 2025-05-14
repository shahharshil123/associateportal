import { Component } from '@angular/core';

@Component({
  selector: 'app-secondarynav',
  standalone: false,
  templateUrl: './secondarynav.component.html',
  styleUrl: './secondarynav.component.scss'
})
export class SecondarynavComponent {
  menuItems = ["Orders", "Manage User", "Manage Supervisors", "Manage Psc Emails"];
  selectedTabName: string = '';

  tabChangClick(event: any){
    console.log(event);
    
    this.selectedTabName = event;
  }
}
