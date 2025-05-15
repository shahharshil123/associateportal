import { Component, HostListener, OnInit, inject } from '@angular/core';
import { EnvService } from "../../env.service";

declare const setClopayHeaderInfo: any;

@Component({
    selector: 'app-header',
    standalone: false,
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

    public envService = inject(EnvService);

    ngOnInit(): void {
        this.callHeader();
    }

    callHeader() {
        const xhr = new XMLHttpRequest();
        const url = this.envService.getEnvType() === 'prod' ? `https://cdn.clopay.com/clopay-header/` :
            `https://${this.envService.getEnvType()}-cdn.clopay.com/clopay-header/`
        xhr.open('GET', url, true)
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const clopayHeader: any = document.getElementById('clopayHeader');
                clopayHeader.innerHTML = xhr.responseText;
                setClopayHeaderInfo();
            }
        };
    }
}
