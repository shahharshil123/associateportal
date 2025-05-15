import { NgModule, importProvidersFrom  } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { SecondarynavComponent } from './shared/secondarynav/secondarynav.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ManageuserComponent } from './components/manageuser/manageuser.component';
import { ManagesupervisorComponent } from './components/managesupervisor/managesupervisor.component';
import { ManagepscemailComponent } from './components/managepscemail/managepscemail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondarynavComponent,
    OrderDetailsComponent,
    OrdersComponent,
    ManageuserComponent,
    ManagesupervisorComponent,
    ManagepscemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
