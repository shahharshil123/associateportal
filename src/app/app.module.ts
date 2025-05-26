import { NgModule, importProvidersFrom  } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { UsersComponent } from './components/users/users.component';
import { PscCanadaComponent } from './components/store/psc-canada/psc-canada.component';
import { USComponent } from './components/store/us/US.component';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondarynavComponent,
    OrderDetailsComponent,
    OrdersComponent,
    ManageuserComponent,
    ManagesupervisorComponent,
    ManagepscemailComponent,
    UsersComponent,
    PscCanadaComponent,
    USComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
