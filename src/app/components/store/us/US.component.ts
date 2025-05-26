import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-US',
  standalone: false,
  templateUrl: './US.component.html',
  styleUrl: './US.component.scss'
})
export class USComponent {
  filterselectedDate: string = 'thisweek';
  tabs: any;
  TableHeaders: any[] = [];
  TableData: any[] = []; // for displaying filtered data
  OriginalTableData: any[] = []; //original data without filter

  constructor(
  ) { }

  ngOnInit() {
    this.generateTableColumns();
    this.tabs = [
      {
        "value": "us",
        "label": "US"
      },
      {
        "value": "psc",
        "label": "PSC Canada"
      }
    ]
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
    a.setAttribute('download', `US-${yyyyMmDd}.csv`);
    a.click();
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

  orderDateSelect(event: any): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filterselectedDate = selectedValue;
    console.log('Selected:', this.filterselectedDate);
  }

  generateTableColumns() {
    const TABLEHEADERS = [
      { display: 'Store ID', attribute: '', isTooltipRequired: true },
      { display: 'No. of Orders', attribute: '', isTooltipRequired: true },
      { display: 'Phone Number', attribute: '', isTooltipRequired: true },
      { display: 'Email Address', attribute: '', isTooltipRequired: true },
      { display: 'City', attribute: '', isTooltipRequired: true },
      { display: 'Zipcode', attribute: '', isTooltipRequired: true },
      { display: 'Action', attribute: '', isTooltipRequired: true },
      { display: '', attribute: '', isTooltipRequired: true },
    ];
    this.TableHeaders = TABLEHEADERS;

    const TABLEDATA = [
      {
        'po': '1321',
        'cn': '31',
        'mn': '+1 (555) 901-2345',
        'ot': 'store@gmail.com',
        'od': 'New York',
        'cs': '10118',
        'sd': 'View Orders',
        'icon': 'Star Icon'
      },
      {
        'po': '1321',
        'cn': '32',
        'mn': '+1 (555) 901-2345',
        'ot': 'store@gmail.com',
        'od': 'New York',
        'cs': '10118',
        'sd': 'View Orders',
        'icon': 'Star Icon'
      },
      {
        'po': '1321',
        'cn': '33',
        'mn': '+1 (555) 901-2345',
        'ot': 'store@gmail.com',
        'od': 'New York',
        'cs': '10118',
        'sd': 'View Orders',
        'icon': 'Star Icon'
      },
      {
        'po': '1321',
        'cn': '32',
        'mn': '+1 (555) 901-2345',
        'ot': 'store@gmail.com',
        'od': 'New York',
        'cs': '10118',
        'sd': 'View Orders',
        'icon': 'Star Icon'
      },
      {
        'po': '1321',
        'cn': '32',
        'mn': '+1 (555) 901-2345',
        'ot': 'store@gmail.com',
        'od': 'New York',
        'cs': '10118',
        'sd': 'View Orders',
        'icon': 'Star Icon'
      }
    ]
    this.OriginalTableData = TABLEDATA;
    this.TableData = [...TABLEDATA];
  }
}


