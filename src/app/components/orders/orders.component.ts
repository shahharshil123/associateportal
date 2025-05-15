import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  TableHeaders: any;
  TableData: any;
  filterModalShow: boolean = false;
  checkboxInputs: any;
  checkBoxOrderData: any;
  checkBoxStatusData: any;

  constructor(
    private modalService: NgbModal,
    private route: Router
  ) { }

  ngOnInit() {
    this.generateTableColumns();
    this.checkboxInputs = [
      {
        "value": "us",
        "label": "US User"
      },
      {
        "value": "psc",
        "label": "PSC Canada"
      }
    ]
    this.checkboxOrderData();
    this.checkboxStatusData();
  }

  export() {
    console.log('Export Clicked');
  }

  filterModal() {
    this.filterModalShow = !this.filterModalShow;
    console.log('Filter Clicked');
  }

  clicked(event: any) {
    console.log('Table Single Data Clicked', event);
    this.route.navigate(['order-details', event.po]);
  }

  generateTableColumns() {
    const TABLEHEADERS = [
      { display: 'PO#', attribute: '', isTooltipRequired: true },
      { display: 'Customer Name', attribute: '', isTooltipRequired: true },
      { display: 'Mobile Number', attribute: '', isTooltipRequired: true },
      { display: 'Order Type', attribute: '', isTooltipRequired: true },
      { display: 'Ordered Date', attribute: '', type: 'date', isTooltipRequired: true },
      { display: 'Current Status', attribute: '', isTooltipRequired: true },
      { display: 'Status Date', attribute: '', type: 'date', isTooltipRequired: true },
    ];
    this.TableHeaders = TABLEHEADERS;

    const TABLEDATA = [
      {
        'po': '48436692',
        'cn': 'Ava Jackson',
        'mn': '+1 (555) 901-2345',
        'ot': 'Garage Door Install',
        'od': '10/23/2024 1:29 PM',
        'cs': 'SC Scheduled by Installer',
        'sd': '10/23/2024 1:29 PM'
      },
      {
        'po': '48436692',
        'cn': 'Ava Jackson',
        'mn': '+1 (555) 901-2345',
        'ot': 'Garage Door Install',
        'od': '10/23/2024 1:29 PM',
        'cs': 'SC Scheduled by Installer',
        'sd': '10/23/2024 1:29 PM'
      },
      {
        'po': '48436692',
        'cn': 'Ava Jackson',
        'mn': '+1 (555) 901-2345',
        'ot': 'Garage Door Install',
        'od': '10/23/2024 1:29 PM',
        'cs': 'SC Scheduled by Installer',
        'sd': '10/23/2024 1:29 PM'
      },
      {
        'po': '48436692',
        'cn': 'Ava Jackson',
        'mn': '+1 (555) 901-2345',
        'ot': 'Garage Door Install',
        'od': '10/23/2024 1:29 PM',
        'cs': 'SC Scheduled by Installer',
        'sd': '10/23/2024 1:29 PM'
      },
      {
        'po': '48436692',
        'cn': 'Ava Jackson',
        'mn': '+1 (555) 901-2345',
        'ot': 'Garage Door Install',
        'od': '10/23/2024 1:29 PM',
        'cs': 'SC Scheduled by Installer',
        'sd': '10/23/2024 1:29 PM'
      }
    ]
    this.TableData = TABLEDATA;
  }

  checkboxOrderData() {
    this.checkBoxOrderData = [
      {
        "displayName": "Garage Door Install",
        "id": 0,
        "name": "garage door install",
        "isChecked": false
      },
      {
        "displayName": "DIY Garage Door Delivery",
        "id": 1,
        "name": "dIY garage door delivery",
        "isChecked": false
      },
      {
        "displayName": "Garage Door Opener Install",
        "id": 2,
        "name": "garage door opener install",
        "isChecked": false
      },
      {
        "displayName": "DIY Garage Door Opener Install",
        "id": 3,
        "name": "diy garage door opener install",
        "isChecked": false
      }
    ]
  }

  checkboxStatusData() {
    this.checkBoxStatusData = [
      {
        "displayName": "SC Scheduled by Installer",
        "id": 0,
        "name": "SC Scheduled by Installer",
        "isChecked": false
      },
      {
        "displayName": "Install/Delivery Scheduled",
        "id": 1,
        "name": "Install/Delivery Scheduled",
        "isChecked": false
      },
      {
        "displayName": "Scheduled Arrival Date",
        "id": 2,
        "name": "Scheduled Arrival Date",
        "isChecked": false
      },
      {
        "displayName": "At DC Ready for Pickup/Delivery",
        "id": 3,
        "name": "At DC Ready for Pickup/Delivery",
        "isChecked": false
      }
    ]
  }

  search() {
    console.log('Search Clicked');
  }

  selectedChange(event: any) {
    console.log(event);
  }

  onRoleChange(event: any) {
    console.log(event);
  }

  checkboxClicked(item: any, event: any) {
    console.log(item, event);
  }
}
