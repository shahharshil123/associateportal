import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  standalone: false,
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

  router = inject(Router);
  checkboxInputs: any;
  selectedTab: string = 'store';
  commentTabs: any = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Order ID:', id);
    this.checkboxInputs = [
      {
        "value": "store",
        "label": "Store"
      },
      {
        "value": "installer",
        "label": "Installer"
      }
    ]
    this.commentTabs = [
      {
        "value": "store",
        "label": "Store"
      },
      {
        "value": "installer",
        "label": "Installer"
      }
    ]
  }

   backButtonClick() {
    this.router.navigateByUrl("/orders");
  }

  onRoleChange(event: any) {
    console.log(event);
  }

  tabSelect(event: any){
    this.selectedTab = event;
  }
}
