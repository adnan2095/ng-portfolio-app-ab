import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  @Output() ServerAdded = new EventEmitter<{
    sname: string;
    scontent: string;
  }>();
  @Output() BPAdded = new EventEmitter<{
    sname: string;
    scontent: string;
  }>();

  servername = '';
  servercontent = '';

  addserv() {
    this.ServerAdded.emit({
      sname: this.servername,
      scontent: this.servercontent,
    });
  }

  addblprint() {
    this.BPAdded.emit({
      sname: this.servername,
      scontent: this.servercontent,
    });
  }
}
