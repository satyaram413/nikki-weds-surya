import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { NikSurComponent } from './nik-sur/nik-sur.component';
import { RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [AppComponent, CountdownTimerComponent, NikSurComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'countdown-timer', component: CountdownTimerComponent },
      { path: 'nik-sur', component: NikSurComponent },
      { path: 'events', component: EventsComponent },
      { path: '', redirectTo: '/countdown-timer', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
