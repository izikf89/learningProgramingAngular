import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatSidenavModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpModule } from '@angular/http';
import { RootRoutingModule } from './root-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from './core/core.module';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,   
    RootRoutingModule,
    MatButtonModule, 
    MatToolbarModule,
    CoreModule,
    MatSidenavModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})  ],
  providers: [
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
