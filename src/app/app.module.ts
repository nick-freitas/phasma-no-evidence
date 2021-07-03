import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer.component';
import { TimeChangePipe } from './time-change.pipe';
import { SanityTesterComponent } from './sanity-tester/sanity-tester.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { NoEvidenceGhostTesterComponent } from './no-evidence-ghost-tester/no-evidence-ghost-tester.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    TimeChangePipe,
    SanityTesterComponent,
    StopwatchComponent,
    NoEvidenceGhostTesterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
