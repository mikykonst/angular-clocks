import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public calendar: Date = new Date();
  public dateFormat: string;

  constructor(private router: Router) {
    setInterval(() => {
      this.calendar = new Date();
    }, 1);
    this.dateFormat = 'd.MM.yyyy';
  }

  ngOnInit() {
  }
  checkDateFormat(format: string): string {
    return format === 'd.MM.yyyy' ? 'MM/d/yy' : 'd.MM.yyyy';
  }

  changeDateFormat() {
    this.dateFormat = this.checkDateFormat(this.dateFormat);
  }
  onRightClick(event) {
    event.preventDefault();
    this.changeView();
  }
  changeView() {
    this.router.navigate(['/']);
  }

}
