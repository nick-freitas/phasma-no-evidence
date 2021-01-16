import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar.component';
import { FooterComponent } from './footer.component';
import { TimeChangePipe } from './time-change.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TimeChangePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
