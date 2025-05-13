import { NgModule } from "@angular/core";
import { CloButtonModule } from 'clopay-buttons';
// import { CloTableModule } from "clopay-table";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CloBadgeModule } from 'clopay-badges';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, CloButtonModule, CloBadgeModule, TooltipModule],
    exports: [CommonModule, RouterModule, CloButtonModule, CloBadgeModule, TooltipModule],
    providers: []
})

export class SharedModule { }