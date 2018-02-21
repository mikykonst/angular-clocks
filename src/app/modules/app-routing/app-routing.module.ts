import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CalendarComponent} from '../../components/calendar/calendar.component';
import {ClockComponent} from '../../components/clock/clock.component';

const routes: Routes = [
  {path: '', component: ClockComponent},
  {path: 'calendar', component: CalendarComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
