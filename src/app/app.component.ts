import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  TableHeaders: any;
  TableData: any;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
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

  tabSelect(tabName: string) {
    this.selectedTabName = tabName;
  }
}