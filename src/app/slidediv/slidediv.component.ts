import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-slidediv',
  templateUrl: './slidediv.component.html',
  styleUrls: ['./slidediv.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translateY(100%)',
        })
      ),
      state(
        'out',
        style({
          transform: 'translateY(-100%)',
        })
      ),
      transition('in => out', animate('900ms ease-out')),
      transition('out => in', animate('900ms ease-in')),
    ]),
  ],
})
export class SlidedivComponent implements AfterViewInit {
  displayStyle = 'block';
  state = 'out';

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.displayStyle = 'none';
    }, 1400);
  }

  ngAfterViewInit() {
    this.state = this.state === 'out' ? 'in' : 'out';

    this.cdr.detectChanges();
  }
}
