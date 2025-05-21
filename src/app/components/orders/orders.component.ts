import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  TableHeaders: any[] = [];
  TableData: any[] = []; // for displaying filtered data
  OriginalTableData: any[] = []; //original data without filter
  filterModalShow: boolean = false;
  checkboxInputs: any;
  checkBoxOrderData: any;
  checkBoxStatusData: any;
  filterselectedDate: string = 'thisweek';
  filterorderType: any[] = [];

  @ViewChild('filterBox') filterBox!: ElementRef;
  @ViewChild('filterButton') filterButton!: ElementRef;

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
    console.log(this.filterselectedDate);
  }

  export() {
    console.log('Export Clicked');
    const data = this.TableData;
    const now = new Date();
    const yyyyMmDd = now.toISOString().split('T')[0]; // e.g., "2025-05-21"

    if (!data || !data.length) {
      return;
    }

    // Get CSV headers
    const headers = Object.keys(data[0]).join(',').toUpperCase();

    // Get CSV rows
    const csvRows = data.map(row => {
      return Object.values(row)
        .map(val => `"${String(val).replace(/"/g, '""')}"`) // handle quotes
        .join(',');
    });

    const csvContent = [headers, ...csvRows].join('\n');

    // Create blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', `order-${yyyyMmDd}.csv`);
    a.click();
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
        'po': '79447450',
        'cn': 'GRIFFIN CHRIS',
        'mn': '3212004202',
        'ot': 'Garage Door Install',
        'od': '03/31/2025 04:09 PM',
        'cs': 'Scheduled Arrival Date',
        'sd': '04/30/2025 11:00 AM'
      },
      {
        'po': '79447545',
        'cn': 'SMITH JUSTIN',
        'mn': '4077820413',
        'ot': 'Garage Door Install',
        'od': '03/01/2025 01:09 PM',
        'cs': 'Scheduled Arrival Date',
        'sd': '04/21/2025 12:22 PM'
      },
      {
        'po': '79447280',
        'cn': 'SMITH JUSTIN',
        'mn': '4077820413',
        'ot': 'Garage Door Install',
        'od': '03/01/2025 01:09 PM',
        'cs': 'Scheduled Arrival Date',
        'sd': '04/21/2025 12:22 PM'
      },
      {
        'po': '49999633',
        'cn': 'MONTON, RANDY',
        'mn': '5623815785',
        'ot': 'Do-It-Yourself Garage Door Delivery',
        'od': '04/15/2025 05:02 AM',
        'cs': 'Scheduled Arrival Date',
        'sd': '05/01/2025 10:07 AM'
      },
      {
        'po': '79444469',
        'cn': 'CAPERS HERMAN',
        'mn': '8038424435',
        'ot': 'Garage Door Install',
        'od': '07/26/2023 11:42 AM',
        'cs': 'At DC Ready for Pickup/Delivery',
        'sd': '10/01/2023 11:10 AM'
      }
    ]
    this.OriginalTableData = TABLEDATA;
    this.TableData = [...TABLEDATA];
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

  selectedChange(searchText: any) {
    const lowerSearch = searchText.toLowerCase();

    this.TableData = this.OriginalTableData.filter(item =>
      Object.values(item).some((value: any) =>
        value.toString().toLowerCase().includes(lowerSearch)
      )
    );
    console.log('Search Clicked', this.TableData, searchText);
  }

  onRoleChange(event: any) {
    console.log(event);
  }

  checkboxClicked(item: any) {
    console.log(item);
    this.filterorderType.push(item);
  }

  orderDateSelect(event: any): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filterselectedDate = selectedValue;
    console.log('Selected:', this.filterselectedDate);
  }

  close() {
    this.filterModalShow = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideFilterBox = this.filterBox?.nativeElement.contains(event.target);
    const clickedFilterButton = this.filterButton?.nativeElement.contains(event.target);

    if (!clickedInsideFilterBox && !clickedFilterButton) {
      this.filterModalShow = false;
    }
  }

  applyfilter() {
    if (this.filterselectedDate || this.filterorderType) {
      console.log('Filter btn clicked inside',this.filterselectedDate, this.filterorderType);
    }
  }
}
