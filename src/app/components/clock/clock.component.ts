import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  public now: Date = new Date();
  public timeFormat: string;

  constructor(private router: Router) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
    this.timeFormat = 'HH:mm:ss';
  }

  ngOnInit() {
  }

  checkTimeFormat(format: string): string {
    return format === 'HH:mm:ss' ? 'HH:mm' : 'HH:mm:ss';
  }

  changeTimeFormat() {
    this.timeFormat = this.checkTimeFormat(this.timeFormat);
  }
  onRightClick(event) {
    this.changeView();
    return false;
  }
  changeView() {
    this.router.navigate(['/calendar']);
  }

}
