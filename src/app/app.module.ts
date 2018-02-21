import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {AppComponent} from './app.component';
import {ClockComponent} from './components/clock/clock.component';
import {CalendarComponent} from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
