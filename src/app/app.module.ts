import { NgModule, importProvidersFrom  } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import { SecondarynavComponent } from './shared/secondarynav/secondarynav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SecondarynavComponent
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
