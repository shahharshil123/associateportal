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

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.callHeader();
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
}