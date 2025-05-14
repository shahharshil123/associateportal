import { NgModule } from "@angular/core";
import { CloButtonModule } from 'clopay-buttons';
import { CloSecondaryNavLatestModule } from "secondarynav-latest";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, CloButtonModule, CloSecondaryNavLatestModule],
  exports: [CommonModule, RouterModule, CloButtonModule, CloSecondaryNavLatestModule],
  providers: []
})

export class SharedModule { }