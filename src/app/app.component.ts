import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, TemplateRef, ViewChild, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare const setClopayHeaderInfo: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'associateportal';
  @ViewChild('plankModalTemplate') plankModalTemplate!: TemplateRef<any>;
  secondaryHeaderTitles = [
    {
      "displayName": "Orders",
      "name": "orders",
      "routerLink": "/orders",
    },
    {
      "displayName": "Manage User",
      "name": "manageuser",
      "routerLink": "/manageuser",
    },
    {
      "displayName": "Manage Supervisors",
      "name": "managesupervisors",
      "routerLink": "/managesupervisors",
    },
    {
      "displayName": "Manage Psc Emails",
      "name": "managepscemails",
      "routerLink": "/managepscemails",
    }
  ];
  selectedTabName: string = '';
  tableHeaders: any;
  tableActions: any;
  allApprovalsList: any[] = [
    {
      'po': 'test',
      'cn': 'test',
      'mn': 'test',
      'ot': 'test',
      'od': 'test',
      'cs': 'test',
      'sd': 'test',
    },
    {
      'po': 'test',
      'cn': 'test',
      'mn': 'test',
      'ot': 'test',
      'od': 'test',
      'cs': 'test',
      'sd': 'test',
    },
    {
      'po': 'test',
      'cn': 'test',
      'mn': 'test',
      'ot': 'test',
      'od': 'test',
      'cs': 'test',
      'sd': 'test',
    },
    {
      'po': 'test',
      'cn': 'test',
      'mn': 'test',
      'ot': 'test',
      'od': 'test',
      'cs': 'test',
      'sd': 'test',
    }
  ];


  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.callHeader();
    this.tableHeader();
  }

  demo1() {
    this.modalService.open(this.plankModalTemplate, {
      centered: true,
      scrollable: true,
      size: 'lg',
      windowClass: 'customBackdrop',
      backdrop: false
    });
  }

  // callHeader() {
  //   const xhr = new XMLHttpRequest();
  //   const url = 'https://test-cdn.clopay.com/clopay-header/';
  //   xhr.open('GET', url, true)
  //   xhr.send();
  //   xhr.onreadystatechange = () => {
  //     if (xhr.readyState === 4 && xhr.status === 200) {
  //       const clopayHeader: any = document.getElementById('clopayHeader');
  //       // this.createContainer(dynamicValue, clopayHeader);
  //       clopayHeader.innerHTML = xhr.responseText;
  //       setClopayHeaderInfo();
  //     }
  //   };
  // }

  callHeader() {
    const url = 'https://test-cdn.clopay.com/clopay-header/';

    if (isPlatformBrowser(this.platformId)) {
      const clopayHeader: HTMLElement | null = document.getElementById('clopayHeader');

      this.http.get(url, { responseType: 'text' }).subscribe({
        next: (response: string) => {
          if (clopayHeader && response) {
            clopayHeader.innerHTML = response;
            // Ensure this function is available globally
            setClopayHeaderInfo();
          }
        },
        error: (error) => {
          console.error('Failed to load Clopay header:', error);
        }
      });
    }
  }


  tabSelect(tabName: string) {
    this.selectedTabName = tabName;
  }

  tableHeader() {
    const TABLEHEADERS = [
      { display: 'PO#', attribute: 'po', isTooltipRequired: true },
      { display: 'Customer Name', attribute: 'cn', isTooltipRequired: true },
      { display: 'Mobile Number', attribute: 'mn', isTooltipRequired: true },
      { display: 'order Type', attribute: 'ot', isTooltipRequired: true },
      { display: 'Ordered Date', attribute: 'od', isTooltipRequired: true },
      { display: 'Current Status', attribute: 'cs', isTooltipRequired: true },
      { display: 'Status Date', attribute: 'sd', isTooltipRequired: true },
    ];
    this.tableHeaders = TABLEHEADERS;
    this.tableActions = [
      {
        type: 'label',
        label: 'EDIT',
        property: '',
        displayName: ''
      },
      {
        type: 'label',
        label: 'DELETE',
        property: '',
        displayName: ''
      }
    ];
  }

  rowClicked(event: any) {
    const _rowLabel = event.rowLabel;
    console.log(event);
    if (_rowLabel.label === 'EDIT') { }
    else if (_rowLabel.label === 'DELETE') { }
  }
}