import { Component } from '@angular/core';

@Component({
  selector: 'app-psc-canada',
  standalone: false,
  templateUrl: './psc-canada.component.html',
  styleUrl: './psc-canada.component.scss'
})
export class PscCanadaComponent {
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
      { display: 'District', attribute: '', isTooltipRequired: true },
      { display: 'Store ID', attribute: '', isTooltipRequired: true },
      { display: 'No. of Orders', attribute: '', isTooltipRequired: true },
      { display: 'Phone Numbers', attribute: '', isTooltipRequired: true },
      { display: 'Email Address', attribute: '', isTooltipRequired: true },
      { display: 'Postal Code', attribute: '', isTooltipRequired: true },
      { display: 'Action', attribute: '', isTooltipRequired: true },
    ];
    this.TableHeaders = TABLEHEADERS;

    const TABLEDATA = [
      {
        'po': '158 - Ottawa, Kingston Gatineau',
        'cn': '1321',
        'mn': '32',
        'ot': '+1 (555) 987 1234',
        'od': 'store@clopay.com',
        'cs': '1011812',
        'sd': 'View Orders',
        'icon': 'Star'
      },
      {
        'po': '158 - Ottawa, Kingston Gatineau',
        'cn': '1321',
        'mn': '32',
        'ot': '+1 (555) 987 1234',
        'od': 'store@clopay.com',
        'cs': '1011812',
        'sd': 'View Orders',
        'icon': 'Star'
      },
      {
         'po': '158 - Ottawa, Kingston Gatineau',
        'cn': '1321',
        'mn': '32',
        'ot': '+1 (555) 987 1234',
        'od': 'store@clopay.com',
        'cs': '1011812',
        'sd': 'View Orders',
        'icon': 'Star'
      },
      {
         'po': '158 - Ottawa, Kingston Gatineau',
        'cn': '1321',
        'mn': '32',
        'ot': '+1 (555) 987 1234',
        'od': 'store@clopay.com',
        'cs': '1011812',
        'sd': 'View Orders',
        'icon': 'Star'
      },
      {
         'po': '158 - Ottawa, Kingston Gatineau',
        'cn': '1321',
        'mn': '32',
        'ot': '+1 (555) 987 1234',
        'od': 'store@clopay.com',
        'cs': '1011812',
        'sd': 'View Orders',
        'icon': 'Star'
      }
    ]
    this.OriginalTableData = TABLEDATA;
    this.TableData = [...TABLEDATA];
  }
}
