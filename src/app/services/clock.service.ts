import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Injectable()
export class ClockService {
  private time: TimerObservable;

  constructor() {
  }


}
