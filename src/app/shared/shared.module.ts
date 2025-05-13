import { NgModule } from "@angular/core";
import { CloButtonModule } from 'clopay-buttons';
import { CloTableModule } from "clopay-table";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule, CloButtonModule, CloTableModule],
    exports: [CommonModule, RouterModule, CloButtonModule, CloTableModule],
    providers: []
})

export class SharedModule { }