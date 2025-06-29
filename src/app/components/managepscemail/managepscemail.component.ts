import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managepscemail',
  standalone: false,
  templateUrl: './managepscemail.component.html',
  styleUrl: './managepscemail.component.scss'
})
export class ManagepscemailComponent {
  TableHeaders: any[] = [];
  TableData: any[] = []; // for displaying filtered data
  OriginalTableData: any[] = []; //original data without filter


  constructor(
    private route: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.generateTableColumns();
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
    a.setAttribute('download', `managesupervisor-${yyyyMmDd}.csv`);
    a.click();
  }

  clicked(event: any) {
    console.log('Table Single Data Clicked', event);
  }

  generateTableColumns() {
    const TABLEHEADERS = [
      { display: 'UserName', attribute: '', isTooltipRequired: true },
      { display: 'Email', attribute: '', isTooltipRequired: true },
      { display: 'IsActive', attribute: '', isTooltipRequired: true },
      { display: 'Actions', attribute: '', isTooltipRequired: true },
    ];
    this.TableHeaders = TABLEHEADERS;

    const TABLEDATA = [
      {
        'po': 'Jnalamati',
        'mn': 'Jnalamati@clopay.com',
        'cn': 'false',
        'ot': 'Edit'
      },
      {
        'po': 'Pbandaru',
        'mn': 'Pbandaru@clopay.com',
        'cn': 'false',
        'ot': 'Edit'
      },
      {
        'po': 'Pnamburi',
        'mn': 'pnamburi@clopay.com',
        'cn': 'true',
        'ot': 'Edit'
      },
      {
        'po': 'Priyanka',
        'mn': 'ppadhi2@clopay.com',
        'cn': 'true',
        'ot': 'Edit'
      },
      {
        'po': 'Snakertha',
        'mn': 'snakertha@clopay.com',
        'cn': 'true',
        'ot': 'Edit'
      }
    ]
    this.OriginalTableData = TABLEDATA;
    this.TableData = [...TABLEDATA];
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

  save() { }
  checkboxClicked(event: any) {
    console.log(event);
  }

}
