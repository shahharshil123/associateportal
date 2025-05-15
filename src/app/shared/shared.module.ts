import { NgModule } from "@angular/core";
import { CloButtonModule } from 'clopay-buttons';
import { CloSecondaryNavLatestModule } from "secondarynav-latest";
import { ClopayChoiceModule } from "clopay-choice";
import { CloInputModule } from "clopay-input";
import { CloSearchModule } from "clopay-input-search";
import { CloInputChoiceCheckboxModule } from "clopay-check-choice";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, CloButtonModule, CloSecondaryNavLatestModule, ClopayChoiceModule, CloInputModule, CloSearchModule, CloInputChoiceCheckboxModule],
  exports: [CommonModule, RouterModule, CloButtonModule, CloSecondaryNavLatestModule, ClopayChoiceModule, CloInputModule, CloSearchModule, CloInputChoiceCheckboxModule],
  providers: []
})

export class SharedModule { }