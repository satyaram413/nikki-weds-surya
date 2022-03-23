import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnInit {
  public eventDate = '';
  // @ViewChild('content', { static: false }) content;

  public diff: number = 0;
  public days = '';
  public hours = '';
  public minutes = '';
  public seconds = '';
  constructor() {
    this.eventDate = '2022-04-24:20:13:00';
    interval(1000)
      .pipe(
        map((x) => {
          this.diff =
            Date.parse(this.eventDate) - Date.parse(new Date().toString());
        })
      )
      .subscribe((x) => {
        this.days = this.getDays(this.diff);
        this.hours = this.getHours(this.diff);
        this.minutes = this.getMinutes(this.diff);
        this.seconds = this.getSeconds(this.diff);
      });
  }
  ngOnInit(): void {}

  getDays(t: number) {
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return String(days).padStart(2, '0');
  }

  getHours(t: number) {
    var hrs = Math.floor((t / (1000 * 60 * 60)) % 24);
    return String(hrs).padStart(2, '0');
  }

  getMinutes(t: number) {
    var min = Math.floor((t / 1000 / 60) % 60);
    return String(min).padStart(2, '0');
  }

  getSeconds(t: number) {
    var sec = Math.floor((t / 1000) % 60);
    return String(sec).padStart(2, '0');
  }
}
